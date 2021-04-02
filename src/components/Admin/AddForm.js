import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddForm = () => {
    const[imgUrl,setImgUrl]= useState(null)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const bookData = {
            name: data.book,
            author: data.author,
            price: data.price,
            imgUrl: imgUrl
        }
        fetch('https://immense-plateau-36237.herokuapp.com/addProduct',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    };
    const imgUpload = (event) => {
        console.log(event.target.files)
        const imgData=new FormData();
        imgData.set('key','fa0671d09ed646de7785a0b91b3d0f5d')
        imgData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imgData)
            .then(function (response) {
                 setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input className="form-control" type="text" name="book" placeholder="book-name" ref={register({ required: true })} />
                    {errors.book && <span>This field is required</span>}
                </div>

                <div className="mb-3">
                    <input className="form-control" type="text" name="author" placeholder="author-name" ref={register({ required: true })} />
                    {errors.author && <span>This field is required</span>}

                </div>

                <div className="mb-3">
                    <input className="form-control" type="text" name="price" placeholder="price" ref={register({ required: true })} />
                    {errors.price && <span>This field is required</span>}
                </div>

                <div className="mb-3">
                    <input className="form-control" onChange={imgUpload} type="file" name="bookCover" ref={register({ required: true })} />
                    {errors.bookCover && <span>This field is required</span>}
                </div>

                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddForm;
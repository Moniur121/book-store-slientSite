import React from 'react';
import './Book.css';
import deleteIcon from './logo/delete.png';
const Book = (props) => {
    const { name, author, price, _id } = props.pd;
    const deleteProduct = (id) => {
        fetch(`https://immense-plateau-36237.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="container">
            <div className="title-header">
                
                <div className="deleteBook-area mt-5 d-flex justify-content-between">
                    <span>{name}</span>
                    <span>{author}</span>
                    <span>${price}</span>
                    <button className="btn btn-warning" onClick={() => deleteProduct(_id)}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default Book;
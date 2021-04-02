import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css'
const CheckOut = () => {
    const [book, setBook] = useState([]);
    const[loggedInUser,setLoggedInUser]= useContext(UserContext);

    const { id } = useParams()
    useEffect(() => {
        fetch(`https://immense-plateau-36237.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setBook(...data))
    }, [])
    console.log(book)
    const pickOrders=()=>{
        const newUser = {
            email: loggedInUser.email,
            name:book.name,
            price: book.price,
            date: new Date()
        }
        fetch('https://immense-plateau-36237.herokuapp.com/itemOrders',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
           body:JSON.stringify(newUser)
        })
        console.log(newUser)
    }
    return (
        <div className="container">
            <h1>Checkout</h1>
            <div className="checkOut-area">
                <div className="  d-flex justify-content-between">
                    <span>Description</span>
                    <span>Quantity</span>
                    <span>Price</span>
                </div>
                <hr />
                <div className="    d-flex justify-content-between">
                    <span>{book.name}</span>
                    <span>1</span>
                    <span>${book.price}</span>
                </div>
                <hr />
                <div className="    d-flex justify-content-between">
                    <span>Total</span>
                    <span>${book.price}</span>
                </div>
                <hr />
            </div>
            <button onClick={pickOrders} className="btn btn-primary mt-2">Checkout</button>
        </div>
    );
};

export default CheckOut;
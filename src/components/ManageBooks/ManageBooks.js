import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './ManageBook.css'
const ManageBooks = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://immense-plateau-36237.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    return (
        <div className="container bg-manageBooks">
            <div className="title-area d-flex justify-content-between">
                    <span>Book Name</span>
                    <span>Author Name</span>
                    <span>Price</span>
                    <span>Action</span>
                </div>
                <hr/>
            {
                cart.map(pd => <Book pd={pd}></Book>)
            }
        </div>
    );
};

export default ManageBooks;
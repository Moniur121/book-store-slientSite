import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
 import OrderItem from '../OrderItem/OrderItem';
const Order = () => {
     const[loggedInUser,setLoggedInUser]=useContext(UserContext);
     const[itemOrder, setItemOrder]=useState([]);
     useEffect(() => {
        fetch(`https://immense-plateau-36237.herokuapp.com/getItemOrder/?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setItemOrder(data))
    }, [loggedInUser.email])
    console.log(itemOrder)
    return (
        <div className="container bg-manageBooks">
            <div className="title-area d-flex justify-content-between">
                    <span>Book Name</span>
                    <span>Price</span>
                    <span>Date/Time</span>
                </div>
                <hr/>
             {
                 itemOrder.map(item=> <OrderItem item={item}></OrderItem>)
             }
        </div>
    );
};

export default Order;
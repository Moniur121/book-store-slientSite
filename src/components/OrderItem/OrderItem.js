import React from 'react';

const OrderItem = ({item}) => {
    const{name,price,date}=item;
    return (
        <div>
             <div className="deleteBook-area mt-5 d-flex justify-content-between">
                    <span>{name}</span>
                    <span>${price}</span>
                    <span>{date}</span>
                 </div>
        </div>
    );
};

export default OrderItem;
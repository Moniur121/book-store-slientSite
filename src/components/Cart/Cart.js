import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import './Cart.css';
const Cart = (props) => {
    const history = useHistory();
    const { imgUrl, name ,price,_id,author} = props.pd;
   const handleCart=()=>{
    history.push(`/checkout/${_id}`)
   }

    return (
        <div>
            <div className="container">
            <div className="col mt-5">
                <div className="card text-center card-board p-3" >
                    <img className="w-100   img-fluid  mx-auto" src={imgUrl} alt=""/>
                    <div className="card-body">
                        <h3 className="text-info">{name}</h3>
                        <p>{author}</p>
                        <div className="title-area d-flex  justify-content-between">
                            <h3 className="text-success">${price}</h3>
                            <button onClick={handleCart} className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Cart;
import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://immense-plateau-36237.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    return (
        <div className="background-area">
            <div className="card-bg row row-cols-1 row-cols-md-4 g-4">
                {/* spinner uses. */}
                {
                    cart.length === 0 &&
                    <div class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                {
                    cart.map(pd => <Cart pd={pd}></Cart>)
                }
            </div>
        </div>
    );
};

export default Home;
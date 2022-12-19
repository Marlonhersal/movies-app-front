import React from 'react';

function MovieCard(props) {
    return (
        <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-img"/>
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div> 
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt=""/>
                    </figure>
                </div>
        </div> 
    );
}

export default MovieCard;
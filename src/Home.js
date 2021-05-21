import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <img className="home__image" 
                src=
                "https://i.ibb.co/RBgMhjc/itm-beautiful-facebook-couple-cover-photo2014-02-06-12-12-26-1.jpg"
                 alt="" border=""
                />

                <Product
                id="1234"
                title="whatever the fuck it is"
                price={10.99}
                rating={5}
                image="https://i.ibb.co/GFXR2Zt/photo-1535713875002-d1d0cf377fde.jpg"
                />
        </div>

        
    )
}

export default Home

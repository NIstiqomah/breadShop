import React, { ChangeEvent } from 'react';
import './styles/Homepage.scss';
import CarouselCard from './CarouselCard';

const Homepage = () => {
    const [name, setName] = React.useState(false);
    const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setName(true);
        } else {
            setName(false);
        }
    };
    return (
        <>
            <div className="home">
                <nav className="navbar sticky-top">
                    <div className="logo">
                        <h4>MYBREAD</h4>
                    </div>
                    <ul className={name ? 'slide' : 'not-slide'}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#gradient1">About Us</a>
                        </li>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                    <div className="menu-toggle">
                        <input type="checkbox" onChange={handleCheck} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <div className="content">
                    <h4>Artisanal Bread Delivered to Your Doorstep</h4>
                    <p>Experience the Warmth and Taste of Handcrafted Bread</p>
                    <button type="button">Order Now</button>
                </div>
            </div>
            <div className="gradient1" id="gradient1">
                <h3>ABOUT US</h3>
            </div>
            <div className="about">
                <div className="grid-container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-md-6">
                            <img
                                src="/src/assets/bread-about.png"
                                className="img-fluid"
                                alt="bread about"
                            />
                        </div>
                        <div className="col-sm-12 col-lg-6 col-md-6">
                            <p className="note">
                                Welcome to MyBread! Where we take pride in crafting the finest
                                artisanal breads using time-honored techniques and the finest
                                quality ingredients. Our passion for baking shines through in every
                                loaf we create.
                            </p>
                            <p className="mission">
                                “Our mission is to bring the warmth and taste of handcrafted bread
                                to your home, ensuring every slice is a moment of pure delight”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu" id="menu">
                <h3>MENU</h3>
                <p>This is our best seller breads. Let's try it!</p>
                <div className="container">
                    <CarouselCard />
                </div>
            </div>
        </>
    );
};

export default Homepage;

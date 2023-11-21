import React, { ChangeEvent } from 'react';
import './styles/Homepage.scss';

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
                            <a href="#">About Us</a>
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
            <div className="gradient1"></div>
            <div className="about">
                <h3>About Us</h3>
                <div className="grid-container">
                    <div className="row">
                        <div className="col-sm">
                            <img src="/src/assets/bread-about.png" alt="bread about" />
                        </div>
                        <div className="col-sm">
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
        </>
    );
};

export default Homepage;

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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis
                    cupiditate laborum exercitationem fugit voluptatem animi commodi iure. Quidem
                    maiores fuga magnam eos, ad temporibus excepturi consectetur incidunt placeat.
                    Laudantium?
                </p>
            </div>
        </div>
    );
};

export default Homepage;

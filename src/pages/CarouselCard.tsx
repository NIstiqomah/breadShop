import { Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';

const menu: Array<number> = [0, 1, 2, 3, 4, 5];
const path: string = '/src/assets/';
const imgs: Array<string> = [
    'macaroon.jpg',
    'doughnuts.jpeg',
    'pizza.jpeg',
    'sandwich-hotdog.jpg',
    'sandwich.jpg',
    'tart.jpg',
];
const titles: Array<string> = ['Macaroon', 'Doughnut', 'Pizza', 'Hotdog', 'Sandwich', 'Tart'];

const CarouselCard = () => {
    const slides = (acc: Array<any>, cur: number, index: number) => {
        const group = Math.floor(index / 3);
        if (!acc[group]) {
            acc[group] = [];
        }
        acc[group].push(cur);
        return acc;
    };

    return (
        <Carousel>
            {menu.reduce(slides, []).map((item, index) => (
                <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center">
                        {item.map((item: any, index: any) => {
                            return (
                                <Card
                                    key={index}
                                    style={{
                                        width: '18rem',
                                        padding: '10px',
                                        // display: 'flex',
                                        // alignItems: 'center',
                                        margin: '4px',
                                    }}
                                >
                                    <Card.Img variant="top" src={`${path + imgs[item]}`} />
                                    <Card.Body>
                                        <Card.Title
                                            style={{
                                                fontSize: '12pt',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {titles[item]}
                                        </Card.Title>
                                        <div className="d-grid gap-2 col-6 mx-auto">
                                            <Button
                                                variant="primary"
                                                style={{
                                                    fontSize: '10pt',
                                                    borderRadius: '20px',
                                                    border: 'none',
                                                    color: '#fff497',
                                                    backgroundColor: '#494049',
                                                }}
                                            >
                                                See Details
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselCard;

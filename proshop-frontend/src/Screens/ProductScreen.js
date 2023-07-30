import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card,  Container } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';


const ProductScreen = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${id}`);

            setProduct(data)
        }
        fetchProduct()
    }, [id])

    

    return (

        <Container className='offset-md-1'>

            <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
            <Row >
                <Col md={4} style={{marginLeft:1}}>
                    <Image src={product.image} alt={product.name} fluid style={{ maxWidth: '100%', maxHeight: '100%', marginRight:0 }} />
                </Col>
                <Col md={3} style={{marginRight:0, }}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description : ${product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={2}  >
                    <Card >
                        <ListGroup variant='flush'>
                            <ListGroup.Item >
                                <Row >
                                    <Col >
                                        Price:
                                    </Col>
                                    <Col >
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default ProductScreen

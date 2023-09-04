import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Container, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { ListProductDetails } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/loader';
import Message from '../components/message';


const ProductScreen = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetail)
    const { loading, error, product } = productDetails

    console.log(productDetails);

    useEffect(() => {
        dispatch(ListProductDetails(id))
    }, [id, dispatch])



    return (

        <Container className='offset-md-1'>

            <Link className='btn btn-dark my-3' to='/'>
                Go Back
            </Link>
            {loading ? <Loader /> : error ? <Message>{error}</Message> :
                <Row >
                    <Col md={4} style={{ marginLeft: 1 }}>
                        <Image src={product.image} alt={product.name} fluid style={{ maxWidth: '100%', maxHeight: '100%', marginRight: 0 }} />
                    </Col>
                    <Col md={3} style={{ marginRight: 0, }}>
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
                    <Col md={3}  >
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
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item className="text-center" >
                                    <Button
                                        className='btn-block'
                                        type='button'
                                        disabled={product.countInStock === 0}
                                    >ADD TO CART
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>

                </Row>

            }
        </Container>

    )
}

export default ProductScreen

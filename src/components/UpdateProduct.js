import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { updateProduct, findById } from './Service';
import "./Card.css";

const UpdateProduct = () => {
    const [product, setProduct] = useState({name:'', price:'', introduce:''});
    const navigate = useNavigate();
    const { pid } = useParams();

    useEffect(() => {
        findProduct(pid);
    }, [pid])

    const findProduct = (pid) => {
        findById(pid)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleName = (e) => {
        const newName = e.target.value;
        setProduct(prevProduct => ({
            ...prevProduct,
            name: newName
        }))
    }
    const handlePrice = (e) => {
        const newPrice = e.target.value;
        setProduct(prevProduct => ({
            ...prevProduct,
            price: newPrice
        }))
    }
    const handleIntroduce = (e) => {
        const newIntroduce = e.target.value;
        setProduct(prevProduct => ({
            ...prevProduct,
            introduce: newIntroduce
        }))
    }

    const updateP = (e) => {
        e.preventDefault();
        const { pid, name, price, introduce } = product;

        updateProduct(pid, {name, price, introduce})
            .then((response) => {
                console.log(response.date);
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <Row className="rowAdd">
                <Col>
                    <Card className="addProduct-card">
                        <Card.Body>
                            <Card.Title className="cardTitle">編輯產品</Card.Title>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">
                                        商品名稱:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={product.name}
                                        onChange={handleName}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        價錢:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-label"
                                        id="price"
                                        value={product.price}
                                        onChange={handlePrice}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        商品介紹:
                                    </label>
                                    <textarea
                                        id="textareaInput"
                                        value={product.introduce}
                                        onChange={handleIntroduce}
                                    />
                                    <div>
                                        <button className="btn btn-success" onClick={(e) => updateP(e)}>送出</button>
                                    </div>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default UpdateProduct;
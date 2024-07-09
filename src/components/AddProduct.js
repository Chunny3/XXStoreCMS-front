import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Card } from 'react-bootstrap';
import { addProduct } from './Service';
import "./Card.css";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] =useState('');
    const [introduce, setIntroduce] = useState('');
    const navigate = useNavigate();

    const handleNameChange =(e) => {
        setName(e.target.value);
    }
    const handlePriceChange =(e) =>{
        setPrice(e.target.value);
    }
    const handleTextChange = (e) => {
        setIntroduce(e.target.value);
    }

    const create = (e) =>{
        e.preventDefault();
        const product = { name, price, introduce}

        addProduct(product)
        .then((response) => {
            navigate("/")
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="container">
            <Row className="rowAdd">
                <Card className="addProduct-card">
                    <Card.Body>
                        <Card.Title className="cardTitle">新增產品</Card.Title>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">
                                    商品名稱:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
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
                                    value={price}
                                    onChange={handlePriceChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    商品介紹:
                                </label>
                                <textarea
                                    id="textareaInput"
                                    value={introduce}
                                    onChange={handleTextChange}
                                />
                                <div>
                                    <button className="btn btn-success" onClick={(e) => create(e)}>送出</button>
                                </div>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
};

export default AddProduct;
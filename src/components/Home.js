import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { allProduct, deleteProduct } from "./Service";
import "./Card.css";


const Home = () => {
    const [products, setProducts] = useState([]);
    const { pid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getAllProduct();
    })
    const getAllProduct = () => {
        allProduct(pid)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const deleteP = (pid) => {
        if (!window.confirm("確定要刪除此商品嗎?")){
            getAllProduct(); 
        } else {
            deleteProduct(pid)
                .then((response) => {
                    getAllProduct();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
           
    }

    const updateP = (pid) => {
        navigate(`/updateProduct/${pid}`);
    }

    return (
        <div className="container">
            <Row>
                {products.map((product) => (
                    <Col key={product.pid} md={3}>
                        <Card style={{ height: "200px", marginTop: "20px" }}>
                            <Card.Body style={{ whidth: "auto", height: "100px" }}>
                                <Card.Title style={{ fontSize: "20px", textAlign: "center" }}>
                                    {product.name}
                                </Card.Title>
                                <Card.Text style={{ textAlign: "center" }}>
                                    {product.introduce}
                                </Card.Text>
                                <Card.Text style={{ textAlign: "center" }}>
                                    {product.price}
                                </Card.Text>
                                <Card.Text style={{ textAlign: "center" }}>
                                    <button
                                        className="btn btn-success"
                                    onClick={() => updateP(product.pid)}
                                    >編輯</button>&emsp;
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteP(product.pid)}
                                    >刪除</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default Home;
import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from 'axios';


function Saved() {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // const {id} = useParams()
  useEffect(() => {
    API.getBooks()
      .then(res => {
        setBook(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <Container>
    <Row>
      <Col size="md-12">
        <Jumbotron />
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
        <h2>
          Saved Books
        </h2>

        {book.length ? (
                <List>
                  {book.map(book => (
                    <div className="card mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img src={book.image} className="card-img" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text"><small className="text-muted">{book.author}</small></p>
                            <p className="card-text">{book.description}</p>
                            <a href={book.link} className="btn btn-light" role="button" target="_blank">View Book</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </List>
                ) : (
                <h3>No Results to Display</h3>
              )}
      </Col>
    </Row>
  </Container>
    );
  }

export default Saved;
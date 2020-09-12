import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Home() {
  // Setting our component's initial state
  const [books, setBooks] = useState({})
  const [booksresults, setBookRes] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function addBook(event) {
    event.preventDefault();
    console.log(event.target);
    API.saveBook()
      .then(res => console.log("hola "+res)/*loadBooks()*/)
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const value = event.target.value;
    console.log(value);
    setBooks(value);
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
      API.searchBooks(books)
        .then(res => {
          setBookRes(res.data.items)
          console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail)
        }/*setBooks(res.data)*/)
        .catch(err => console.log(err));
  };

    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <form>
                <Input
                  onChange={handleInputChange}
                  name="book"
                  placeholder="Book Title (required)"
                />
                <FormBtn
                  onClick={handleFormSubmit}
                >
                  Search Book
                </FormBtn>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h2>
                Results
              </h2>
              {booksresults.length ? (
                <List>
                  {booksresults.map(book => (
                    <div className="card mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img src="../assets/images/imagepc.png" className="card-img" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <p className="card-text"><small className="text-muted">{book.volumeInfo.authors}</small></p>
                            <p className="card-text">{book.volumeInfo.description}</p>
                            <a href={book.volumeInfo.previewLink} className="btn btn-light" role="button" target="_blank">View Book</a>
                            <FormBtn
                              onClick={addBook}
                            >
                            Save Book
                            </FormBtn>
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
      </div>

    );
  }


export default Home;
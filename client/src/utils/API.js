import axios from "axios";

export default {
  searchBooks: function(search){
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=search+"+search)
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  saveBook: function(bookData) {
    return axios.post("/api/books/", bookData);
  }
};

import axios from "axios";

export default {
  // Gets all titles
  getBook: function (title) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
  },
  // Saves a post to the database
  saveBook: function (saveBook) {
    return axios.post("/api/books", saveBook);
  },
  // Deletes the post with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};

  
  

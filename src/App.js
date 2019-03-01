import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import _ from "lodash";
import SearchBar from "./components/SearchBar";
import BookDetail from "./components/BookDetail";
import { BookList, BookListItem } from "./components/BookList";
import API from "./utils/API";

//this allows the component did mount and render to work
class App extends Component {
  //state will reload the page every time one of these things is true
  state = {
    books: [],
    selectedBook: null,
  };
  //called the first time the site renders
  //do the set up for the application - know you have a component on the page
  componentDidMount() {
    this.searchYouTube("kittens in buckets");
  };
  
  searchYouTube = term => {
    API.searchBooks(term)
    .then(res => this.setState({ books: res.data.items, selectedBook: res.data.items[0] }))
    .catch(err => console.log(err));
  };

  selectBook = book => {
    this.setState({ selectedBook: book });
  }

  throttledSearch = _.debounce(this.searchYouTube, 800);

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar searchYouTube={this.throttledSearch} />
          </Col>
        </Row>
        <Row>
          <Col md="9">
            <BookDetail book={this.state.selectedBook} />
          </Col>
          <Col md="3">
            <BookList>
              {this.state.books.map(book => (
                <BookListItem 
                  book={book} 
                  key={book.id.bookId || book.id.playlistId} //special key that React uses and it never changes-- we can't use it
                  selectedBook={this.state.selectedBook} 
                  selectBook={this.selectBook}
                /> 
              ))}
            </BookList>
          </Col>
        </Row>
      </Container>
      
    );
  }
};

export default App;
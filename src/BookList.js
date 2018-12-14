import React, {Component} from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'

class BookList extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    const books = this.props.books

    return (
      <div className="listbooks">
        <div className="listtitle">
          <h1>MyReads</h1>
        </div>
        <div className="listcontent">
          <div>
            <BookShelf books={books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" onChangeShelf={this.props.onChange}/>

            <BookShelf books={books.filter((book) => (book.shelf === "read"))} title="Read" onChangeShelf={this.props.onChange}/>
            <BookShelf books={books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" onChangeShelf={this.props.onChange}/>
          </div>
        </div>
        <div className="opensearch">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookList;

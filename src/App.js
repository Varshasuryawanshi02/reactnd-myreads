import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    Books: [] }
 componentDidMount() {
    this.SearchBooks()
  }

 SearchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({Books: books})
    })
  }
 updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.SearchBooks()
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<BookList books={this.state.Books} onChange={this.updateBooks}/>)}/>
        <Route exact path="/search" render={({history}) => (<BookSearch onChange={this.updateBooks} myBooks={this.state.Books}/>)}/>
      </div>
    )
  }
}

export default BooksApp
   
   

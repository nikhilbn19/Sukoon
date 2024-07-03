import React from 'react';
import bookImage from '../assets/images/book.jpg';
import '../assets/css/style.css'
import Header from './Header';

const Book = () => {
  return (
    <>
    <Header/>
    <section className="book" id="book">
      <h1 className="heading"> <span> book </span> now </h1>
      <div className="row">
        <div className="image">
          <img src={bookImage} alt="Book Now" />
        </div>
        <form action="">
          <h3>book appointment</h3>
          <input type="text" placeholder="your name" className="box" />
          <input type="number" placeholder="your number" className="box" />
          <input type="email" placeholder="your email" className="box" />
          <input type="date" className="box" />
          <input type="submit" value="book now" className="btn" />
        </form>
      </div>
    </section>
    </>
  );
}

export default Book;

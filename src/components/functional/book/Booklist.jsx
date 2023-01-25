import React from 'react';
import Book from './Book';

function Booklist() {
  const books = [
    {
      title: 'I Love You to the Moon and Back',
      author: 'Amelia Hepworth',
      img: 'https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg',
    },
    {
      title: 'Our Class is a Family',
      author: 'Shannon Olsen',
      img: 'https://m.media-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
    {
      title: 'Lessons in Chemistry',
      author: 'Bonnie Garmus',
      img: 'https://m.media-amazon.com/images/I/41YnRn+okDL.jpg',
    },
    {
      title: 'The Light We Carry',
      author: 'Michelle Obama',
      img: 'https://m.media-amazon.com/images/I/51RHVNwB0YL.jpg',
    },
    {
      title: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin',
      img: 'https://m.media-amazon.com/images/I/61RFu7F6K6L.jpg',
    },
    {
      title: 'Solito',
      author: 'Javier Zamora',
      img: 'https://m.media-amazon.com/images/I/41log-lGxvL.jpg',
    },
  ];
  books.map((book) => {
    console.log(book.title);
    return;
  });

  return (
    <section className='Booklist'>
      {books.map((book, idx) => (
        <Book key={idx} book {...book} />
      ))}
    </section>
  );
}

export default Booklist;

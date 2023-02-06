import React from 'react';

function Book(props) {
  const { author, img, title } = props;
  return (
    <article className='Book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>by {author}</h4>
    </article>
  );
}

export default Book;

import React from 'react';

const BookCard = ({el}) => {
  let image = el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.smallThumbnail;
  return (

    <div key={el.id}>
      <h1>{el.name}</h1>
      <img src={image} width={"100px"} alt="img"/>
    </div>
  );
};

export default BookCard;
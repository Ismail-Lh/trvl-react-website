import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({ src, text, path, label }) => {
  return (
    <>
      <li className='cards__item'>
        <Link to={path} className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img src={src} alt='travel img' className='cards__item__img' />
          </figure>

          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}hello</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;

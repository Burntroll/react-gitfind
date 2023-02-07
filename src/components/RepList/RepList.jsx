import React from 'react';
import './styles.css';

const RepList = ({title, description}) => {
  return (
    <div className='item-list'>
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </div>
  )
};

export { RepList };

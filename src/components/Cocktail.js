import React from 'react';
import { Link } from 'react-router-dom'

const Cocktail = ({id, name, image, info, glass}) => {
  return (
    <article className='cocktail'>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>

        
        {/* use this method below for nested nested links or the next method after */}
        {/* <Link to={`/cocktail/${id}`}>details</Link> */}

        {/* second method */}
        <Link to={`/${id}`}>details</Link>
      </div>
    </article>
  )
}

export default Cocktail

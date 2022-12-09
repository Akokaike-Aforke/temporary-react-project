import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h4>oops!</h4>
      <p>it's an error</p>
      <Link to='/'>back home</Link>
    </div>
  )
}

export default Error

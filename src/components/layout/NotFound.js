import React from 'react';

const NotFound = () => (
  <main className='not-found'>
    <div className='intro-content'>
      <h2>
        404 - oops! <br />
        Something`s missing
      </h2>
      <a href='/' className='btn btn-primary'>
        Back to home
      </a>
    </div>

    <div className='intro-img'>
      <img src='./img/404.png' alt='404' />
    </div>
  </main>
);

export default NotFound;

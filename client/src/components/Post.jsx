import React from 'react';

const Post = () => {
  return (
    <div className='post'>
      <div className='image'>
        <img
          src='https://www.tabou.pl/wp-content/uploads/2022/11/jazda-na-rowerze-mtb-gorskim.jpg'
          alt=''
        />
      </div>
      <div className='texts'>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
        <p className='info'>
          <a
            href=''
            className='author'
          >
            Michał Siewierski
          </a>
          <time>2023-02-18 12:12</time>
        </p>
        <p className='summary'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam esse
          velit ea, consequatur sed iusto tenetur reprehenderit sit corrupti,
          quia et nisi, nulla maiores itaque. Quibusdam placeat harum architecto
          incidunt aspernatur error ratione at laborum autem officiis, neque
          unde adipisci?
        </p>
      </div>
    </div>
  );
};

export default Post;

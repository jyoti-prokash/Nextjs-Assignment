import React from 'react';
import FeaturePost from './Components/FeaturePost';

const Home = async() => {
  return (
    <div>
        <section className='container mx-auto mt-20'>
          <FeaturePost></FeaturePost>
        </section>
    </div>
  );
};

export default Home;
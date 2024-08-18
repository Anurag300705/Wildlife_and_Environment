import React from 'react';
import './Section03.css';


const Section01 = () => {
  return (
      <div id="container">
        <section class="heading">
            <p id="para">Know about biodiversity & wildlife</p>
        </section>

        <section class="boxes">
            <div id="box1">
                <p id="para_box1">QUES. OF THE DAY</p>
                <button id="quiz">Answer & Earn points</button>
            </div>

            <div id="box2">
                <p id="para_box2">ARTICLE ABOUT US</p>
                <button id="about">Know more</button>
            </div>
        </section>

    </div>
  );
};

export default Section01;

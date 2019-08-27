import React from 'react';
import Test from './test.js';
import PropTypes from 'prop-types';

// function Food({fav}){
//   console.log(fav);
  
//   return (
//     <h3>test {fav}</h3>
//   );
// }

const foodILike = [
  {
    id : 1,
    name : "podo",
    image : "https://placehold.it/50x50",
    rating : 5
  },
  {
    id : 2,
    name : "apple",
    image : "https://placehold.it/100x100",
    rating : 2
  },
  {
    id : 3,
    name : "banana",
    image : "https://placehold.it/150x150",
    rating : 4.4
  },
  {
    id : 4,
    name : "tomato",
    image : "https://placehold.it/200x200",
    rating : 1
  },
  {
    id : 5,
    name : "melon",
    image : "https://placehold.it/250x250",
    rating : 3.8
  }
];

function Food(props) {
  // console.log(props.name);
  // console.log(props.image);

  return (
    <div>
      <h3>Fruits {props.name}</h3>
      <h4>{props.rating} / 5.0</h4>
      <img src={props.picture} alt={props.name} />
    </div>
  );
}

Food.propTypes = { // type check
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.array.isRequired
};

function renderFood(item){
  // console.log(item);
  return <Food key={item.id} name={item.name} picture={item.image} rating={item.rating} />
  
}

function App() {
  return (
    <div>
      <Test />
      {foodILike.map(renderFood)}
    </div>

  );
}

export default App;

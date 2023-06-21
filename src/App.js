import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';




function App() {
  const [foodToDisplay, setFoodToDisplay] = useState(foods);

  const createFood = (newFood) => {
    // new list = an array with the new movie + all the movies we had before
    const newList = [newFood, ...foodToDisplay];
  
    // update state
    setFoodToDisplay(newList);
  }

  return (
    <div className="App">
      <AddFoodForm callbackToCreate={createFood}/>

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>


        {/* Render the list of Food Box components here */}

          {foodToDisplay.map((foodObj, index) => {
            return (
                  <div>
          <FoodBox foodDetails={foodObj} />
                  </div>
            );

          })}

    </div>
  );
}

export default App;
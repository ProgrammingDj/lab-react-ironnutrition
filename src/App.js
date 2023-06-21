import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>


        {/* Render the list of Food Box components here */}

          {foodsToDisplay.map((foodObj, index) => {
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
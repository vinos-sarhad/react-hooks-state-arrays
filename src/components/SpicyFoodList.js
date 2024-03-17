import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

 

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // console.log(newFood);
    const newlist=[...foods,newFood]
    setFoods(newlist)
 
  }
function handleClicked( id){
//   const newListd= foods.filter(food=>  food.id !==id  )
//  setFoods(newListd)

const newheat=foods.map(food=>{

 
   if(food.id===id){
    return{ ...food,heatLevel:food.heatLevel+1}
   }else{
    return food
   }
 
 
})
 setFoods(newheat )
 console.log(newheat)

}
const [filterBy, setFilterBy] = useState("All");
 

const foodsToDisplay = foods.filter((food) => {
  if (filterBy === "All") {
    return true;
  } else {
    return food.cuisine === filterBy;
  }
});

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={()=>handleClicked(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

 
function handleFilterChange(event) {
  setFilterBy(event.target.value);
}
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilterChange}>
    <option value="All">All</option>
    <option value="American">American</option>
    <option value="Sichuan">Sichuan</option>
    <option value="Thai">Thai</option>
    <option value="Mexican">Mexican</option>
  </select>
    </div>
  );
}

export default SpicyFoodList;

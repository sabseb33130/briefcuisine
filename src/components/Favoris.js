//const { useState, useEffect } = require("react");

export function Favoris() {
  

 
    const stockage1 = JSON.parse(localStorage.getItem("stockage"));
    
    
   console.log(stockage1);
   console.log(stockage1.meals[0].strMeal);

  
  return(
    <div>
      <p>{stockage1.meals[0].strMeal}</p>
    
    </div>
  )
}

import React from "react";

const test = () => {
  const meals = [
    {
      apps: "Chips n queso",
      entree: ["Cuban Especial", "Burrito", "Tacos", "quesadilla"],
      side: "plantains",
      desert: "ice-cream",
    },
  ];
  return (
    <div>
      <h2>This will hold come recipes!</h2>

      {meals.map((food) => {
        return (
          <ul>
            <li>{food.entree}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default test;

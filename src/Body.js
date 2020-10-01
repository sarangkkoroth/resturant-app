import React from "react";
import "./Body.css";
import GuestBook from "./GuestBook";

import Product from "./Product";

function Body() {
  return (
    <div className="body">
      <div className="body_about">
      <div className="body_aboutTop">
        <h2>PUNJABI DHABA</h2>
        <p>
        PUNJA2I DHABA joyfully welcomes you to a splendid and memorable
          experience in dining in a dignified and serene ambiance. Situated on
          bustling Mosque Road in Frazer Town Savoury Restaurant offers you an
          array of amazing selection of authentic and specialized Arabian
          dishes, Indian delicacies, Chinese and Tandoor choices, Seafood
          delights & South Indian Snacks & Breakfast, to satisfy every
          discerning diner.
        </p>
        <button className="body_aboutReadmore" >READMORE</button>
        </div>
        <div className="body_aboutBottom">
            <h2>Our Specialities</h2>
            <ul classname="body_aboutBottomList">
                <li>
                Authentic Arabian Cuisines
                </li>
                <li>
                Specialized  South Indian Menu
                </li>
                <li>
                Specialized North Indian Menu
                </li>
                <li>
                Special  Tandoor Flavors and Chinese Dishes
                </li>
                <li>
                Snacks  &  Sandwiches and Desserts
                </li>
                <li>
                Variety Fresh Juices
                </li>

            </ul>
        </div>
        <GuestBook/>
      </div>
      
      <div className="body_items">
        <div className="body_itemRow">
        <Product className="body_itemProduct" image="https://upload.wikimedia.org/wikipedia/commons/5/5d/Chicken_65_%28Dish%29.jpg"
        name="Chicken 65"
        price="165"/>
        <Product image="https://upload.wikimedia.org/wikipedia/commons/5/5d/Chicken_65_%28Dish%29.jpg"
        name="Chicken 65"
        price="165"/>
        <Product image="https://upload.wikimedia.org/wikipedia/commons/5/5d/Chicken_65_%28Dish%29.jpg"
        name="Chicken 65"
        price="165"/>
       </div>
       <div className="body_itemRow">
        <Product image="https://upload.wikimedia.org/wikipedia/commons/5/5d/Chicken_65_%28Dish%29.jpg"
        name="Chicken 65"
        price="165"/>
        <Product image="https://upload.wikimedia.org/wikipedia/commons/5/5d/Chicken_65_%28Dish%29.jpg"
        name="Chicken 65"
        price="165"/>
        <Product image="https://upload.wikimedia.org/wikipedia/commons/5/5d/Chicken_65_%28Dish%29.jpg"
        name="Chicken 65"
        price="165"/>
       </div>
      </div>
    </div>
  );
}

export default Body;

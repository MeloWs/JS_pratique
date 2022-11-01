import { plantList } from "../datas/plantList";
import "../assets/styles/shoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import { useState } from "react";

const ShoppingList = ({ cart, updateCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  let plantCathegories = [];
  plantList.forEach((data, index) => {
    plantCathegories.push(data.category);
  });
  plantCathegories = plantCathegories.filter(function (ele, pos) {
    return plantCathegories.indexOf(ele) === pos;
  });

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }
  return (
    <div>
      <Categories
        categories={plantCathegories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !selectedCategory || selectedCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ShoppingList;

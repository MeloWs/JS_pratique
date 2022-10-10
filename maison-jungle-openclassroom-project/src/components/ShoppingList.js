import { plantList } from "../datas/plantList";
import "../assets/styles/shoppingList.css";
import PlantItem from "./PlantItem";

const ShoppingList = () => {
  let plantCathegories = [];
  plantList.forEach((data, index) => {
    plantCathegories.push(data.category);
  });
  plantCathegories = plantCathegories.filter(function (ele, pos) {
    return plantCathegories.indexOf(ele) === pos;
  });

  return (
    <div>
      <ul>
        {plantCathegories.map((cath) => (
          <li key={cath}>{cath}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <PlantItem key={plant.id} object={plant} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

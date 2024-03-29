import CareScale from "./CareScale";
import "../assets/styles/plantItem.css";

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

const PlantItem = ({ cover, name, water, light, price }) => {
  return (
    <li className="lmj-plant-item" onClick={() => handleClick}>
      <span className="lmj-plant-item-price">{price}€</span>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
};

export default PlantItem;

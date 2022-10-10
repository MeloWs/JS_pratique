import CareScale from "./CareScale";
import "../assets/styles/plantItem.css";

function isSpecialOffer(obj) {
  return (
    obj.isSpecialOffer && (
      <div className="lmj-sales">
        <p>Soldes</p>
      </div>
    )
  );
}

const PlantItem = ({ object }) => {
  return (
    <li className="lmj-plant-item">
      <img
        className="lmj-plant-item-cover"
        src={object.cover}
        alt={`${object.name} cover`}
      />
      {isSpecialOffer(object)}
      {object.name}
      {object.isBestSale && <span> 🔥</span>}
      <div>
        <CareScale careType="water" scaleValue={object.water} />
        <CareScale careType="light" scaleValue={object.light} />
      </div>
    </li>
  );
};

export default PlantItem;

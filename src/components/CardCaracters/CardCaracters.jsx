import "./CardCaracters.css";
import Gender from "../Icons/Gender";
import Location from "../Icons/Location";
import Planet from "../Icons/Planet";
import Species from "../Icons/Species";
import Status from "../Icons/Status";

const CardCaracters = ({ caracterData }) => {
  const { name, status, species, gender, origin, location, image } =
    caracterData;
  return (
    <div className="caracter">
      <img src={image} className="caracter-img" alt="titilo" />
      <div className="caracter-content">
        <p className="caracter-title">{name}</p>
        <div className="status-tag">
          <Status />
          <span className={`tag tag--${status.toLowerCase()}`}>{status}</span>
        </div>
        <li className="caracter-info">
          <ul className="caracter-attribute">
            <Gender />
            <span>{gender}</span>
          </ul>
          <ul className="caracter-attribute">
            <Species />
            <span>{species}</span>
          </ul>
          <ul className="caracter-attribute">
            <Planet />
            <span>{origin.name}</span>
          </ul>
          <ul className="caracter-attribute">
            <Location />
            <span>{location.name}</span>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default CardCaracters;

import LOGO from "../../assets/name.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="rick-and-morty-container">
      <picture>
        <img
          src={LOGO}
          className="rick-and-morty-img"
          alt="rick and morty logo"
        />
      </picture>
    </div>
  );
};

export default Logo;

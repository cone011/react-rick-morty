import "./Spinner.css";
import IAMGE from "../../../assets/splash_2.png";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={IAMGE} className="spinner-logo" alt="spinner-edit" />
      <p className="spinner-title">Loading.....</p>
    </div>
  );
};

export default Spinner;

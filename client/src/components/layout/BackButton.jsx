import { Link } from "react-router-dom";
import LeftArrow from "../../assets/Vector.png";

const BackButton = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-[19px] py-3 px-6 text-gray600 font-bold ">
      <Link className="inline-block" to={"/"}>
        <button className="flex gap-2">
          <img src={LeftArrow} alt="" /> Volver
        </button>
      </Link>
    </div>
  );
};

export default BackButton;

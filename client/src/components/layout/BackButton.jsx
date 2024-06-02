import LeftArrow from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-lg mx-auto my-[19px] py-3 px-6 text-gray600 font-bold ">
      <button onClick={() => navigate(-1)} className="flex gap-2">
        <img src={LeftArrow} alt="" /> Volver
      </button>
    </div>
  );
};

export default BackButton;

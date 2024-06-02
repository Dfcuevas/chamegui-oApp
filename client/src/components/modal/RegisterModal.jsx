/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RegisterModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-gray900 bg-opacity-90 flex items-center justify-center z-50 px-5">
      <div className="flex flex-col max-w-[478px] bg-white  rounded-[20px] px-5 py-12">
        <h2 className="font-Lora font-bold text-center text-base italic mb-6">
          Chameguiño
        </h2>
        <h3 className="text-center font-bold text-sm mb-6">Crea tu cuenta</h3>
        <form className="flex flex-col mb-6">
          <label className="mb-[14px] font-semibold text-[12px] text-gray500">
            Nombre y apellido
            <input
              className="block w-full border-b border-gray500 outline-none py-1"
              type="text"
            />
          </label>
          <label className="mb-[14px] font-semibold text-[12px] text-gray500">
            Correo electronico
            <input
              className="block w-full border-b border-gray500 outline-none py-1"
              type="email"
            />
          </label>
          <label className="mb-[14px] font-semibold text-[12px] text-gray500">
            Contraseña
            <input
              className="block w-full border-b border-gray500 outline-none py-1"
              type="password"
            />
          </label>
        </form>
        <div className="flex gap-5 items-center mb-6">
          <span className="text-[12px] font-OpenSans">¿Ya tienes cuenta?</span>
          <Link className="font-semibold font-OpenSans text-[12px]" to="/login">
            Iniciar sesión
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <button className="bg-indigo300 rounded-lg w-full text-xs py-2 font-bold">
            Continuar
          </button>
          <button
            className="rounded-lg w-full text-xs py-2 font-bold"
            onClick={closeModal}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;

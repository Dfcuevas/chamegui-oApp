import MenuHamburger from "../../assets/menu-burger.png";

const Navbar = () => {
  return (
    <nav className="md:mx-auto  flex justify-between items-center px-[16px] md:max-w-screen-lg md:px-6 md:py-8 py-4">
      <div>
        Logo <span className="font-bold">chameguiño</span>
      </div>
      <div className="md:hidden cursor-pointer">
        <img src={MenuHamburger} alt="Icono del menu hamburguesa" />
      </div>

      <ul className="hidden md:flex gap-5">
        <a href="">
          <li>Home</li>
        </a>
        <a href="">
          <li>Preguntas frecuentes</li>
        </a>
        <a href="">
          <li>Beneficios</li>
        </a>
      </ul>

      <button className="hidden md:block cursor-pointer border py-3 px-6 border-indigo500 rounded-lg">
        Iniciar sesión
      </button>
    </nav>
  );
};

export default Navbar;

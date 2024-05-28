import Facebook from "../../assets/mdi_facebook.png";
import Instagram from "../../assets/mdi_instagram.png";
import Twitter from "../../assets/X-Twitter-Logo--Streamline-Logos-Block.png";

const Footer = () => {
  return (
    <footer className="bg-orange50 px-5 py-8">
      <div className="mb-6 md:flex justify-between flex-1 md:max-w-screen-lg md:m-auto md:gap-6">
        <div className="mb-6">
          <div className="flex gap-5 text-sm justify-around md:gap-14">
            <ul>
              <li className="mb-4">
                <h3 className="font-bold">Información</h3>
              </li>
              <a href="">
                <li className="mb-3">Terminos y condiciones</li>
              </a>
              <a href="">
                <li>Legales</li>
              </a>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="mb-1">
                <h3 className="font-bold">Navegación</h3>
              </li>
              <a href="">
                <li>Inicio</li>
              </a>
              <a href="">
                <li>Acerda de Huellitas</li>
              </a>
              <a href="">
                <li>Preguntas frecuentes</li>
              </a>
              <a href="">Contacto</a>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-xs mb-1 font-OpenSans">
            Entérate de las novedades
          </h3>
          <form className="flex flex-col gap-7">
            <input
              type="email"
              placeholder="Escribe tu correo electrónico"
              className="placeholder:text-xs py-[9.5px] px-3 rounded-[4px] border border-grayBorder font"
            />
            <button className="rounded-lg bg-indigo500 py-2 font-OpenSans text-md font-bold">
              Enviar
            </button>
            <p className="font-OpenSans text-sm">
              Suscribete al boletin para acceder a información y novedades
            </p>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="order-1 text-center font-OpenSans text-xs">
          2024 Todos los derechos reservados
        </p>
        <div className="flex justify-center gap-5 ">
          <img src={Facebook} alt="Icono de facebook" />
          <img src={Instagram} alt="Icono de instagram" />
          <img src={Twitter} alt="Icono de twitter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

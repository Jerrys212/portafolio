import logo from "../assets/Recurso 2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="contenedor header__contenido">
        <div className="header__barra">
          <div className="header__logo">
            <img src={logo} />
          </div>
          <nav className="navegacion">
            <a className="navegacion__link" href="#inicio">
              Inicio
            </a>
            <a className="navegacion__link" href="#servicios">
              Experiencia
            </a>

            <a className="navegacion__link" href="#proyectos">
              Proyectos
            </a>
            <a className="navegacion__link" href="#contacto">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

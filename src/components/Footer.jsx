const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__grid contenedor">
          <div className="telefono">
            <div className="telefono__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-call"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </div>
            <div className="telefono__texto">
              <h3>5548680612</h3>
              <p>Lunes a Viernes 9:00am - 17:00pm</p>
            </div>
          </div>
          <div className="correo">
            <div className="correo__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </div>
            <div className="correo__texto">
              <h3>Jerryrogers2305@gmail.com</h3>
              <h3>Jerryxd212@gmail.com</h3>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy">
        <p>Todos los derechos reservados Gerardo Garcia &copy;</p>
      </div>
    </>
  );
};

export default Footer;

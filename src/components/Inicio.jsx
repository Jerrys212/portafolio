const Inicio = () => {
  return (
    <>
      <section class="inicio ">
        <div className="inicio__grid ">
          <div className="inicio__descripcion">
            <h2 className="inicio__heading">¡Hola Soy Gerardo!</h2>
            <p className="inicio__texto">
              Poseo más de 2 años de experiencia en el desarrollo de
              aplicaciones y API REST. Durante este tiempo, he trabajado con
              tecnologías como React JS, Express JS, Node JS y Mongo DB, lo que
              me ha permitido adquirir un sólido conocimiento en el desarrollo
              de aplicaciones web.
            </p>
            <a
              href="https://www.canva.com/design/DAEhG-SO1cU/cAZaLIhICk8rsyKv52Vsfw/view?utm_content=DAEhG-SO1cU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              target="_blank"
              className="inicio__boton"
            >
              Descargar CV
            </a>
          </div>
          <div className="inicio__img"></div>
        </div>
      </section>
    </>
  );
};

export default Inicio;

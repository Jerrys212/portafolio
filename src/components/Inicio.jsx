const Inicio = () => {
    return (
        <>
            <section className="inicio">
                <div className="inicio__grid ">
                    <div className="inicio__descripcion">
                        <h2 className="inicio__heading">¡Hola Soy Gerardo!</h2>
                        <p className="inicio__texto">
                            Soy un Desarrollador web que busca oportunidades desafiantes que me permitan no solo perfeccionar mis habilidades en el
                            desarrollo front-end y back-end, sino también integrar tecnologías y enfoques para ofrecer soluciones web integrales y
                            eficientes. Mi objetivo es contribuir al éxito de proyectos innovadores, aplicando mi experiencia y dedicación para
                            impulsar la excelencia técnica y la satisfacción del cliente.
                        </p>
                        <a
                            href="https://www.canva.com/design/DAFxkqGLcR4/d2EfgVuH5ZmKiJgnT_rQXg/view?utm_content=DAFxkqGLcR4&utm_campaign=designshare&utm_medium=link&utm_source=editor"
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

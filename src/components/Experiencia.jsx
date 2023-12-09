import bbva from "../assets/BBVA.png";
import petco from "../assets/petco.png";

const Experiencia = () => {
  return (
    <main className="experiencia contenedor">
      <h2 className="experiencia__heading">Experiencia</h2>
      <div className="experiencia__grid ">
        <div className="habilidades">
          <h3>Habilidades</h3>
          <div className="habilidades__grid">
            <div className="habilidad">
              <div className="habilidad__nombre">
                <h4>HTML</h4>
                <span>95%</span>
              </div>
              <div className="habilidad__progreso">
                <div className="progreso-100"></div>
              </div>
            </div>
            <div className="habilidad">
              <div className="habilidad__nombre">
                <h4>CSS</h4>
                <span>90%</span>
              </div>
              <div className="habilidad__progreso">
                <div className="progreso-100"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="empleos">
          <h3>Empresas</h3>
        </div>
      </div>
    </main>
  );
};

export default Experiencia;

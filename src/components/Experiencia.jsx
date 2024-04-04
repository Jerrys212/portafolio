import bbva from "../assets/BBVA.png";
import petco from "../assets/petco.png";
import telo from "../assets/telo.jpg";
import FlipCard from "./FlipCard";

const Experiencia = () => {
    return (
        <main className="experiencia contenedor" id="experiencia">
            <h2 className="experiencia__heading">Experiencia</h2>
            <div className="experiencia__grid">
                <FlipCard empleo={`Transportes Telo`} descripcion={``} imagen={telo} />
                <FlipCard empleo={`Petco`} descripcion={``} imagen={petco} />
                <FlipCard empleo={`BBVA`} descripcion={``} imagen={bbva} />
            </div>
        </main>
    );
};

export default Experiencia;

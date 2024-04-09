import capic from "../assets/logo.png";
import restaurante from "../assets/cafe.jpg";
import barraanejo from "../assets/barra.jpg";
import recetasComida from "../assets/recetasComida.jpg";
import backend from "../assets/iniciom.jpg";
import swagger from "../assets/swagger6360.jpg";
import tesci from "../assets/books-g80e1d0994_1280.jpg";

const diccionario = {
    capic: {
        imagen: capic,
        nombre: "Capic",
    },
    barraanejo: {
        imagen: barraanejo,
        nombre: "Barra Añejo",
    },
    restaurante: {
        imagen: restaurante,
        nombre: "Restaurante",
    },
    recetasComida: {
        imagen: recetasComida,
        nombre: "Recetas Comida",
    },
    tesci: {
        imagen: tesci,
        nombre: "TESCI",
    },
    backend: {
        imagen: backend,
        nombre: "Backend Apps",
    },
    Swagger: {
        imagen: swagger,
        nombre: "Swagger",
    },
};

const Proyecto = ({ proyecto }) => {
    return (
        <div className="proyecto">
            <div className="proyecto__imagen">
                <img src={diccionario[proyecto.nombre]["imagen"]} alt="" />
                <h3 className="proyecto__nombre">{diccionario[proyecto.nombre]["nombre"]}</h3>
            </div>
            <div className="proyecto__contenido">
                <p className="proyecto__texto">{proyecto.descripcion}</p>

                <a href={proyecto.link} target="_blank" className="proyecto__enlace">
                    Ver proyecto
                </a>
                <a href={proyecto.respositorio} target="_blank" className="proyecto__enlace">
                    Ver repositorio
                </a>
            </div>
        </div>
    );
};

export default Proyecto;

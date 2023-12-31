import capic from "../assets/logo.png";
import restaurante from "../assets/cafe.jpg";
import barraanejo from "../assets/barra.jpg";
import recetasComida from "../assets/recetasComida.jpg";
import backend from "../assets/iniciom.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

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
    backend: {
      imagen: backend,
      nombre: "Backend Apps",
    },
  };

  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const { data } = await axios.get(
          "https://apiprd.devdesignhub.com/obtenerProyectos"
        );
        setProyectos(data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProyectos();
  }, []);

  return (
    <>
      <section className="proyectos">
        <div className="contenedor">
          <h2 className="proyectos__heading">Proyectos</h2>
          <div className="proyectos__grid">
            {proyectos?.length > 0 ? (
              proyectos.map((proyecto) => (
                <div className="proyecto">
                  <div className="proyecto__imagen">
                    <img src={diccionario[proyecto.nombre]["imagen"]} alt="" />
                    <h3 className="proyecto__nombre">
                      {diccionario[proyecto.nombre]["nombre"]}
                    </h3>
                  </div>
                  <div class="proyecto__contenido">
                    <p class="proyecto__texto">{proyecto.descripcion}</p>

                    <a
                      href={proyecto.link}
                      target="_blank"
                      class="proyecto__enlace"
                    >
                      Ver proyecto
                    </a>
                    <a
                      href={proyecto.respositorio}
                      target="_blank"
                      class="proyecto__enlace"
                    >
                      Ver repositorio
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyectos;

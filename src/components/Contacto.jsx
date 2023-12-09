import { useState } from "react";
import Alerta from "./Alerta";
import Swal from "sweetalert2";
import axios from "axios";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [respuesta, setRespuesta] = useState({});
  const [alerta, setAlerta] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, email, mensaje].includes("")) {
      setAlerta({ msg: "hay campos vacios", error: true });
      return;
    }

    try {
      const { data } = await axios.post(
        "https://apiprd.devdesignhub.com/guardarInfo",
        { nombre, correo: email, mensaje }
      );

      Swal.fire({
        icon: "success",
        title:
          "Gracias Por Ponerte En Contacto Conmigo, Me Comunicare Contigo Más Tarde",
      });
    } catch (error) {
      console.log(error);
      setRespuesta(error.response);
    }

    setAlerta({});
  };
  const { msg } = alerta;
  return (
    <section className="contacto" id="contacto" name="contacto">
      <div className="contacto__grid contenedor">
        <div className="contacto__texto">
          <h3 className="contacto__heading">Contactame</h3>
          <p className="contacto__parrafo">
            ¿Más información? Déjame tus datos.
          </p>
        </div>
        <div className="fomulario__contenido">
          <form onSubmit={handleSubmit} className="formulario">
            {msg && <Alerta alerta={alerta} />}
            <div className="campo">
              <label className="campo__label" htmlFor="nombre">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                className="campo__input"
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="campo">
              <label className="campo__label" htmlFor="email">
                Correo
              </label>
              <input
                id="email"
                name="email"
                className="campo__input"
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="campo">
              <label htmlFor="texto" className="campo__label">
                Mensaje
              </label>
              <textarea
                name="texto"
                id="texto"
                className="campo__input"
                placeholder="Mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </div>
            <div className="campo">
              <input type="submit" className="campo__btn" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

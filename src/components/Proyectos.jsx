
import { useEffect, useState } from "react";
import axios from "axios";
import Proyecto from "./Proyecto";

const Proyectos = () => {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        const obtenerProyectos = async () => {
            try {
                const { data } = await axios.get("https://apiprd.devdesignhub.com/obtenerProyectos");
                setProyectos(data);
            } catch (error) {
                console.log(error);
            }
        };

        obtenerProyectos();
    }, []);

    return (
        <>
            <section className="proyectos" id="proyectos">
                <div className="contenedor">
                    <h2 className="proyectos__heading">Proyectos</h2>
                    <div className="proyectos__grid">
                        {proyectos?.length > 0 ? proyectos.map((proyecto, i) => <Proyecto proyecto={proyecto} key={i} />) : <></>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Proyectos;

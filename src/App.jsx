import Experiencia from "./components/Experiencia";
import Inicio from "./components/Inicio";
import Header from "./components/Header";
import "./styles/App.css";
import Proyectos from "./components/Proyectos";
import Wave from "./components/Wave";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Inicio />
      <Wave />
      <Experiencia />
      <Proyectos />
      <Wave />
      <Contacto />
      <Footer />
    </>
  );
};

export default App;

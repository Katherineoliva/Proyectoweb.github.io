import '../components/Opciones.css'
import {NavLink} from "react-router-dom"

function Opciones() {
  return (
    <div>
      <header>
        <img alt="Buho" src="src/Img/Logo.png" />
        <h1>Bienvenidos a Instinto Académico de ayuda estudiantil</h1>
      </header>

      <div className="cuadrado">
        <h2>Productos y más...</h2>
        <img alt="Compra1" src="src/Img/Compra 1.png" /><br />
        <NavLink to="/Venta" ><button type="submit">Entrar</button></NavLink>
      </div>

      <div className="cuadrado2">
      <h4>
        En la sesión de Productos y más,
        podrás encontrar distintos materiales,
        libros, etc. Que te pueden servir a lo
        largo de la carrera
      </h4>
      </div>

      <h3>
        En la sesión de Consultas de Tareas,
        podrás consultar y solicitar ayuda
        sobre alguna tarea o tema que no
        hayas comprendido.
      </h3>

      <div className="cuadrado1">
        <h2>Consultas de Tarea</h2>
        <img alt="Lista1" src="src/Img/Lista 1.png" /><br />
        <button type="button">Entrar</button>
      </div>
    </div>
  );
}

export default Opciones;

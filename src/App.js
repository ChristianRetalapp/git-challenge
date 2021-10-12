import logo from "./logo.svg";
import "./App.css";
import { Component1 } from "./Component1";

const handleClick = (e) => {
  console.log(e.target.tagName);
};

function App() {
  return (
    <div className="App">
      <h1>Curso Git</h1>
      <div>
        <form>
          <label>Nombre</label>
          <input type="text" />
          <label>apellido</label>
          <input type="text" />
          <Component1 name={"submit"} />
        </form>
      </div>
    </div>
  );
}

export default App;

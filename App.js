import React, { useState } from "react";

function App() {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  const [contadorId, setContadorId] = useState(0);

  const agregarTarea = (task) => {
    const nuevaTarea = {
      id: contadorId,
      tarea: task,
      status: true,
    };
    setContadorId(contadorId + 1);
    setListaTareas([...listaTareas, nuevaTarea]);
    setTarea("");
  };

  const editarTarea = (id) => {
    const nuevaListaTareas = listaTareas.map((tarea) =>
      tarea.id === id ? { ...tarea, status: !tarea.status } : tarea
    );
    setListaTareas(nuevaListaTareas);
  };

  const eliminarTarea = (id) => {
    const nuevaListaTareas = listaTareas.filter((tarea) => tarea.id !== id);
    setListaTareas(nuevaListaTareas);
  };

  return (
    <div className="container fluid mt-5 d-flex flex-column align-items-center">
      <form
        className="d-flex"
        onSubmit={(evt) => {
          evt.preventDefault();
          agregarTarea(tarea);
        }}
      >
        <input
          required
          className="p-1 me-2"
          placeholder="Pasear al perro"
          value={tarea}
          onChange={(evt) => {
            setTarea(evt.target.value);
          }}
        />
        <button className="btn btn-primary">Agregar</button>
      </form>

      {listaTareas.length > 0 &&
        listaTareas.map(({ tarea, id, status }, index) => (
          <div
            key={index}
            className={
              status
                ? "alert alert-danger mb-2 col-9 d-flex justify-content-around"
                : "alert alert-success mb-2 col-9 d-flex justify-content-around"
            }
          >
            <p>{tarea}</p>
            <div>
              <button
                className="btn btn-warning" onClick={() => editarTarea(id)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger" onClick={() => eliminarTarea(id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;

import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {
  const [error, setError] = useState("");

  const [todo, setTodo] = useState({
    title: "todo #01",
    description: "descripcion #01",
    state: "pendiente",
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Titulo y Descripcion obligatorios",
      });
    }

    addTodo({
      id: Date.now(),
      ...todo,
      state: state === "completado",
    });

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })

    //? VALIDAR LOS DATOS =============
    if (!title.trim() || !description.trim() || !state.trim())
      return setError("Llena todos los campos");

    //? ENVIAR LOS DATOS =============
    console.log(title, description, state);
  };

  const handleChange = (e) => {
    // (e) => setTodo({ ...todo, priority: e.target.checked })

    const { name, type, checked, value } = e.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        // required
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        // required
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        value={description}
        onChange={handleChange}
      ></textarea>
      <input
        type="checkbox"
        name="priority"
        className="form-check-input mb-2"
        id="inputCheck"
        checked={priority}
        onChange={handleChange}
      />
      <label htmlFor="inputCheck">Dar prioridad</label>
      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar Todo
      </button>
      {error !== "" && error}
    </form>
  );
};
export default Formulario;

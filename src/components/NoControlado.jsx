import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')

    //? CAPTURAR LOS DATOS =============
    const data = new FormData(form.current);
    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);

    //? VALIDAR LOS DATOS =============
    if (!title.trim() || !description.trim() || !state.trim())
      return setError("Llena todos los campos");

    //? ENVIAR LOS DATOS =============
    console.log(title, description, state);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        // required
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        defaultValue="Todo #01"
      />
      <textarea
        // required
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        defaultValue="Description #01"
      ></textarea>
      <select
        className="form-select mb-2"
        name="state"
        defaultValue="completado"
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {error !== "" && error}
    </form>
  );
};
export default NoControlado;

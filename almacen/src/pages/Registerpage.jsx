import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Registerpage() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const { sigup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-white p-8 rounded-md shadow-md max-w-md mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-4">Registrarse</h1>
      <form 
        onSubmit={handleSubmit(async (values) => {
          sigup(values);
        })}
        className="space-y-4"
      >
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Nombre de usuario"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
        />
        {errors.username && <p className="error">Este campo es requerido</p>}
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Correo electrónico"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
        />
        {errors.email && <p className="error">Este campo es requerido</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
        />
        {errors.password && <p className="error">Este campo es requerido</p>}
        <input
          type="number"
          {...register("phone", { required: true })}
          placeholder="Número de teléfono"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
        />
        {errors.phone && <p className="error">Este campo es requerido</p>}
        <input
          type="text"
          {...register("firstName", { required: true })}
          placeholder="Nombre"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
        />
        {errors.firstName && <p className="error">Este campo es requerido</p>}
        <input
          type="text"
          {...register("lastName", { required: true })}
          placeholder="Apellido"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
        />
        {errors.lastName && <p className="error">Este campo es requerido</p>}
        <input
          type="text"
          {...register("gender", { required: true })}
          placeholder="Género"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
        />
        {errors.gender && <p className="error">Este campo es requerido</p>}
        <input
          type="text"
          {...register("fechaNacimiento", { required: true })}
          placeholder="Fecha de nacimiento"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
        />
        {errors.fechaNacimiento && <p className="error">Este campo es requerido</p>}
        <input
          type="number"
          {...register("edad", { required: true })}
          placeholder="Edad"
          className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
        />
        {errors.edad && <p className="error">Este campo es requerido</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
        >
          Registrarse
        </button>
      </form>
      <Link
        to="/"
        className="block mt-4 text-blue-500 hover:underline"
      >
        Inicio
      </Link>
    </div>
  );
}

export default Registerpage;

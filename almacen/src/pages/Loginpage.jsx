import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

function Loginpage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Iniciar sesión</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Nombre de usuario"
            className="w-full px-4 py-2 border rounded mb-4"
          />
          {errors.username && <p className="text-red-500 text-xs mb-4">Este campo es requerido</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Contraseña"
            className="w-full px-4 py-2 border rounded mb-4"
          />
          {errors.password && <p className="text-red-500 text-xs mb-4">Este campo es requerido</p>}
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full transition duration-300 hover:bg-blue-600">Iniciar sesión</button>
        </form>
        <Link to="/" className="block text-center mt-4 text-blue-500 hover:underline">Inicio</Link>
      </div>
    </div>
  );
}

export default Loginpage;

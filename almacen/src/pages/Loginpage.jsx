import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

function Loginpage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin } = useAuth();
    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <div className="bg-white p-8 rounded-md shadow-md max-w-md mx-auto mt-16">
            <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
            <form onSubmit={onSubmit} className="space-y-4">
                <input
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="Nombre de usuario"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                {errors.username && <p className="text-red-500">Este campo es requerido</p>}
                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Contraseña"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                {errors.password && <p className="text-red-500">Este campo es requerido</p>}
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600">Iniciar sesión</button>
            </form>
            <Link to="/" className="block mt-4 text-blue-500 hover:underline">Inicio</Link>
        </div>
    );
}

export default Loginpage;

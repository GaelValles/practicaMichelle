import { useForm } from 'react-hook-form';
import { regisprov } from '/api/Auth';
import { Link } from "react-router-dom";

function Insertdealer() {
    const { register, handleSubmit } = useForm();
    
    return (
        <div className="bg-white p-8 rounded-md shadow-md max-w-md mx-auto mt-16">
            <h1 className="text-2xl font-bold mb-4">Registrar proveedor</h1>
            <form 
                onSubmit={handleSubmit(async (values) => {
                    console.log(values);
                    const res=await regisprov(values);
                    console.log(res);
                })}
                className="space-y-4"
            >
                <input 
                    type="text"
                    {...register("idDealer", { required: true })}
                    placeholder="Código del proveedor"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input 
                    type="text"
                    {...register("nombre", { required: true })}
                    placeholder="Nombre del proveedor"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input 
                    type="text"
                    {...register("apellido", { required: true })}
                    placeholder="Apellido del proveedor"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input 
                    type="number"
                    {...register("telefono", { required: true })}
                    placeholder="Teléfono del proveedor"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input 
                    type="text"
                    {...register("empresa", { required: true })}
                    placeholder="Empresa del proveedor"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input 
                    type="text"
                    {...register("correo", { required: true })}
                    placeholder="Correo electrónico del proveedor"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input 
                    type="text"
                    {...register("fechaCreacion", { required: true })}
                    placeholder="Fecha de creación del proveedor"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input 
                    type="text"
                    {...register("estatus", { required: true })}
                    placeholder="Estatus del proveedor"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <button 
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
                >
                    Registrar proveedor
                </button>
            </form>
            <Link 
                to="/" 
                className="block mt-4 text-blue-500 hover:underline"
            >
                Regresar
            </Link>
        </div>
    );
}

export default Insertdealer;

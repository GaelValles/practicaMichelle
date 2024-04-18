import { useForm } from 'react-hook-form';
import { regisproduc } from '/api/Auth';
import { Link } from "react-router-dom";

function Insertproduct() {
    const { register, handleSubmit } = useForm();
    
    return (
        <div className="bg-white p-8 rounded-md shadow-md max-w-md mx-auto mt-16">
            <h1 className="text-2xl font-bold mb-4">Registrar producto</h1>
            <form 
                onSubmit={handleSubmit(async (values) => {
                    console.log(values);
                    const res = await regisproduc(values);
                    console.log(res);
                })}
                className="space-y-4"
            >
                <input
                    type="number"
                    {...register("codigo", { required: true })}
                    placeholder="Código del producto"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input
                    type="text"
                    {...register("nombre", { required: true })}
                    placeholder="Nombre del producto"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input
                    type="text"
                    {...register("descripcion", { required: true })}
                    placeholder="Descripción del producto"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input 
                    type="text"
                    {...register("fechaCreacion", { required: true })}
                    placeholder="Fecha de creación"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input
                    type="text"
                    {...register("estatus", { required: true })}
                    placeholder="Estatus del producto"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                />
                <input
                    type="text"
                    {...register("proveedor", { required: true })}
                    placeholder="Proveedor del producto"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
                /> 
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
                >
                    Registrar producto
                </button>
            </form>
            <Link to="/" className="block mt-4 text-blue-500 hover:underline">Regresar</Link>
        </div>
    );
}

export default Insertproduct;

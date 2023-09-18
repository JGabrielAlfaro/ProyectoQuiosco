import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco";
import { formatearDinero } from "@/helpers";
const Producto = ({producto}) => {
    const {nombre,precio,imagen} = producto;
    const {handleChangeModal,handleSetProducto} = useQuiosco()
    // console.log(nombre,precio,imagen)
  return (
    <div className="border p-3">
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`Imagen del platillo ${imagen}`}
            width={400}
            height={500}
            style={{ width: 'auto', height: 'auto' }}
        />
        <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
        </div>
        <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
            onClick={()=>{
                handleChangeModal()
                handleSetProducto(producto)
            }}
        >
            Agregar
        </button>
    </div>
  )
}

export default Producto

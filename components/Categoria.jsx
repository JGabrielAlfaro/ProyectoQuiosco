import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

const Categoria = ({categoria}) => {
    const {nombre, icono,id} = categoria;
    const {categoriaActual,handleClickCategoria} = useQuiosco()

  return (
    <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : '' } flex items-center gap-2 w-full border p-5 hover:bg-amber-400`}>
       <Image
        height={0}
        width={0}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen Icono"
        className="mr-5"
        style={{ width: 70, height: 70 }}
       />
       <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={()=>handleClickCategoria(id)}
       >
        {nombre}

       </button>
    </div>
  )
}

export default Categoria

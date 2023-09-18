import { useState,useEffect,createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

  const router = useRouter();

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
    
  };

  const refrescar = () => {
    router.push("/");
  }

  useEffect(() => {
    obtenerCategorias();
    refrescar()
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[1]); // Se define la categoria por default.
  }, [categorias]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
    router.push("/");
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  //sacamos categoriaID,imagen de producto.
  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((p) => p.id === producto.id)) {
      const pedidoActualizado = pedido.map((item) =>
        item.id === producto.id ? producto : item
      );
      setPedido(pedidoActualizado);
      toast.success("Guardado correctamente.");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al pedido.");
    }

    setModal(false);
  };

  const handleEditarCantidades = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id);

    setProducto(productoActualizar[0]);
    setModal(!modal);
  };
  const handleEliminarProducto = (id) => {
    const pedidoActulizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActulizado);
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
        handleEditarCantidades,
        handleEliminarProducto,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export {QuioscoProvider}
export default QuioscoContext;

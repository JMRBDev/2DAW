<?php
include_once "Controlador.php";

class HomeControlador extends Controlador
{
    
    public function ejecuta(){
        //Creamos un Objeto de Categoria
        include "./Modelo/BaseCategoria.php";
        include "./Modelo/BaseProducto.php";
        $base = new BaseCategoria();
        $baseProducto = new BaseProducto();        

        $acccion = $this->getAccion();

        $_SESSION['test_accion'] = $acccion;

        switch ( $acccion) {
            case 'crearcat':  //Se muestra un Formulario vacio

                include "./Vista/FormularioVista.php";
                require_once('./Modelo/Entidades/Categoria.php');
                $categoria = new Categoria();
                $formulario_vista = new FormularioVista($categoria);
                echo $formulario_vista->muestraHTML();

                break;

            case 'modificarcat':  //Se muestra un Formulario con los datos a modificar
                //Obtenemos ID
                $id = $_GET['id'];
                $categoria = $base->obtenerId($id);
                
                # Descomentar para pruebas #
                //$_SESSION['test_categoria'] =  $categoria;
                include "./Vista/FormularioVista.php";
                $formulario_vista = new FormularioVista($categoria);
                echo $formulario_vista->muestraHTML();

                break;
            case 'borrarcat': // Se borra el elemento de categoría
                require_once( "./Vista/MensajeVista.php");


                $id  = $_GET['id'];
                $base->borrar($id) ;


                $mensaje_vista = new MensajeVista("Se ha borrado la categoría con ID: ".$id);
                echo $mensaje_vista->muestraHTML();

                break;
            
            case  'modificar_categoria':
                require_once('./Modelo/Entidades/Categoria.php');
                require_once( "./Vista/MensajeVista.php");

                $id  = $_POST['id'];
                $nombre = $_POST['nombre'];
                $descripcion = $_POST['descripcion'];

               
                $categoria = new Categoria();
                $categoria->setId($id);
                $categoria->setNombre($nombre);
                $categoria->setDescripcion($descripcion);
               
                $base->modifica($categoria) ;

              
                $mensaje_vista = new MensajeVista("Se ha modificado la categoría con ID: ".$id);
                echo $mensaje_vista->muestraHTML();

            break;

            case 'nueva_categoria':

                require_once( "./Vista/MensajeVista.php");
                require_once('./Modelo/Entidades/Categoria.php');

                $nombre = $_POST['nombre'];
                $descripcion = $_POST['descripcion'];


                $categoria = new Categoria();

                $categoria->setNombre($nombre);
                $categoria->setDescripcion($descripcion);
               
                $base->nuevo($categoria) ;

                
                $mensaje_vista = new MensajeVista("Se ha creado la categoria: ".$nombre. "-".$descripcion);
                echo $mensaje_vista->muestraHTML();
            break;

            case 'crearprod':  //Se muestra un Formulario vacio

                include "./Vista/FormularioProductoVista.php";
                require_once('./Modelo/Entidades/Producto.php');
                $producto = new Producto();
                $formulario_vista = new FormularioProductoVista($producto);
                echo $formulario_vista->muestraHTML();

                break;

                
                case 'modificarprod':  //Se muestra un Formulario con los datos a modificar
                    //Obtenemos ID
                    $id = $_GET['id'];
                    $producto = $baseProducto->obtenerId($id);
                    
                    # Descomentar para pruebas #
                    //$_SESSION['test_categoria'] =  $categoria;
                    include "./Vista/FormularioVista.php";
                    $formulario_vista = new FormularioVista($producto);
                    echo $formulario_vista->muestraHTML();

                break;
                
            case 'modificar_producto':
                require_once('./Modelo/Entidades/Producto.php');
                require_once( "./Vista/MensajeVista.php");
                
                $id  = $_POST['id'];
                $nombre = $_POST['nombre'];
                $descripcion = $_POST['descripcion'];
                $peso = $_POST['peso'];
                $stock = $_POST['stock'];

                
                $producto = new Producto();
                $producto->setId($id);
                $producto->setNombre($nombre);
                $producto->setDescripcion($descripcion);
                $producto->setPeso($peso);
                $producto->setStock($stock);
                
                $baseProducto->modifica($producto);
                
                
                $mensaje_vista = new MensajeVista("Se ha modificado el producto con ID: ".$id);
                echo $mensaje_vista->muestraHTML();
                
                break;

            case 'borrarprod': // Se borra el elemento de categoría
                require_once( "./Vista/MensajeVista.php");


                $id  = $_GET['id'];
                $baseProducto->borrar($id) ;


                $mensaje_vista = new MensajeVista("Se ha borrado el producto con ID: ".$id);
                echo $mensaje_vista->muestraHTML();

                break;

            case 'nueva_categoria':

                require_once( "./Vista/MensajeVista.php");
                require_once('./Modelo/Entidades/Producto.php');

                $nombre = $_POST['nombre'];
                $descripcion = $_POST['descripcion'];
                $peso = $_POST['peso'];
                $stock = $_POST['stock'];


                $producto = new Producto();

                $producto->setNombre($nombre);
                $producto->setDescripcion($descripcion);
                $peso->setPeso($peso);
                $stock->setStock($stock);
                
                $baseProducto->nuevo($producto);

                
                $mensaje_vista = new MensajeVista("Se ha creado el producto: ".$nombre. "-".$descripcion);
                echo $mensaje_vista->muestraHTML();
                break;

            case 'verprod':
                include "./Vista/ProductosVista.php";
            
                $productos = $baseProducto->obtenerTodos();
            
                $productos_vista = new ProductosVista($productos);
                echo $productos_vista->muestraHTML();
                break;
                
            default:
            include "./Vista/HomeVista.php";
            
            $categorias = $base->obtenerTodos();
            
                $home_vista = new HomeVista($categorias);
                echo $home_vista->muestraHTML();
            }
            
       
 
        }
}

?>
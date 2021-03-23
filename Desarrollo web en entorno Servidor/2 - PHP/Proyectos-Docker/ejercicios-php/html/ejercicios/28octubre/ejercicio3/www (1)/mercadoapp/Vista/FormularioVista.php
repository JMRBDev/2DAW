<?php
class FormularioVista extends Vista{



    public function muestraHTML(){
        $this->ret .= "<!doctype html>";
        $this->ret .= "<html lang='en'>";
        $this->ret .= "<head>";
        $this->ret .= "<meta charset='utf-8'>";
        $this->ret .= "<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>";
        $this->ret .= "<meta name='description' content=''>";
        $this->ret .= "<meta name='author' content='Mark Otto, Jacob Thornton, and Bootstrap contributors'>";
        $this->ret .= "<meta name='generator' content='Jekyll v4.1.1'>";
        $this->ret .= "<title>Fixed top navbar example · Bootstrap</title>";

        $this->ret .= "<link rel='canonical' href='https://getbootstrap.com/docs/4.5/examples/navbar-fixed/'>";

        $this->ret .= "<!-- Bootstrap core CSS -->";
        $this->ret .= "<link href='https://getbootstrap.com/docs/4.5/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2' crossorigin='anonymous'>";

        $this->ret .= "<!-- Favicons -->";
        $this->ret .= "<link rel='apple-touch-icon' href='/docs/4.5/assets/img/favicons/apple-touch-icon.png' sizes='180x180'>";
        $this->ret .= "<link rel='icon' href='https://getbootstrap.com/docs/4.5/assets/img/favicons/favicon-32x32.png' sizes='32x32' type='image/png'>";
        $this->ret .= "<link rel='icon' href='https://getbootstrap.com/docs/4.5/assets/img/favicons/favicon-16x16.png' sizes='16x16' type='image/png'>";
        $this->ret .= "<link rel='manifest' href='https://getbootstrap.com/docs/4.5/assets/img/favicons/manifest.json'>";
        $this->ret .= "<link rel='mask-icon' href='https://getbootstrap.com/docs/4.5/assets/img/favicons/safari-pinned-tab.svg' color='#563d7c'>";
        $this->ret .= "<link rel='icon' href='https://getbootstrap.com/docs/4.5/assets/img/favicons/favicon.ico'>";
        $this->ret .= "<meta name='msapplication-config' content='/docs/4.5/assets/img/favicons/browserconfig.xml'>";
        $this->ret .= "<meta name='theme-color' content='#563d7c'>";


        $this->ret .= "<style>";
        $this->ret .= ".bd-placeholder-img {";
            $this->ret .= "font-size: 1.125rem;";
            $this->ret .= "text-anchor: middle;";
            $this->ret .= "-webkit-user-select: none;";
            $this->ret .= "-moz-user-select: none;";
            $this->ret .= "-ms-user-select: none;";
            $this->ret .= "user-select: none;";
            $this->ret .= "}";

            $this->ret .= "@media (min-width: 768px) {";
                $this->ret .= ".bd-placeholder-img-lg {";
                    $this->ret .= "font-size: 3.5rem;";
                    $this->ret .= " }";
                    $this->ret .= "}";
                    $this->ret .= "</style>";
                    $this->ret .= "<!-- Custom styles for this template -->";
                    $this->ret .= "<link href='navbar-top-fixed.css' rel='stylesheet'>";
                    $this->ret .= "</head>";
                    $this->ret .= "<body>";
                    $this->ret .= "<nav class='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>";
                    $this->ret .= " <a class='navbar-brand' href='#'>Hola ". $_SESSION['usuario'] ."</a>";
                    $this->ret .= "  <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>";
                    $this->ret .= " <span class='navbar-toggler-icon'></span>";
                    $this->ret .= "  </button>";
                    $this->ret .= "<div class='collapse navbar-collapse' id='navbarCollapse'>";
                    $this->ret .= " <ul class='navbar-nav mr-auto'>";
                    $this->ret .= " <li class='nav-item active'>";
   /**
                        * Realizamos acción Ver Categoria, method=GET
                        // action=vercat
                        */
                        $this->ret .= "  <a class='nav-link' href='?action=vercat'>Categorias <span class='sr-only'>(current)</span></a>";
                    $this->ret .= "   </li>";
                    /**
                        * Realizamos acción Ver Producto, method=GET
                        // action=verprod
                        */
                        $this->ret .= "<a class='nav-link' href='?action=verprod'>Productos <span class='sr-only'>(current)</span></a>";
                        $this->ret .= " </li>";
                    $this->ret .= "  <li class='nav-item'>";
                    $this->ret .= "   <li class='nav-item'>";
                    $this->ret .= "<a class='nav-link disabled' href='?action=link' tabindex='-1' aria-disabled='true'>Disabled</a>";
                    $this->ret .= "</li>";
                    $this->ret .= " </ul>";
                    $this->ret .="<a href='Vista/Logout.php' class='btn btn-info'>Logout</a>";
                    $this->ret .= "</div>";
                    $this->ret .= "</nav>";

    $this->ret .= "<main role='main' class='container'>";
    $this->ret .= "  <div class='jumbotron'>";
    /**
     * ##############################
     * #    INICIO FORMULARIO       #
     * ##############################
     */
    $accion_post ="nueva_categoria";
    $descripcion ="";
    $nombre = "";
    $id ="";
    $modelo = $this->getModelo();
    if(!empty($modelo->getId())){
        //$this->ret .= "<h1>OBJETO CON DATOS</h1>";
        $descripcion = $modelo->getDescripcion();
        $nombre = $modelo->getNombre();
        $id = $modelo->getId();
        $accion_post ="modificar_categoria";
    }
    $this->ret .= "<form method=post>";
    $this->ret .= "<input type='hidden' name='action' value='$accion_post'>";
    $this->ret .= "<input type='hidden' name='id' value='$id'>";
    $this->ret .= " <div class='form-group row'>";
    $this->ret .= "<label for='nombre' class='col-sm-2 col-form-label'>Nombre</label>";
    $this->ret .= "<div class='col-sm-10'>";
    $this->ret .= "<input type='nombre' class='form-control' id='nombre' placeholder='Nombre' name='nombre' value='$nombre'>";
    $this->ret .= "</div>";
    $this->ret .= "</div>";
    $this->ret .= "<div class='form-group row'>";
    $this->ret .= "<label for='descripcion' class='col-sm-2 col-form-label'>Descripción</label>";
    $this->ret .= "<div class='col-sm-10'>";
    $this->ret .= "<input type='descripcion' class='form-control' id='descripcion' placeholder='Descripción' name='descripcion' value='$descripcion'>";
    $this->ret .= "</div>";
    $this->ret .= "</div>";
    $this->ret .= "<button type='submit' class='btn btn-primary'>Guardar</button>";
    $this->ret .= "</form>";
    /**
     * ##############################
     * #    FIN FORMULARIO          #
     * ##############################
     */
    $this->ret .= " </div>";
    $this->ret .= "</main>";
    $this->ret .= "<script src='https://code.jquery.com/jquery-3.5.1.slim.min.js' integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj' crossorigin='anonymous'></script>";
    $this->ret .= " <script>window.jQuery || document.write('<script src='/docs/4.5/assets/js/vendor/jquery.slim.min.js'><\/script>')</script><script src='/docs/4.5/dist/js/bootstrap.bundle.min.js' integrity='sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx' crossorigin='anonymous'></script></body>";
    $this->ret .= "</html>";
  
    return $this->ret;
    }


}
?>
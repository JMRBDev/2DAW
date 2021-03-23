function muestraSugerencia(str) {
    if (str.length == 0) {
        document.getElementById("txtSugerencia").innerHTML = "";
        return;
    }else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtSugerencia").innerHTML = this.responseText;
            }
        }
        xmlhttp.open("GET", "http://localhost/ejerajax/Ciudades/getSugerencia.php?param=" + str, true);
        xmlhttp.send();
    }
}
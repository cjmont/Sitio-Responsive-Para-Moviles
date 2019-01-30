var i = -1;
var contCurso = -1;
var selected = [];


function cargarCurso(variable){
    localStorage.setItem("curso", variable);
    //console.log(localStorage.getItem("curso"));
}


window.onload = function() {
    //cargarCurso(1);
    //cargarNoticia(1);
};

fetch('http://cec.espol.edu.ec/api/prospecto/lista_prospecto?tipo=Programa')
        .then((arregloProspectos) => {
            return arregloProspectos.json();
        } ).then((arregloProspectos) => {
            console.log(arregloProspectos);

            arregloProspectos.prospectos.forEach(function(objeto) {
            i++;

                     //console.log("En programa" + objeto.tipo);

                    $("#todosProgramas").append('<div class="col-sm-6 col-md-4"><div class="course margin_top wow fadeIn" data-wow-delay="400ms"><div class="image bottom25"><img id="imagenPrograma'+i+'" src="" alt="Course" class="border_radius"></div><h3 class="bottom10" id="nombrePrograma'+i+'"><a href="course_detail.html"></a></h3><p class="bottom20" id="descripcionPrograma'+i+'"></p><a onclick="cargarCurso('+objeto.id+')" id="botonPrograma'+i+'" style="margin-left:120px" class="btn_common yellow border_radius" href="course_detail.html">Ver más</a></div></div>');
                    
                    try {

                        document.getElementById('imagenPrograma' + i).src = "http://www.ec.espol.edu.ec" + objeto.imagen;
                        //document.getElementById('nombrePrograma' + i).innerHTML = objeto.nombre.slice(0,30);
                        document.getElementById('descripcionPrograma' + i).innerHTML = objeto.contenido.descripcion.slice(0,125) + "...";
                    }
                    catch(err) {
                        //console.log(err.message);
                    }
            });

        })
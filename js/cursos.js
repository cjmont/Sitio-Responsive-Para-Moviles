var i = -1;
var contCurso = -1;
var selected = [];
var cursoEsc = 0;
var pags;
var arrayPros = []

function cargarCurso(variable){
    localStorage.setItem("curso", variable);
    //alert(localStorage.setItem("curso", variable))
    //console.log(localStorage.getItem("curso"));
}


window.onload = function() {
    //cargarCurso(1);
    //cargarNoticia(1);
};

fetch('http://cec.espol.edu.ec/api/prospecto/lista_prospecto?tipo=Curso')
        .then((arregloProspectos) => {
            return arregloProspectos.json();
        } ).then((arregloProspectos) => {
            console.log(arregloProspectos.prospectos.length);

            pags = Math.trunc((arregloProspectos.prospectos.length / 15)+0.99)+1;

            for (var j=1; j<pags; j++){
                $("#paginas").append('<a id="pag'+j+'" href="#" onclick="cargarPagina('+j+')">'+j+'</a>')
                $("#paginas2").append('<a id="pag2'+j+'" href="#" onclick="cargarPagina('+j+')">'+j+'</a>')
                
                $("#pag1").addClass("active");
                $("#pag21").addClass("active");
            }


            arregloProspectos.prospectos.forEach(function(objeto) {
                arrayPros.push(objeto);
            });

                for (var i=0;i<15;i++){
                $("#todosCursos").append('<div class="col-sm-6 col-md-4"><div class="course margin_top wow fadeIn" data-wow-delay="400ms"><div class="image bottom25"><img id="imagenCurso'+i+'" src="" alt="Course" class="border_radius"></div><h3 class="bottom10" id="nombreCurso'+i+'"><a href="course_detail.html"></a></h3><p class="bottom20" id="descripcionCurso'+i+'"></p><a onclick="cargarCurso('+arregloProspectos.prospectos[i].id+')" id="botonCurso'+i+'" style="margin-left:120px;" class="btn_common yellow border_radius" href="course_detail.html">Ver más</a></div></div>');

                    try {
                        document.getElementById('imagenCurso' + i).src = "http://www.ec.espol.edu.ec" + arregloProspectos.prospectos[i].imagen;
                        /*document.getElementById('nombreCurso' + i).innerHTML = objeto.nombre.slice(0,100);*/
                        document.getElementById('descripcionCurso' + i).innerHTML = arregloProspectos.prospectos[i].contenido.descripcion.slice(0,100) + "...";
                    }
                    catch(err) {
                        //console.log(err.message);
                    }
                }

            console.log(arrayPros);
            console.log(pags);

            
            


//            arregloProspectos.prospectos.forEach(function(objeto) {
//            i++;

//                    $("#todosCursos").append('<div class="col-sm-6 col-md-4"><div class="course margin_top wow fadeIn" data-wow-delay="400ms"><div class="image bottom25"><img id="imagenCurso'+i+'" src="" alt="Course" class="border_radius"></div><h3 class="bottom10" id="nombreCurso'+i+'"><a href="course_detail.html"></a></h3><p class="bottom20" id="descripcionCurso'+i+'"></p><a onclick="cargarCurso('+objeto.id+')" id="botonCurso'+i+'" style="margin-left:120px;" class="btn_common yellow border_radius" href="course_detail.html">Ver más</a></div></div>');

//                    try {
//                        document.getElementById('imagenCurso' + i).src = "http://www.ec.espol.edu.ec" + objeto.imagen;
                        /*document.getElementById('nombreCurso' + i).innerHTML = objeto.nombre.slice(0,100);*/
//                        document.getElementById('descripcionCurso' + i).innerHTML = objeto.contenido.descripcion.slice(0,100) + "...";
//                    }
//                    catch(err) {
                        //console.log(err.message);
//                    }

//            });

        })

function cargarPagina(val){
                for (var l=1; l<pags; l++){
                    $("#pag"+l).removeClass("active");
                    $("#pag2"+l).removeClass("active")
                }
                $("#pag"+val).addClass("active");
                $("#pag2"+val).addClass("active");
                $("#todosCursos").empty();
                var inicio = (val-1) * 15
                console.log(inicio);
                var final = inicio + 15;
                console.log(final);

                for (var i=inicio;i<final;i++){
                $("#todosCursos").append('<div class="col-sm-6 col-md-4"><div class="course margin_top wow fadeIn" data-wow-delay="400ms"><div class="image bottom25"><img id="imagenCurso'+i+'" src="" alt="Course" class="border_radius"></div><h3 class="bottom10" id="nombreCurso'+i+'"><a href="course_detail.html"></a></h3><p class="bottom20" id="descripcionCurso'+i+'"></p><a onclick="cargarCurso('+arrayPros[i].id+')" id="botonCurso'+i+'" style="margin-left:120px;" class="btn_common yellow border_radius" href="course_detail.html">Ver más</a></div></div>');

                    try {
                        document.getElementById('imagenCurso' + i).src = "http://www.ec.espol.edu.ec" + arrayPros[i].imagen;
                        /*document.getElementById('nombreCurso' + i).innerHTML = objeto.nombre.slice(0,100);*/
                        document.getElementById('descripcionCurso' + i).innerHTML = arrayPros[i].contenido.descripcion.slice(0,100) + "...";
                    }
                    catch(err) {
                        //console.log(err.message);
                    }
                }
            }
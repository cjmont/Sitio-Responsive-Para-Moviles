//console.log("Entramos a cursos");

var cursoSeleccionado = localStorage.getItem("curso");
var listadoEventos = JSON.parse(localStorage.getItem("events"));
var listadoIds = JSON.parse(localStorage.getItem("eve"));

var cont = -1;
//alert(cursoSeleccionado);

function boolBr (){
    localStorage.setItem("boolBr", true);
    console.log( localStorage.getItem("boolBr"))
}
function boolRe (){
    localStorage.setItem("boolBr", false);
    console.log( localStorage.getItem("boolBr"))
}

//console.log("Este importa" + cursoSeleccionado);


//nombres, apellidos, tipo id, identificacion, email, telefono

fetch('http://ec.espol.edu.ec/api/prospecto/'+cursoSeleccionado)
        .then((arregloProspectos) => {
            return arregloProspectos.json();
        } ).then((arregloProspectos) => {

            console.log(arregloProspectos)

             arregloProspectos.prospectos.forEach(function(objeto) {


            document.getElementById('categoriaCurso').innerHTML = objeto.area.nombre;
            document.getElementById('imagenCursoEspecifico').src = "http://www.ec.espol.edu.ec" + objeto.imagen;
            document.getElementById('nombreCursoEspecifico').innerHTML = objeto.nombre;
            document.getElementById('descripcionCursoEspecifico').innerHTML = objeto.contenido.descripcion;
            
/*
            str = objeto.contenido.metodologia;
            console.log(str);
            var regex = new RegExp("\r\n\r\n", "g");
            var res = str.replace(regex, '<br>');
            console.log(res);
            document.getElementById('metodologiaCursoEspecifico').innerHTML = res;
*/
            str = objeto.contenido.metodologia;
            subcadena = str.split('•');
            
            //primera fila de metodologia
            var parrafo = document.createElement("p");
            var dirigido2 = document.createTextNode(subcadena[0]);
            parrafo.appendChild(dirigido2);
            document.getElementById('metodologiaCursoEspecifico').appendChild(parrafo);

            //segunda en adelante
            for (var i = 1; i < subcadena.length; i++) {
                var parrafo = document.createElement("p");
                cont= "•"+subcadena[i];
                var dirigido2 = document.createTextNode(cont);
                parrafo.appendChild(dirigido2);
                document.getElementById('metodologiaCursoEspecifico').appendChild(parrafo);
            }



            document.getElementById('sectorCurso').innerHTML = objeto.area.sector;
            //document.getElementById('dirigido').innerHTML = objeto.contenido.dirigido[0].texto;
            var horas = (parseInt(objeto.contenido.horas_presenciales)|| 0) + (parseInt(objeto.contenido.horas_virtuales)|| 0) + (parseInt(objeto.contenido.horas_autonomas)|| 0)
            document.getElementById('horasTotales').innerHTML = horas + " Horas";

            for (var i = 0; i <= objeto.contenido.dirigido.length; i++) {
                var parrafo = document.createElement("p");
                parrafo.setAttribute("id", "p"+String(i));
                //cont= "• "+objeto.contenido.dirigido[i].texto;
                var dirigido2 = document.createTextNode(cont);
                parrafo.appendChild(dirigido2);
                document.getElementById('dirigido').appendChild(parrafo);
            }
            
            
            //console.log(parseInt(objeto.contenido.horas_presenciales));
            //console.log(parseInt(objeto.contenido.horas_virtuales) || 0);
            //console.log(parseInt(objeto.contenido.horas_autonomas) || 0);
            

                if (objeto.id == cursoSeleccionado){
                //console.log(listadoEventos);
                    listadoEventos.forEach(function(even){
                        cont++;
                        //console.log(cont)
                        if (objeto.id == even){
                            var btnRegistrar = document.getElementById("registrarCurso");
                            btnRegistrar.style.display = "block" ;
                            localStorage.setItem("evento", listadoIds[cont]);
                            btnRegistrar.addEventListener("click", boolRe);
                            if (objeto.tipo == "Webinario" || objeto.tipo == "Charla"){
                                btnRegistrar.style.display = "none";
                                document.getElementById('registrarcharla').style.display = "block"
                                document.getElementById('verCharla').style.display = "block"
                            }

                        }

                        if (objeto.tipo != "Webinario" && objeto.tipo != "Charla"){
                            document.getElementById('titleMeto').style.display = "block"
                            var btnDescargar = document.getElementById("descargarBr");
                            btnDescargar.style.display = "block" ;
                            var btnPolitica = document.getElementById("verPolitica");
                            btnPolitica.style.display = "block" ;
                            localStorage.setItem("brochure", objeto.nombre);
                            btnDescargar.addEventListener("click", boolBr);

                        } else {
                            document.getElementById('titleMeto').style.display = "none"
                        }
                    });

            document.getElementById('categoriaCurso').innerHTML = objeto.area.nombre;
            document.getElementById('imagenCursoEspecifico').src = "http://www.ec.espol.edu.ec" + objeto.imagen;
            document.getElementById('nombreCursoEspecifico').innerHTML = objeto.nombre;
            document.getElementById('descripcionCursoEspecifico').innerHTML = objeto.contenido.descripcion;
            

            str = objeto.contenido.metodologia;
            console.log(str);
            var regex = new RegExp("\r\n\r\n", "g");
            var res = str.replace(regex, '<br>');
            console.log(res);
            document.getElementById('metodologiaCursoEspecifico').innerHTML = res;


            document.getElementById('sectorCurso').innerHTML = objeto.area.sector;
            document.getElementById('dirigido').innerHTML = objeto.contenido.dirigido[0].texto;
            //console.log(parseInt(objeto.contenido.horas_presenciales));
            //console.log(parseInt(objeto.contenido.horas_virtuales) || 0);
            //console.log(parseInt(objeto.contenido.horas_autonomas) || 0);
            var horas = (parseInt(objeto.contenido.horas_presenciales)|| 0) + (parseInt(objeto.contenido.horas_virtuales)|| 0) + (parseInt(objeto.contenido.horas_autonomas)|| 0)
            document.getElementById('horasTotales').innerHTML = horas + " Horas";



                }

             });
            //console.log(arregloProspectos.prospectos[cursoSeleccionado])
            

        })


        var btnSesion = document.getElementById("sesion");

        if (btnSesion){
        btnSesion.addEventListener("click", iniciarSesion);
                    }
class Sesion {
    constructor(nombres, apellidos, tipo_id, identificacion, fecha_nac, ciudad, sexo, domicilio, nivel_academico, titulo, institucion_proce, profesion, empresa, movil, telefono, telefono_emp, email, nivel_ingreso, password, cargo, prospecto_id){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.tipo_id = tipo_id;
        this.identificacion = identificacion;
        this.fecha_nac = fecha_nac;
        this.ciudad = ciudad;
        this.sexo = sexo;
        this.domicilio = domicilio;
        this.nivel_academico = nivel_academico;
        this.titulo = titulo;
        this.institucion_proce = institucion_proce;
        this.profesion = profesion;
        this.empresa = empresa;
        this.movil = movil;
        this.telefono = telefono;
        this.telefono_emp = telefono_emp;
        this.email = email;
        this.nivel_ingreso = nivel_ingreso;
        this.password = password;
        this.cargo = cargo;
        this.prospecto_id = prospecto_id;
    }
}

function iniciarSesion () {
    var nombres = null;
    var apellidos = null;
    var tipo_id = null;
    var identificacion = document.getElementById('cedulaSesion').value;
    var fecha_nac = null;
    var ciudad = null;
    var sexo = null;
    var domicilio = null;
    var nivel_academico = null;
    var titulo = null;
    var institucion_proce = null;
    var profesion = null;
    var empresa = null;
    var movil = null;
    var telefono = null;
    var telefono_emp = null;
    var email = document.getElementById('correoSesion').value;
    var nivel_ingreso = null;    
    var password = null;
    var cargo = null;
    var prospecto_id = localStorage.getItem("brochure");




    var sesion_tmp = new Sesion(nombres, apellidos, tipo_id, identificacion, fecha_nac, ciudad, sexo, domicilio, nivel_academico, titulo, institucion_proce, profesion, empresa, movil, telefono, telefono_emp, email, nivel_ingreso, password, cargo, prospecto_id);
    console.log(sesion_tmp);

    fetch('http://ec.espol.edu.ec/api/descargabrochurepost', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(sesion_tmp)

    }).then(res=> res.json())
      .then(res => toastr.success(res.message));
     
}
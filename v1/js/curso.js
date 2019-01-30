//console.log("Entramos a cursos");

var cursoSeleccionado = localStorage.getItem("curso");
var listadoEventos = JSON.parse(localStorage.getItem("events"));
var listadoIds = JSON.parse(localStorage.getItem("eve"));
var cont = -1;

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

fetch('http://cec.espol.edu.ec/api/prospecto')
        .then((arregloProspectos) => {
            return arregloProspectos.json();
        } ).then((arregloProspectos) => {

             arregloProspectos.prospectos.forEach(function(objeto) {

                if (objeto.id == cursoSeleccionado){
                //console.log(listadoEventos);
                    listadoEventos.forEach(function(even){
                        cont++;
                        //console.log(cont)
                        if (objeto.id == even){
                            var btnRegistrar = document.getElementById("registrarCurso");
                            btnRegistrar.style.display = "block" ;
                            console.log(listadoIds[cont])
                            localStorage.setItem("evento", listadoIds[cont]);
                            console.log(localStorage.getItem("evento"))
                            btnRegistrar.addEventListener("click", boolRe);
                            if (objeto.tipo == "Webinario" || objeto.tipo == "Charla"){
                                btnRegistrar.style.display = "none";
                                document.getElementById('registrarcharla').style.display = "block"
                                document.getElementById('verCharla').style.display = "block"
                            }

                        }

                        if (objeto.tipo != "Webinario" && objeto.tipo != "Charla"){
                            document.getElementById('titleMeto').style.display = "block"
                            console.log("No es un webinario")
                            var btnDescargar = document.getElementById("descargarBr");
                            btnDescargar.style.display = "block" ;
                            var btnPolitica = document.getElementById("verPolitica");
                            btnPolitica.style.display = "block" ;
                            localStorage.setItem("brochure", objeto.id);
                            console.log(localStorage.getItem("brochure"))
                            btnDescargar.addEventListener("click", boolBr);

                        } else {
                            console.log("Entró en un webinario")
                            document.getElementById('titleMeto').style.display = "none"
                        }
                    });

            document.getElementById('categoriaCurso').innerHTML = objeto.area.nombre;
            document.getElementById('imagenCursoEspecifico').src = "http://www.cec.espol.edu.ec" + objeto.imagen;
            document.getElementById('nombreCursoEspecifico').innerHTML = objeto.nombre;
            document.getElementById('descripcionCursoEspecifico').innerHTML = objeto.contenido.descripcion;
            document.getElementById('metodologiaCursoEspecifico').innerHTML = objeto.contenido.metodologia;
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


        //var btnSesion = document.getElementById("sesion");
        //btnSesion.addEventListener("click", iniciarSesion);

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
    var prospecto_id = parseInt(localStorage.getItem("brochure"));




    var sesion_tmp = new Sesion(nombres, apellidos, tipo_id, identificacion, fecha_nac, ciudad, sexo, domicilio, nivel_academico, titulo, institucion_proce, profesion, empresa, movil, telefono, telefono_emp, email, nivel_ingreso, password, cargo, prospecto_id);
    console.log(sesion_tmp);

    fetch('http://cec.espol.edu.ec/api/descargabrochurepost', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sesion_tmp)
    }).then(res=>res.json())
      .then(res => alert(res.message));



}
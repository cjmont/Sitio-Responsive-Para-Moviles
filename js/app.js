var i = -1;
var j = -1;
var k = -1;
var l = -1;
var contCurso = -1;
var contProg = -1;
var contDiplo = -1;
var selected = [];
var arregloIdEvento = [];
var arregloId = [];



try {
    var btnSend = document.getElementById('btn_send');
    btnSend.addEventListener("click", cargarCorp);
} catch (err){

}

try {  
    var btnRegistro = document.getElementById('btn_registro');


    btnRegistro.addEventListener("click", function(){cargarRegistro(localStorage.getItem(""))}, false);
} catch (err){
    console.log(err)
}



try {
    var btnEnviar = document.getElementById('btn_submit');

    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];

    btnEnviar.addEventListener("click", cargarDatos);

    }

catch(err){

}

try {
    var btnEnviar = document.getElementById('btn_submit_catalogo');

    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];

    btnEnviar.addEventListener("click", cargarDatos);

    }

catch(err){

}


function cargarEvento(variable, variable2){
    console.log("")
    localStorage.setItem("curso", variable);
    // localStorage.setItem("evento_curso", variable2);
}

function cargarNoticia(variable){
    localStorage.setItem("noticia", variable);
    // console.log(localStorage.getItem("noticia"));
}

window.onload = function() {
    //cargarCurso(1);
    //cargarNoticia(1);
};

/*fetch('http://cec.espol.edu.ec/api/noticia')
        .then((arregloNoticias) => {
            return arregloNoticias.json();
        } ).then((arregloNoticias) => {

            arregloNoticias.noticias.forEach(function(objeto) {
                j++;
                //console.log(objeto)

                if (objeto.tipo === "newsletter"){
                    objeto.articulos.forEach(function(article) {
                        k++;
                        $("#todosInfoec").append('<article class="blog_item heading_space wow fadeInLeft" data-wow-delay="300ms"><div class="row"><div class="col-md-5 col-sm-5 heading_space"><div class="image"><img id="imagenNoticia'+k+'" src="" alt="blog" class="border_radius"></div></div><div class="col-md-7 col-sm-7 heading_space"><h3 id="tituloNoticia'+k+'"></h3><ul class="comment margin10"><li><a href="#." id="fechaNoticia'+k+'"></a></li></ul><p id="contenidoNoticia'+k+'" class="margin10"></p><a onclick="cargarNoticia('+k+')" id="botonNoticia'+k+'" class=" btn_common btn_border margin10 border_radius" href="blog_detail.html">Ver más</a></div></div></article>')

                        

                        try {
                        document.getElementById('fechaNoticia' + k).innerHTML = objeto.publicacion;
                        document.getElementById('tituloNoticia' + k).innerHTML = article.titulo;
                        document.getElementById('contenidoNoticia' + k).innerHTML = article.contenido;
                        document.getElementById('imagenNoticia' + k).src = "http://www.ec.espol.edu.ec" + article.imagen;
                        console.log("http://www.ec.espol.edu.ec" + article.imagen)

                        }catch(err){
                            //console.log(err);
                        }

                        

                    })

                    


                } else {

                    //console.log("Este era un newsletter: " + objeto)

                    objeto.articulos.forEach(function(article) {
                        k++;
                        $("#todasNoticias").append('<article class="blog_item heading_space wow fadeInLeft" data-wow-delay="300ms"><div class="row"><div class="col-md-5 col-sm-5 heading_space"><div class="image"><img id="imagenNoticia'+k+'" src="" alt="blog" class="border_radius"></div></div><div class="col-md-7 col-sm-7 heading_space"><h3 id="tituloNoticia'+k+'"></h3><ul class="comment margin10"><li><a href="#." id="fechaNoticia'+k+'"></a></li></ul><p id="contenidoNoticia'+k+'" class="margin10"></p><a onclick="cargarNoticia('+k+')" id="botonNoticia'+k+'" class=" btn_common btn_border margin10 border_radius" href="blog_detail.html">Ver más</a></div></div></article>')
                        //console.log(article.titulo);

                        try {
                            document.getElementById('fechaNoticia' + k).innerHTML = objeto.publicacion;
                            document.getElementById('tituloNoticia' + k).innerHTML = article.titulo;
                            document.getElementById('contenidoNoticia' + k).innerHTML = article.contenido;
                            document.getElementById('imagenNoticia' + k).src = "http://www.ec.espol.edu.ec" + article.imagen;

                        }catch(err){
                            
                        }
                        if (k > 7){

                            $(".owl-wrapper").append('<div class="owl-item" style="width:375px;"><div class="item"><div class="content_wrap"><div class="image"><img id="imagenNoticiaSlider'+k+'" src="" alt="Edua" class="img-responsive border_radius"></div><div class="news_box border_radius"><h4><a onclick="cargarNoticia('+k+')" id="tituloNoticiaSlider'+k+'"></a></h4><ul class="commment"></ul><p id="contenidoNoticiaSlider'+k+'"></p><a onclick="cargarNoticia('+k+')" id="botonNoticiaSlider'+k+'" class=" btn_common btn_border margin10 border_radius" href="blog_detail.html">Ver más</a></div></div></div></div>')
                            try {
                            document.getElementById('imagenNoticiaSlider' +k).src = "http://www.ec.espol.edu.ec" + article.imagen;
                            document.getElementById('tituloNoticiaSlider' + k).innerHTML = article.titulo;
                            document.getElementById('contenidoNoticiaSlider' + k).innerHTML= article.contenido.slice(0, 80) ;
                            }catch(err){
                                //console.log(err);
                            }
                        }

                    })

                    

                }
                
                


            });
        });*/

/*
fetch('http://cec.espol.edu.ec/api/prospecto')
        .then((arregloProspectos) => {
            return arregloProspectos.json();
        } ).then((arregloProspectos) => {
            console.log(arregloProspectos);

            $('#searchBox').on("input", function() {
                var dInput = this.value;
                console.log(dInput);

                arregloProspectos.prospectos.forEach(function(objeto) {

                    var n = objeto.nombre.includes(""+dInput);
                    if (n == true){
                        console.log(objeto.nombre)
                    }
                    
                });

            });



            arregloProspectos.prospectos.forEach(function(objeto) {
            i++;

                
                if (objeto.tipo === "Curso"){

                    $("#todosCursos").append('<div class="col-sm-6 col-md-4"><div class="course margin_top wow fadeIn" data-wow-delay="400ms"><div class="image bottom25"><img id="imagenCurso'+i+'" src="" alt="Course" class="border_radius"></div><h3 class="bottom10" id="nombreCurso'+i+'"><a href="course_detail.html"></a></h3><p class="bottom20" id="descripcionCurso'+i+'"></p><a onclick="cargarCurso('+objeto.id+')" id="botonCurso'+i+'" class="btn_common yellow border_radius" href="course_detail.html">Ver más</a></div></div>');
                    try {
                        document.getElementById('imagenCurso' + i).src = "http://www.ec.espol.edu.ec" + objeto.imagen;
                        document.getElementById('nombreCurso' + i).innerHTML = objeto.nombre.slice(0,30);
                        document.getElementById('descripcionCurso' + i).innerHTML = objeto.contenido.objetivo.slice(0,85);
                        var btnPolitica = document.getElementById("verPolitica");
                        btnPolitica.style.display = "block" ;
                    }
                    catch(err) {
                        //console.log(err.message);
                    }


                    
                }else if (objeto.tipo === "Programa"){

                    //console.log("En programa" + objeto.tipo);

                    $("#todosProgramas").append('<div class="col-sm-6 col-md-4"><div class="course margin_top wow fadeIn" data-wow-delay="400ms"><div class="image bottom25"><img id="imagenPrograma'+i+'" src="" alt="Course" class="border_radius"></div><h3 class="bottom10" id="nombrePrograma'+i+'"><a href="course_detail.html"></a></h3><p class="bottom20" id="descripcionPrograma'+i+'"></p><a onclick="cargarCurso('+objeto.id+')" id="botonPrograma'+i+'" class="btn_common yellow border_radius" href="course_detail.html">Ver más</a></div></div>');
                    
                    try {
                        
                        document.getElementById('imagenPrograma' + i).src = "http://www.ec.espol.edu.ec" + objeto.imagen;
                        document.getElementById('nombrePrograma' + i).innerHTML = objeto.nombre.slice(0,30);
                        document.getElementById('descripcionPrograma' + i).innerHTML = objeto.contenido.objetivo.slice(0,85);
                        var btnPolitica = document.getElementById("verPolitica");
                        btnPolitica.style.display = "block" ;
                    }
                    catch(err) {
                        //console.log(err.message);
                    }


                    
                }else if (objeto.tipo === "Diplomado"){

                    //console.log("En diplomado" + objeto.tipo);

                    $("#todosDiplomados").append('<div class="col-sm-6 col-md-4"><div class="course margin_top wow fadeIn" data-wow-delay="400ms"><div class="image bottom25"><img id="imagenDiplomado'+i+'" src="" alt="Course" class="border_radius"></div><h3 class="bottom10" id="nombreDiplomado'+i+'"><a href="course_detail.html"></a></h3><p class="bottom20" id="descripcionDiplomado'+i+'"></p><a onclick="cargarCurso('+objeto.id+')" id="botonDiplomado'+i+'" class="btn_common yellow border_radius" href="course_detail.html">Ver más</a></div></div>');
                    
                    try {
                        
                        document.getElementById('imagenDiplomado' + i).src = "http://www.ec.espol.edu.ec" + objeto.imagen;
                        document.getElementById('nombreDiplomado' + i).innerHTML = objeto.nombre.slice(0,30);
                        document.getElementById('descripcionDiplomado' + i).innerHTML = objeto.contenido.objetivo.slice(0,85);
                        var btnPolitica = document.getElementById("verPolitica");
                        btnPolitica.style.display = "block" ;
                    }
                    catch(err) {
                        //console.log(err.message);
                    }


                    
                }else {

                    $("#todasCharlas").append('<div class="col-sm-6 col-md-4"><div class="course margin_top wow fadeIn" data-wow-delay="400ms"><div class="image bottom25"><img id="imagenCharla'+i+'" src="" alt="Course" class="border_radius"></div><h3 class="bottom10" id="nombreCharla'+i+'"><a href="course_detail.html"></a></h3><p class="bottom20" id="descripcionCharla'+i+'"></p><a onclick="cargarCurso('+objeto.id+')" id="botonCharla'+i+'" class="btn_common yellow border_radius" href="course_detail.html">Ver más</a></div></div>');
                    
                    try {
                        document.getElementById('imagenCharla' + i).src = "http://www.ec.espol.edu.ec" + objeto.imagen;
                        document.getElementById('nombreCharla' + i).innerHTML = objeto.nombre.slice(0,30);
                        document.getElementById('descripcionCharla' + i).innerHTML = objeto.contenido.objetivo.slice(0,85);
                    }
                    catch(err) {
                        //console.log(err.message);
                    }

                }







            });

        })

*/

fetch('http://ec.espol.edu.ec/api/evento')
        .then((arregloEventos) => {
            return arregloEventos.json();
        } ).then((arregloEventos) => {

            arregloEventos.eventos.forEach(function(objeto) {
                
                arregloIdEvento.push(objeto.contenido[0].prospecto[0].id);
                arregloId.push(objeto.id);
                //console.log(arregloIdEvento);
            l++;



            //console.log(objeto);
            //console.log(arregloEventos);
            //console.log(arregloEventos.eventos);
                
                if (objeto.contenido[0].prospecto[0].tipo === "Curso"){
                    contCurso++
                    if (contCurso < 3){
                        $(".indexCursos").append('<a class="chooseEvent" onclick="cargarEvento('+objeto.contenido[0].prospecto[0].id+', '+objeto.id+')" href="course_detail.html"><li id="idC'+l+'" class="pricing_feature"></li></a>');
                        try{
                        document.getElementById('idC' + l).innerHTML = objeto.contenido[0].prospecto[0].nombre;
                        //console.log(objeto.contenido[0].prospecto[0].nombre);
                        }catch(err){}
                    }
                    
                    
                }else if (objeto.contenido[0].prospecto[0].tipo === "Programa"){
                    contProg++
                    if (contProg < 3){
                        $(".indexProgramas").append('<a class="chooseEvent" onclick="cargarEvento('+objeto.contenido[0].prospecto[0].id+', '+objeto.id+')" href="course_detail.html"><li id="idP'+l+'" class="pricing_feature"></li></a>');
                        try{
                        document.getElementById('idP' + l).innerHTML = objeto.contenido[0].prospecto[0].nombre;
                        //console.log(objeto.contenido[0].prospecto[0].nombre);
                        }catch(err){}
                    }

                    
                }else if (objeto.contenido[0].prospecto[0].tipo === "Diplomado"){
                    contDiplo++
                    if (contDiplo < 3){
                        $(".indexDiplomados").append('<a class="chooseEvent" onclick="cargarEvento('+objeto.contenido[0].prospecto[0].id+', '+objeto.id+')" href="course_detail.html"><li id="idD'+l+'" class="pricing_feature"></li></a>');
                        try{
                        document.getElementById('idD' + l).innerHTML = objeto.contenido[0].prospecto[0].nombre;
                        //console.log(objeto.contenido[0].prospecto[0].nombre);
                        }catch(err){}
                    }
                
                }

                




 
            });

            try {
                localStorage.setItem("events", JSON.stringify(arregloIdEvento));
                localStorage.setItem("eve", JSON.stringify(arregloId));
            }catch(err){

            }
            
        })

class Registro {
    constructor(nombres, apellidos, tipo_id, identificacion, fecha_nac, ciudad, sexo, domicilio, nivel_academico, titulo, institucion_proce, profesion, empresa, movil, telefono, telefono_emp, email, nivel_ingreso, password, cargo, prospecto_id, registro_participante,  evento){
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
        this.registro_participante = registro_participante;
        this.evento = evento;

    }
}

function cargarRegistro (boolBr) {
    console.log(boolBr);
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var tipo_id = document.getElementById('tipo_id').value;
    var identificacion = document.getElementById('identificacion').value;
    var fecha_nac = document.getElementById('fecha_nac').value;
    var ciudad = document.getElementById('ciudad').value;
    var sexo = document.getElementById('sexo').value;
    var domicilio = document.getElementById('domicilio').value;
    var nivel_academico = document.getElementById('nivel_academico').value;
    var titulo = document.getElementById('titulo').value;
    var institucion_proce = document.getElementById('institucion_proce').value;
    var profesion = document.getElementById('profesion').value;
    var empresa = "";
    var movil = document.getElementById('movil').value;
    var telefono = document.getElementById('telefono').value;
    var telefono_emp = document.getElementById('telefono_emp').value;
    var email = document.getElementById('email').value;
    var nivel_ingreso = document.getElementById('nivel_ingreso').value;    
    var password = null;
    var cargo = null;

    if (boolBr == "true"){
        console.log("Ok, debo enviar el correo del brochure");
        var prospecto_id = localStorage.getItem("brochure");
        var registro_participante = "false";
        var evento = null;
    } else {
        console.log("Ok, se está registrando en el curso");
        var prospecto_id =  localStorage.getItem("brochure");
        var registro_participante = "true";
        var evento = localStorage.getItem("evento_curso");
    }




    var registro_tmp = new Registro(nombres, apellidos, tipo_id, identificacion, fecha_nac, ciudad, sexo, domicilio, nivel_academico, titulo, institucion_proce, profesion, empresa, movil, telefono, telefono_emp, email, nivel_ingreso, password, cargo, prospecto_id, registro_participante, evento);
    console.log(registro_tmp);
    
    fetch('http://ec.espol.edu.ec/api/registropost', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registro_tmp)
    }).then(res=>res.json())
      .then(res => toastr.success(res.message))
      .then(setTimeout(function () {
            window.location.href = "http://200.10.147.7/course_detail.html"; 
            }, 5000) );
        

}




class Contacto {
    constructor(nombre, email, telefono, mensaje){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.mensaje = mensaje;
    }
}

class Corporativo {
    constructor(empresa, nombres, apellidos, email, celular, cargo, tipo, fecha, participantes, dias, horaInicio, horaFin, lugar, problema, nombre_curso){
        this.empresa = empresa;
        this.nombres = nombres;
        this.apellidos =apellidos;
        this.email = email;
        this.celular = celular;
        this.cargo = cargo;
        this.tipo = tipo;
        this.fecha = fecha;
        this.participantes = participantes;
        this.dias = dias;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.lugar = lugar;
        this.problema = problema;
        this.nombre_curso = nombre_curso;
    }
}




function cargarDatos (boolBr) {
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('celular').value;
    var mensaje = document.getElementById('message').value;
    var contacto_tmp = new Contacto(nombre, email, telefono, mensaje);
    console.log(contacto_tmp);
    fetch('http://www.cec.espol.edu.ec/api/usuariospost', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contacto_tmp)
    }).then(res=>res.json())
      .then(res => console.log(res));


    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('celular').value = "";
        document.getElementById('message').value = "";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('celular').value = "";
        document.getElementById('message').value = "";
    }
}


class DescargaCatalogo {
    constructor(nombres, apellidos, tipo_id, identificacion, fecha_nac, ciudad, sexo, domicilio, nivel_academico, titulo, institucion_proce, profesion, empresa, movil, telefono, telefono_emp, email, nivel_ingreso, password, cargo, prospecto_id, registro_participante,  evento){
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
        this.registro_participante = registro_participante;
        this.evento = evento;

    }
}





function cargarDatos () {
    var nombres = document.getElementById('nombres').value;
    var apellidos = "";
    var tipo_id = "";
    var identificacion = document.getElementById('cedula').value;
    var fecha_nac = "";
    var ciudad = "";
    var sexo = "";
    var domicilio = "";
    var nivel_academico = "";
    var titulo = "";
    var institucion_proce = "";
    var profesion = "";
    var empresa = "";
    var movil = "";
    var telefono = document.getElementById('celular').value;
    var telefono_emp = "";
    var email = document.getElementById('email').value;
    var nivel_ingreso = "";    
    var password = "";
    var cargo = "";

    var prospecto_id = "Catalogo de Eventos";
    var registro_participante = "false";
    var evento = null;

    var catalogo_post = new DescargaCatalogo(nombres, apellidos, tipo_id, identificacion, fecha_nac, ciudad, sexo, domicilio, nivel_academico, titulo, institucion_proce, profesion, empresa, movil, telefono, telefono_emp, email, nivel_ingreso, password, cargo, prospecto_id, registro_participante, evento);
    console.log(catalogo_post);
    
    fetch('http://ec.espol.edu.ec/api/registropost', {

      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(catalogo_post)
      }).then(res=>res.json())
      .then(res =>{       
            if(res.estado == "200"){
               toastr.success(res.message)  
                window.location.href = "http://200.10.147.7/catalogo.pdf";
                console.log(res.estado);
            }else if (res.estado == "400"){
               toastr.success(res.message)
              
            }else{
                toastr.success(res.message)
            }
            });
      
      

}





function cargarCorp () {
    console.log(selected);
    var empresa = document.getElementById('empresa').value;
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var cargo = document.getElementById('cargo').value;
    var tipo = document.getElementById('tipo').value;
    var fecha = document.getElementById('fecha').value;
    var participantes = document.getElementById('participantes').value;

    var dias = "" + JSON.stringify(selected) + "";
    var nombre_curso = document.getElementById('nombre_curso').value;
    //var dias = document.getElementById('dias').value;
    var horaInicio = document.getElementById('horaInicio').value;
    var horaFin = document.getElementById('horaFin').value;
    var lugar = document.getElementById('lugar').value;
    var problema = document.getElementById('problema').value;

    var corporativo_tmp = new Corporativo(empresa, nombres, apellidos, email, celular, cargo, tipo, fecha, participantes, dias, horaInicio, horaFin, lugar, problema, nombre_curso);
    console.log(corporativo_tmp);
    fetch('http://www.cec.espol.edu.ec/api/corporativopost', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(corporativo_tmp)
    }).then(res=>res.json())
      .then(res => console.log(res));

}


try {
$('input').on('click', function(){
selected = [];
$('.days input:checked').each(function() {
     selected.push($(this).val());

});


//Or
/*
var checkboxes = document.getElementsByName('employee');
var selected = [];
  for (var i=0; i<checkboxes.length; i++) {
     if (checkboxes[i].checked) {
        selected.push(checkboxes[i].value);
     }
  }
*/
  console.log(JSON.stringify(selected));
});

}catch(err){

}
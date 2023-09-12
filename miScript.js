//PRUEBAS MENU RESPONSIVO

const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("main-menu");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("main-menu--show");
});

function removeMenu() {
  mainMenuElement.classList.remove("main-menu--show");
}

//OBTENCION DE ELEMENTOS A TRABAJAR

const perfil = document.getElementById("perfil-li");
const nivel = document.getElementById("nivel-li");
const compras = document.getElementById("compras-li");
const reclamos = document.getElementById("reclamos-li");
const reembolsos = document.getElementById("reembolsos-li");

const perfilIcono = document.getElementById("animar");
const nivelIcono = document.getElementById("nivel");
const comprasIcono = document.getElementById("compras");
const reclamosIcono = document.getElementById("reclamos");
const reembolsosIcono = document.getElementById("reembolsos");

//REDIRECCIONAR OPCIONES DENTRO DEL DASHBOARD.

perfil.addEventListener("click", () => {
  window.location.reload();
  window.location.href = "dashboard.html#dashboard";
});
nivel.addEventListener("click", () => {
  window.location.reload();
  window.location.href = "dashboard.html#dashboard";
});
compras.addEventListener("click", () => {
  window.location.reload();
  window.location.href = "dashboard.html#dashboard";
});
reclamos.addEventListener("click", () => {
  window.location.reload();
  window.location.href = "dashboard.html#dashboard";
});
reembolsos.addEventListener('click',()=>{
  window.location.reload();
  window.location.href = 'dashboard.html#dashboard';
  });


  


  //ANIMACION DE LAS OPCIONES
perfil.addEventListener("mouseenter", () => {
  perfilIcono.classList.add("animar1");
});
perfil.addEventListener("mouseleave", () => {
  perfilIcono.classList.remove("animar1");
});

nivel.addEventListener("mouseenter", () => {
  nivelIcono.classList.add("animar1");
});
nivel.addEventListener("mouseleave", () => {
  nivelIcono.classList.remove("animar1");
});

compras.addEventListener("mouseenter", () => {
  comprasIcono.classList.add("animar1");
});
compras.addEventListener("mouseleave", () => {
  comprasIcono.classList.remove("animar1");
});

reclamos.addEventListener("mouseenter", () => {
  reclamosIcono.classList.add("animar1");
});
reclamos.addEventListener("mouseleave", () => {
  reclamosIcono.classList.remove("animar1");
});

reembolsos.addEventListener("mouseenter", () => {
  reembolsosIcono.classList.add("animar1");
});
reembolsos.addEventListener("mouseleave", () => {
  reembolsosIcono.classList.remove("animar1");
});



function recogerDatos() {
  // CON localstorage.setItem ALMACENAMOS LA VARIABLE PARA QUE PUEDA SER UTILIZADA EN OTROS HTML

  var nombre = document.getElementById("nombre").value;
  localStorage.setItem("nombre", nombre);

  var apellido = document.getElementById("apellido").value;
  localStorage.setItem("apellido", apellido);

  var correo = document.getElementById("correo").value;
  localStorage.setItem("correo", correo);

  var descripcion = document.getElementById("descripcion").value;
  localStorage.setItem("descripcion", descripcion);

  //VALIDACION DE FORMULARIO

  if (nombre == "" || apellido == "" || correo == "" || descripcion == "") {
    if (document.getElementById("nombre").value == "") {
      document.getElementById("nombre").style.backgroundColor = "tomato";
    }

    if (document.getElementById("apellido").value == "") {
      document.getElementById("apellido").style.backgroundColor = "tomato";
    }

    if (document.getElementById("correo").value == "") {
      document.getElementById("correo").style.backgroundColor = "tomato";
    }

    if (document.getElementById("descripcion").value == "") {
      document.getElementById("descripcion").style.backgroundColor = "tomato";
    }
  } else {
    window.location.href = "siguiente.html";
  }
}

/*ESTA FUNCION ANONIMA PERMITE CARGAR LAS VARIABLES EN EL LOAD DEL HTML 
Y LE ASIGNA SU VALOR A LOS INPUT DE LA PAGINA "siguiente.html" */

window.addEventListener("load", function () {
  var nombre1 = localStorage.getItem("nombre");
  document.getElementById("nombreSgte").value = nombre1;

  var apellido1 = localStorage.getItem("apellido");
  document.getElementById("apellidoSgte").value = apellido1;

  var correo1 = localStorage.getItem("correo");
  document.getElementById("correoSgte").value = correo1;

  var descripcion1 = localStorage.getItem("descripcion");
  document.getElementById("descripcionSgte").value = descripcion1;
});

/*LUEGO DE VALIDAR LOS CAMPOS VACIOS, Y CAMBIAR EL FONDO A ROJO,
ESTA OPCION RESTAURARA EL COLOR DEL FONDO AL HACER CLICK EN EL INPUT */


const miInput1 = document.getElementById("nombre");

miInput1.addEventListener("click", function () {
  document.getElementById("nombre").style.background = "white";
});

const miInput2 = document.getElementById("apellido");

miInput2.addEventListener("click", function () {
  document.getElementById("apellido").style.background = "white";
});

const miInput3 = document.getElementById("correo");

miInput3.addEventListener("click", function () {
  document.getElementById("correo").style.background = "white";
});

const miInput4 = document.getElementById("descripcion");

miInput4.addEventListener("click", function () {
  document.getElementById("descripcion").style.background = "white";
});


function volver() {
  window.location.href = "contacto.html";
}



function alerta() {
  alert("Enviado con éxito!");

  window.location.href = "index.html";
}





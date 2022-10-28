const nombre = document.getElementById("nombre");
const direccion = document.getElementById("direccion");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const pagweb = document.getElementById("pagweb");
const resumen = document.getElementById("resumen");
const idiomas = document.getElementById("idiomas");
const empleos = document.getElementById("empleos");
const educacion = document.getElementById("educacion");
const skillx = document.getElementById("skill");
const certificaciones = document.getElementById("certificaciones");


function validate(){
   const arrname=[];
  


if (nombre.value == "" || nombre.value==null || nombre.value == undefined) {
      arrname.push(nombre.getAttribute("name"));
}  

if (direccion.value == "" || direccion.value==null || direccion.value == undefined) {
   arrname.push(direccion.getAttribute("name"));
}  

if (correo.value == "" || correo.value==null || correo.value == undefined) {
   arrname.push(correo.getAttribute("name"));
}  

if (telefono.value == "" || telefono.value==null || telefono.value == undefined) {
   arrname.push(telefono.getAttribute("name"));
}  

if (pagweb.value == "" || pagweb.value==null || pagweb.value == undefined) {
   arrname.push(pagweb.getAttribute("name"));
}  

if (resumen.value == "" || resumen.value ==null || resumen.value  == undefined) {
   arrname.push(resumen.getAttribute("name"));
}  

if (idiomas.value == "" || idiomas.value==null || idiomas.value == undefined) {
   arrname.push(idiomas.getAttribute("name"));
}  

if (empleos.value == "" || empleos.value==null || empleos.value == undefined) {
   arrname.push(empleos.getAttribute("name"));
}  

if (educacion.value == "" || educacion.value==null || educacion.value == undefined) {
   arrname.push(educacion.getAttribute("name"));
}  

if (skillx.value == "" || skillx.value==null || skillx.value == undefined) {
   arrname.push(skillx.getAttribute("name"));
}  

if (certificaciones.value == "" || certificaciones.value==null || certificaciones.value == undefined) {
   arrname.push(certificaciones.getAttribute("name"));
}  

   
if (arrname.length >= 1) {
   if (confirm(` Los campos: ${arrname} están vacíos. ¿Desea continuar?`)) {
      validation2();
      deletes();
   }
} else{
   validation2();
   deletes();
}

   

}

function validation2(){

const lista = idiomas.value.split(",");
const lista2 = skill.value.split(",");
const lista3 = empleos.value.split(",");
const lista4 = educacion.value.split(",");
const lista5 = certificaciones.value.split(",");

const juan = document.getElementById("nigga");

const div1 = document.createElement("div");
div1.setAttribute("class","container");


const div2 = document.createElement("div");
div2.setAttribute("class","card");
div2.setAttribute("id","idpafondo");

const div3 = document.createElement("div");
div3.setAttribute("class","card-header text-center");

const vaina4 = document.createElement("h3");
vaina4.innerText = "Curriculum Vitae";

const div4 = document.createElement("div");
div4.setAttribute("class","card-body");

const div5 = document.createElement("div");
div5.setAttribute("class","row");

const div6 = document.createElement("div");
div6.setAttribute("class","col-4");
div6.setAttribute("id","columna1");

const hache7 = document.createElement("h1");
hache7.setAttribute("class","fw-light");
hache7.innerText = nombre.value;

const hache9 = document.createElement("h6");
hache9.innerText = "Contacto";

const division1 = document.createElement("hr");
division1.setAttribute("id","division1");

const hachedir = document.createElement("h6");
hachedir.innerText = "Dirección:";

const hache10 = document.createElement("p");
hache10.innerText = direccion.value;

const hache11 = document.createElement("h6");
hache11.innerText = "Correo:";

const hache12 = document.createElement("p");
hache12.innerText = correo.value;

const hache13 = document.createElement("h6");
hache13.innerText = "Teléfono:";

const hache14 = document.createElement("p");
hache14.innerText = telefono.value;

const hache15 = document.createElement("h6");
hache15.innerText = "Pagina web:";

const linkd = document.createElement("a");
linkd.setAttribute("href",pagweb.value);

const hache16 = document.createElement("p");
hache16.innerText = pagweb.value;

const hache17 = document.createElement("h6");
hache17.innerText = "Idiomas";

const division2 = document.createElement("hr");
division2.setAttribute("id","division1");

const listidio = document.createElement("ul");

const arr =[lista.length];

for (let i = 0; i < lista.length; i++) {
   arr[i] = document.createElement("li");
   arr[i].innerText = lista[i];
   listidio.appendChild(arr[i]);
}

const col2 = document.createElement("div");
col2.setAttribute("class", "col offset-1");

const hache62 = document.createElement("h6");
hache62.setAttribute("id","contacto");
hache62.innerText = "Resumen";

const divisio3 = document.createElement("hr");
divisio3.setAttribute("id","division1");

const texto = document.createElement("p");
texto.innerText = resumen.value;

const hache63 = document.createElement("h6");
hache63.setAttribute("id","contacto");
hache63.innerText = "Skills";

const divisio4 = document.createElement("hr");
divisio4.setAttribute("id","division1");

const listi2 = document.createElement("ul");

const arr2 =[lista2.length];

for (let i = 0; i < lista2.length; i++) {
   arr2[i] = document.createElement("li");
   arr2[i].innerText = lista2[i];
   listi2.appendChild(arr2[i]);
}

const hache64 = document.createElement("h6");
hache64.setAttribute("id","contacto");
hache64.innerText = "Experiencia";

const divisio5 = document.createElement("hr");
divisio5.setAttribute("id","division1");

const listi3 = document.createElement("ul");

const arr3 =[lista3.length];

for (let i = 0; i < lista3.length; i++) {
   arr3[i] = document.createElement("li");
   arr3[i].innerText = lista3[i];
   listi3.appendChild(arr3[i]);
}

const hache65 = document.createElement("h6");
hache65.setAttribute("id","contacto");
hache65.innerText = "Educacion";

const divisio6 = document.createElement("hr");
divisio6.setAttribute("id","division1");

const listi4 = document.createElement("ul");


const arr4 =[lista4.length];

for (let i = 0; i < lista4.length; i++) {
   arr4[i] = document.createElement("li");
   arr4[i].innerText = lista4[i];
   listi4.appendChild(arr4[i]);
}

const hache66 = document.createElement("h6");
hache66.setAttribute("id","contacto");
hache66.innerText = "Certificacicones";

const divisio7 = document.createElement("hr");
divisio7.setAttribute("id","division1");

const listi5 = document.createElement("ul");


const arr5 =[lista5.length];

for (let i = 0; i < lista5.length; i++) {
   arr5[i] = document.createElement("li");
   arr5[i].innerText = lista5[i];
   listi5.appendChild(arr5[i]);
}

const boton = document.createElement("button");
boton.setAttribute("class","btn btn-outline-primary float-end");
boton.innerText = "Eliminar";
boton.addEventListener("click",function(){
juan.removeChild(div1);
});

juan.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
div3.appendChild(vaina4);
div2.appendChild(div4);
div4.appendChild(div5);
div5.appendChild(div6);
div6.appendChild(hache7);
div6.appendChild(hache9);
div6.appendChild(division1);
div6.appendChild(hachedir);
div6.appendChild(hache10);
div6.appendChild(hache11);
div6.appendChild(hache12);
div6.appendChild(hache13);
div6.appendChild(hache14);
div6.appendChild(hache15);
div6.appendChild(linkd);
linkd.appendChild(hache16);
div6.appendChild(hache17);
div6.appendChild(division2);
div6.appendChild(listidio);
div5.appendChild(col2);
col2.appendChild(hache62);
col2.appendChild(divisio3);
col2.appendChild(texto);
col2.appendChild(hache63);
col2.appendChild(divisio4);
col2.appendChild(listi2);
col2.appendChild(hache64);
col2.appendChild(divisio5);
col2.appendChild(listi3);
col2.appendChild(hache65);
col2.appendChild(divisio6);
col2.appendChild(listi4);
col2.appendChild(hache66);
col2.appendChild(divisio7);
col2.appendChild(listi5);
div1.appendChild(boton);


alert("FUNCIONA");

}

function deletes(){
    
     direccion.value = "";
     correo.value = "";
    telefono.value= "";
     pagweb.value= "";
     resumen.value= "";
    idiomas.value= "";
    empleos.value= "";
    educacion.value= "";
     skillx.value= "";
    certificaciones.value= "";
   nombre.value= "";
}
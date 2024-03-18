class Usuario {
    constructor(nombre, apellido, dni, correo, password, login) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.correo = correo;
        this.password = password;
        this.login = login;
    }
}
const arrayUsuario = [];

//variable usuario creada para almacenar get sessionstorage

let usuario;

//llamamos al Usuario en sessionStorage
if(sessionStorage.getItem("Usuario") !== null){

    const usuarioJson = sessionStorage.getItem("Usuario");
    
     usuario = JSON.parse(usuarioJson);
    
    
    
    if (usuario.login === true) {
    
        nombre.innerText = usuario.nombre;
    
        const spannombre = document.getElementById("nombre_usuario");
    
        spannombre.appendChild(nombre);
    
    
        apellido.innerText = usuario.apellido;
    
        const spanApellido = document.getElementById("apellido_usuario");
    
        spanApellido.appendChild(apellido);
    
        dni.innerText = usuario.dni;
    
        const spanDni = document.getElementById("dni_usuario");
    
        spanDni.appendChild(dni);
    
        correo.innerText = usuario.correo;
    
        const spanCorreo = document.getElementById("correo_usuario");
    
        spanCorreo.appendChild(correo);
    
    
    }else{
    
        console.log("no hay ningun usuario registrado");
    }
    
    
    }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//EVENTOS

//boton iniciar sesion

//boton registro

const registroUsuario = document.getElementById("boton-registro");
const inicioUsuario = document.getElementById("boton-inicio");



registroUsuario.addEventListener("click", () => {



    Swal.fire({
        title: "Registro Usuario",
        html: `
           <input type="text" id="usuario-nombre" placeholder="Nombre" class="swal2-input">
           <input type="text" id="usuario-apellido" placeholder="apellido" class="swal2-input">
           <input type="text" id="usuario-dni" placeholder="dni" class="swal2-input">
           <input type="text" id="usuario-correo" placeholder="Correo Electronico" class="swal2-input">
           <input type="password" id="usuario-password" placeholder="Password" class="swal2-input" >
           `,
        confirmButtonText: "Registrarme"

    }).then((result) => {
        if (result.isConfirmed) {

            const nombre = document.getElementById("usuario-nombre").value;
            const apellido = document.getElementById("usuario-apellido").value;
            const dni = document.getElementById("usuario-dni").value;
            const correo = document.getElementById("usuario-correo").value;
            const password = document.getElementById("usuario-password").value;

            let usuario = new Usuario(nombre, apellido, dni, correo, password, false);

            arrayUsuario.push(usuario);

            let usuarioJson = JSON.stringify(usuario);
            Storage

            sessionStorage.setItem("Usuario", usuarioJson);

            console.log(arrayUsuario);
            console.log(usuarioJson);

            Swal.fire({
                title: "Registrado",
                text: "Registro completado con exito",
                icon: "success"
            })

            console.log(usuario);
        }
    })



});

inicioUsuario.addEventListener("click", () => {

    const usuarioJson = sessionStorage.getItem("Usuario");

    const usuario = JSON.parse(usuarioJson);

    if (usuario.login === false) {

        Swal.fire({
            title: "Iniciar Sesion",
            html: `
        <input type="text" id="usuario-login" placeholder="correo" class="swal2-input">
        <input type="password" id="password-login" placeholder="password" class="swal2-input">
        `,
            confirmButtonText: "Iniciar Sesion"

        }).then((result) => {
            if (result.isConfirmed) {

                const usuario_login = document.getElementById("usuario-login").value;
                const password_login = document.getElementById("password-login").value;



                if (usuario_login === usuario.correo && password_login === usuario.password) {

                    Swal.fire({
                        title: `Bienvenido  ${usuario.nombre} ${usuario.apellido}`,
                        icon: "success",
                    })

                    usuario.login = true;

                    let usuarioJson = JSON.stringify(usuario);

                    sessionStorage.setItem("Usuario", usuarioJson);

                    console.log(usuario)
                }
                else {

                    Swal.fire({
                        title: `Usuario incorrecto`,
                        icon: "error",
                        confirmButtonText: "intentar de nuevo"
                    }).then((result) => {

                        if (result.isConfirmed) {


                            if (usuario.login === false) {

                                Swal.fire({
                                    title: "Iniciar Sesion",
                                    html: `
                        <input type="text" id="usuario-login" placeholder="correo" class="swal2-input">
                        <input type="password" id="password-login" placeholder="password" class="swal2-input">
                        `,
                                    confirmButtonText: "Iniciar Sesion"

                                }).then((result) => {

                                    if (result.isConfirmed) {

                                        const usuario_login = document.getElementById("usuario-login").value;
                                        const password_login = document.getElementById("password-login").value;

                                        const usuarioJson = sessionStorage.getItem("Usuario");

                                        const usuario = JSON.parse(usuarioJson);

                                        if (usuario_login === usuario.correo && password_login === usuario.password) {

                                            Swal.fire({
                                                title: `Bienvenido  ${usuario.nombre} ${usuario.apellido}`,
                                                icon: "success",
                                            })

                                            usuario.login = true;
                                            console.log(usuario)
                                        }
                                    }
                                })
                            }
                        }
                    })
                }
            } //segundo if
        })


    }//primer if
    else {
        Swal.fire({
            title: "Ya existe una sesion activa",
            text: "Para ingresar con otro usuario debera de finalizar sesion",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "finalizar sesion"
        }).then((result) => {
            if (result.isConfirmed) {


                Swal.fire({
                    title: "Sesion finalizada",
                    text: "Te esperamos pronto",
                    icon: "success"
                });

                usuario.login = false;

                let usuarioJson = JSON.stringify(usuario);

                sessionStorage.setItem("Usuario", usuarioJson);
                console.log(usuario)


            }
        });
    }//else


});

/////////////////////////////////////////////////////////////////////ELEMENTOS PARA JOKER
const section=document.getElementById("section");
const article=document.getElementById("article");
const footer=document.getElementById("footer");
const header=document.getElementById("header")
const nav=document.getElementById("nav");
const main=document.getElementById("main")
const body=document.getElementById("body");
const joker= document.getElementById("joker");
const divJoker=document.getElementById("div-joker");

console.log(joker);

///////////////////////////////////////////7///////////////////////////////////////////////////////

//aparece el joker

setTimeout(()=>{


    divJoker.style.display="flex";
},5000)

//NO TOCAR

divJoker.addEventListener("click",()=>{
//aqui ira la funcion OnJoker que contendra un nido de funciones
console.log("dio click");

intOnBody();

intMain()


offBody(2500);
onBody(2700);
offHeader(2725);
onHeader(2750);
offBody(2800);
onBody(2900);
offHeader(2725);
onHeader(2750);
offBody(3000);
onBody(3100);
offHeader(2725);
onHeader(2750);
offBody(3200);
onBody(3400);
offBody(3500);
onBody(3600);
offBody(3700);
onBody(3800);
offHeader(3810);
onHeader(3825);





offBody(3850);
onBody(3900);
offBody(3950);
onBody(4000);
offBody(4050);
onBody(4100);
offBody(4150);
onBody(4200);
offBody(4250);
onBody(4300);
offBody(4350);
onBody(4500);
offBody(4500);
onBody(4525);
offBody(4550);
onBody(4575);
offBody(4600);
onBody(4625);
offBody(4650);
onBody(4675);
offBody(4700);
onBody(4725);
offBody(4750);
onBody(4775);
offBody(5000);
onBody(5025);
offBody(5050);
onBody(5075);
offBody(5100);
onBody(5110);
offBody(5110);
onBody(5120);
offBody(5130);
onBody(5140);
offBody(5150);
onBody(5160);
offMain(5500);
onMain(6000);
offMain(6050);
onMain(6100);
offMain(60125);
onMain(6150);
offMain(6200);
onMain(6250);


offHeader(6300);
onHeader(6400);
offHeader(6500);
onHeader(6600);

offHeader(6700);
onHeader(6800);
offHeader(6900);
onHeader(7000);

offHeader(7050);
onHeader(7150);
offHeader(7250);
onHeader(7350);

offHeader(7400);
onHeader(7500);
offHeader(7600);
onHeader(7700);

offHeader(7800);
onHeader(7900);
offHeader(8000);
onHeader(8300);


offNav(8300);
onNav(8400);

offNav(8400);
onNav(8500);

offNav(8600);
offHeader(8700);
onHeader(8800);
onNav(8900);

offNav(9000);
onNav(9050);

offNav(9100);
onNav(9150);

offHeader(9200)
offNav(9300)
offMain(9400)

onHeader(9600)
onNav(9650)
onMain(9700)
});

//   CEAREMOS TODAS LAS FUNCIONES INDIVIDUALES YA QUE NO NOS DEJA REPETIR UN BUCLE




//apaga y prende la pantalla
function intOnBody(){

    setInterval(()=>{

        offBody(1000);
        onBody(1100);
    },1200);

}

function onBody(time){

    setTimeout(()=>{

        body.style.display="grid";
    },time);

}


function offBody(time){

    setTimeout(()=>{

        body.style.display="none";
    },time);
    
}

//////////////////////////////////////////


//apaga y prende el main

function intMain(){

    setInterval(()=>{

        offMain(900);
        onMain(1050);
        mainBlack(1100);


    },1200);
}


function mainBlack(time){

    setTimeout(()=>{

        article.style.background="black";
        article.style.color="red";

    },time);
}



function offMain(time){


    setTimeout(()=>{

   main.style.display="none";
   

    },time);
}

function onMain(time){

 setTimeout(()=>{

 
    main.style.display="grid";
    article.style.background="white";
    article.style.color="black";

 },time)
}

function offNav(time){

    setTimeout(()=>{

        nav.style.display="none";

    },time);
} 

function onNav(time){

    setTimeout(()=>{

        nav.style.display="grid";

    },time);
}

function offHeader(time){

    setTimeout(()=>{

        header.style.display="none";

    },time);
} 

function onHeader(time){

    setTimeout(()=>{

        header.style.display="grid";

    },time);
} 


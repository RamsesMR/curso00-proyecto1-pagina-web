console.log("hola soy el index");

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

//variable usuario creada para almacenar get localstorage

let usuario;

//llamamos al Usuario en localStorage
if(localStorage.getItem("Usuario") !== null){

    const usuarioJson = localStorage.getItem("Usuario");
    
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
    
    
    
    
    
    
    
    
    
        div4.className = "dato-usuario";
        div4.innerHTML = `
    
           <span id="nombre_usuario" class="text-span"></span>
           <span id="apellido_usuario" class="text-span"></span>
           <span id="dni_usuario" class="text-span"></span>
          <span id="correo_usuario" class="text-span"></span>
          `;
    
        contenedor4.appendChild(div4);
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DATOS FINANCIEROS 
    
    
        //nodos para la creacion de datos financieros
    
    
    
        //iva
        iva_usuario.innerText = usuario.totalIva + "$";
    
        const span_iva_usuario = document.getElementById("iva_usuario");
    
        span_iva_usuario.appendChild(iva_usuario);
    
    
        //irpf
        irpf_usuario.innerText = usuario.totalIrpf + "$";
    
        const span_irpf_usuario = document.getElementById("irpf_usuario");
    
        span_irpf_usuario.appendChild(irpf_usuario);
    
    
        //total deduciones
        totalBruto_usuario.innerText = usuario.totalIngresoBruto + "$";
    
        const span_totalBruto_usuario = document.getElementById("totalDeucciones_usuario");
    
        span_totalBruto_usuario.appendChild(totalBruto_usuario);
    
    
        //total bruto
        total_usuario.innerText = usuario.totalIngreso + "$";
    
        const span_total_usuario = document.getElementById("totalBruto_usuario");
    
        span_total_usuario.appendChild(total_usuario);
    
    
        //gasto
        gasto_usuario.innerText = usuario.gastos + "$";
    
        const span_gasto_usuario = document.getElementById("gasto_usuario");
    
        span_gasto_usuario.appendChild(gasto_usuario)
    
    
    
    
    
    
    
        div5.className = "dato-financiero";
    
        div5.innerHTML = `
          
          <span  id="iva_usuario" class="iva_usuario"></span>
          <span id="irpf_usuario" class="irpf_usuario"></span>
          <span id="totalBruto_usuario" class="totalBruto_usuario"></span>
          <span id="totalDeucciones_usuario" class="totalDeucciones_usuario"></span>
          <span id="gasto_usuario" class="gasto_usuario"></span>
          
          `;
    
          contenedor5.appendChild(div5);
    
        
    
        console.log(usuario.totalIva);
        console.log(usuario.totalIrpf);
        console.log(usuario.totalIngresoBruto);
    
    
    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DATOS FINANCIEROS 
    
    
    
        factura_ingreso_usuario.innerText = usuario.facturasIngresos;
        const span_factura_ingreso = document.getElementById("usuario_factura_ingreso");
        span_factura_ingreso.appendChild(factura_ingreso_usuario)
    
    
        factura_gasto_usuario.innerText= usuario.facturasGastos;
        const span_factura_gasto = document.getElementById("usuario_factura_gasto");
        span_factura_gasto.appendChild(factura_gasto_usuario);
    
        factura_personalizadas_usuario.innerText = usuario.facturasPersonalizadas;
        const span_factura_personalizada = document.getElementById("usuario_factura_personalizada");
        span_factura_personalizada.appendChild(factura_personalizadas_usuario);
    
        div6.className="dato-factura-visual";
        div6.innerHTML=`
        
        <span id="usuario_factura_gasto" class="usuario_factura_gasto"></span>
        <span id="usuario_factura_ingreso" class="usuario_factura_ingreso"></span>
        <span id="usuario_factura_personalizada" class="usuario_factura_personalizada">
        
        `;
    
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

            localStorage.setItem("Usuario", usuarioJson);

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

    const usuarioJson = localStorage.getItem("Usuario");

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

                    localStorage.setItem("Usuario", usuarioJson);

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

                                        const usuarioJson = localStorage.getItem("Usuario");

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

                localStorage.setItem("Usuario", usuarioJson);
                console.log(usuario)


            }
        });
    }//else


})


// PAGINA : ./index.html


function registroDelUsuario (user, password) {

   user = document.getElementById ("usuarioRegistrado").value;
   password = document.getElementById ("contraseñaRegistrada").value

   const validacionDelUser = user.search ("@")
   const validacionDeContraseña = password.length > 7

   console.log (validacionDelUser)
   console.log (validacionDeContraseña)

   if ( ( validacionDeContraseña == true ) && ( validacionDelUser != -1 ) ) {

      

      localStorage.setItem ('Bienvenido/a, tu usuario es:',user)
      localStorage.setItem ('tu contraseña es:', password)

      console.log ("Bienvenido/a a la pagina")

      window.location = "./pages/page.html"


   } else {

      console.log ("hubo un error al iniciar sesion")

   }

}


// PAGINA : ./pages/page.html

const viajes = document.querySelector('#viajes');
console.log(viajes)
  viajes.addEventListener('change', () => {
    let valorOption = viajes.value;
    console.log(valorOption);

    let optionSelect = viajes.options[viajes.selectedIndex];

   localStorage.setItem ("Opción:", optionSelect.text);
   localStorage.setItem ("Valor USD:", optionSelect.value);

   // mostrando el resultado por imput

   let  inputResult = document.querySelector('#result').value=(optionSelect.text +' - ' + optionSelect.value);

   // mostrando el resultado por html

    const capa = document.querySelector('#ResultadoDeViajes');
    capa.textContent = `su eleccion es: ${valorOption}`;
  });


let validacionUsuarioRegistrado = localStorage.getItem ('Bienvenido/a, tu usuario es:')
let validacionContraseñaRegistrada = localStorage.getItem ('tu contraseña es:')

function inicioDelUsuario (nuevamenteUser, nuevamentePassword) {

   nuevamenteUser = document.getElementById ("inicioDeSesionUsuarioValidacion").value;
   nuevamentePassword = document.getElementById ("inicioDeSesionContraseñaValidacion").value

   console.log (nuevamenteUser)
   console.log (nuevamentePassword)

   if ( nuevamenteUser === validacionUsuarioRegistrado && nuevamentePassword === validacionContraseñaRegistrada ) {

      console.log ("ah ingresado correctamente") 


      let resultadoDeseado1 = localStorage.getItem ("Opción:");
      let resultadoDeseado2 = localStorage.getItem ("Valor USD:");

      console.log (resultadoDeseado1)
      console.log (resultadoDeseado2)
  


   } else {

      console.log ("hubo un error en el proceso")

   }


}
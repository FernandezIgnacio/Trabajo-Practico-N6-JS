var datos = function (){
    var numero = document.getElementById("numero").value; //Recibe los datos del html
    console.log(numero) //Muestra el numero por consola
    var validacion = document.getElementById("validacion").value; //Recibe los datos del html
    if (validacion=17){ //Verifica que el resultado sea valido, y devuelve la validacion por consola
        console.log("No es un robot.") 
    } else {
        console.log("Es un robot.")
    }
}

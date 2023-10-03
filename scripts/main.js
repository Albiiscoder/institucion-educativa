//Declaración del prompt
let NombreUsario = prompt("Ingrese su nombre");
const obtenerNombreCompleto = (apellido, nombre) => {
    return apellido + ", " + nombre;
}
//Detalle del registro de alumnos y alumnas mediante una constante
const obtenerDetalleDeRegistro = (surName, name, email, phone, age, message) => {
    return (
        obtenerNombreCompleto(surName, name) +
        ", con correo electónico: " +
        email +
        ", con telefono: " +
        phone +
        ", con edad: " +
        age +
        ". Información importante del niño o niña: " +
        message 
    );
}
//Array
let alumnos= [];


//Carga manual del formulario de incripción con un ciclo while
let respuestaUsuario = prompt("¿Quieres completar un nuevo formulario?")
while (respuestaUsuario.trim().toUpperCase() === "SI") {


    let apellidos = prompt("¿Cual es es el apellido del niño o la niña?");
    let nombres = prompt("¿Cualés son los nombres del niño o niña?")
    let correo = prompt("Ingrese un mail de contacto")
    let telefono = prompt ("Ingrese teléfono de contacto")
    let edad = prompt("ingrese edad del niño o la niña")
    let mensaje = prompt("Si desea ingrese información sobre el niño o niña")

//Declaración de un booleano para posibles respuestas del formulario y objetos del array
    if (apellidos != "" && nombres != "" && correo != "" && telefono != "" && edad != "") {
        let alumno= new Alumno(apellidos,nombres,correo, telefono, edad, mensaje);
        alumnos.push (alumno);
        alert("Tu formulario fue completado exitosamente!");
    } else {
        alert("Error al cargar el formulario. Algún campo obligatorio está vacío");
    }

    console.log (
        "El usuario " +
        obtenerDetalleDeRegistro(apellidos, nombres, correo, telefono, edad, mensaje)

    )
    respuestaUsuario = prompt("¿Quieres completar un nuevo formulario?")    
    
}

for (const alumno of alumnos){
    console.table (alumno);

}

//Funcion de orden superior
const alumnos4anios= alumnos.filter((a)=>parseInt(a.edad)===4);
console.log ("Alumnos de 4 años")
for (const alumno of alumnos4anios){
    console.table (alumno);

}








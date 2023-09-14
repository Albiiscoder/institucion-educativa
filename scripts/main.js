
let NombreUsario = prompt("Ingrese su nombre");
const obtenerNombreCompleto = (apellido, nombre) => {
    return apellido + ", " + nombre;
}

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


let respuestaUsuario = prompt("¿Quieres completar un nuevo formulario?")
while (respuestaUsuario.trim().toUpperCase() === "SI") {


    let apellidos = prompt("¿Cual es es el apellido del niño o la niña?");
    let nombres = prompt("¿Cualés son los nombres del niño o niña?")
    let correo = prompt("Ingrese un mail de contacto")
    let telefono = prompt ("Ingrese teléfono de contacto")
    let edad = prompt("ingrese edad del niño o la niña")
    let mensaje = prompt("Si desea ingrese información sobre el niño o niña")

    if (apellidos != "" && nombres != "" && correo != "" && telefono != "" && edad != "") {
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




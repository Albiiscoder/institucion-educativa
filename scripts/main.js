const obtenerNombreCompleto = (apellido, nombre) => {
    return apellido + ", " + nombre;
}

const obtenerDetalleDeRegistro = (surName, name, email, message) => {
    return (
        obtenerNombreCompleto(surName, name) +
        ", con correo electónico: " +
        email +
        ". Información importante del niño o niña: " +
        message
      );
}


let respuestaUsuario = prompt("¿Quieres comenzar a completar el formulario?")
while (respuestaUsuario.trim().toUpperCase() === "SI") {


    let apellidos = prompt("¿Cual es es el apellido del niño o la niña?");
    let nombres = prompt("¿Cualés son los nombres del niño o niña?")
    let correo = prompt("Ingrese un mail de contacto")
    let mensaje = prompt("Si desea ingrese información sobre el niño o niña")

    alert("Tu formulario fue completado exitosamente!");
    console.log(
        "Elusuario" +
        obtenerInformacionDelRegistro(apellidos, nombres, correo, telefono, edad, mensaje)
    );
}

respuestaUsuario = prompt("¿Quieres completar un nuevo formulario?")


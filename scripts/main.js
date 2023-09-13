const obtenerNombreCompleto = (apellido, nombre) => {
    return apellido + ", " + nombre;
}
    


const obtenerInformacionDelRegistro= (surName, name, email, phone, age, message) => {
    return (
        obtenerInformacionDelRegistro (surname, name) +
        ", con correo electrónico: " +
        email +
        ", con telefono: " +
        phone
        ", edad del niño o la niña es: " +
        age
        ", Dejó la siguiente información: " +
        message

    );

}


let respuestaUsuario= prompt ("¿Quieres comenzar a completar el formulario?")
while (respuestaUsuario.trim().toUpperCase()=== "SI"){


let apellidos= prompt ("¿Cual es es el apellido del niño o la niña?");
let nombres= prompt ("¿Cualés son los nombres del niño o niña?")
let correo = prompt ("Ingrese un mail de contacto")
let telefono= prompt ("Ingrese teléfono del contacto")
let edad= prompt ("¿Cual es la edad del niño o niña?")
let mensaje= prompt ("Si desea ingrese información sobre el niño o niña")

alert ("Tu formulario fue completado exitosamente!");
console.log (
    "Elusuario" + 
    obtenerInformacionDelRegistro (apellidos, nombres, correo, telefono,edad, mensaje)
);
}

respuestaUsuario= prompt("¿Quieres completas un nuevo formulario?")

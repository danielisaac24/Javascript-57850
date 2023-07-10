
// function ingresar() {
let alumnos = [];
class nuevoAlumno {
    constructor(nombre, apaellido, documento, nacimiento, numeroSocio) {
        this.nombre = nombre;
        this.apellido = apaellido;
        this.documento = documento;
        this.fechaNacimiento = nacimiento;
        this.numeroSocio = numeroSocio;
    }
    //     toString(elemento){
    //     return '${this.elemento}
    //     // Apellido: ${this.apellido}\n 
    //     // DNI: ${this.documento}\n 
    //     // Nacimiento: ${this.fechaNacimiento}\n
    //     // Keypass ${this.numeroSocio}\n`;
    // }
}
function agregarAlumnos() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let documento = prompt("Ingrese su dni");
    let fechaNacimiento = prompt("Ingrese su fecha de nacimiento");
    let numeroSocio = prompt("Ingese 3 numeros para su keypass");

    let alumno = new nuevoAlumno(nombre, apellido, documento, fechaNacimiento, numeroSocio);
    alumnos.push(alumno);
    let filaActual = document.getElementById('filas').insertRow();
    for (const valor in alumno) {
        let celda1 = filaActual.insertCell()
        celda1.innerHTML = alumno[valor];
    }
}

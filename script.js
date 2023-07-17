

let alumnos = [];
//let alumno = {}; // Declarar alumno como variable global

class nuevoAlumno {
    constructor(nombre, apellido, documento, nacimiento, numeroSocio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.fechaNacimiento = nacimiento;
        this.numeroSocio = numeroSocio;
    }
}

function agregarAlumnos() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let documento = prompt("Ingrese su DNI");
    let fechaNacimiento = prompt("Ingrese su fecha de nacimiento");
    let numeroSocio = prompt("Ingrese 3 números para su keypass");

    let alumno = new nuevoAlumno(nombre, apellido, documento, fechaNacimiento, numeroSocio);
    return alumno;
}

function ingresar() {
    let tabla = document.getElementById('filas');
    tabla.innerHTML = '';
    let alumno = agregarAlumnos();
    alumnos.push(alumno);
    //Generara la tabla con alumnos inscriptos
    for (const item of alumnos) {
        console.log("estoy adentro");
        let filaActual = document.getElementById('filas').insertRow();
        for (const valor in alumno) {
            let celda1 = filaActual.insertCell();
            celda1.innerHTML = item[valor];
        }
    }
}
function filtrarAlumnos() {
    let filtro = document.getElementById('filtro-nombre').value;

    let alumnosFiltrados = alumnos.filter((alumno) => {
        return alumno.nombre.toLowerCase().includes(filtro.toLowerCase());
    });

    // Vaciar la tabla
    let tabla = document.getElementById('filas');
    tabla.innerHTML = '';

    // Generar las filas solo para los alumnos filtrados
    for (const item of alumnosFiltrados) {
        let filaActual = tabla.insertRow();
        for (const valor in item) {
            let celda = filaActual.insertCell();
            celda.innerHTML = item[valor];
        }
    }
}

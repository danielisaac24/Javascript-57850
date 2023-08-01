
let alumnos = [];
let j = 0;

class nuevoAlumno {
    constructor(nombre, apellido, documento, inscripcion, numeroSocio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.fechaInscripcion = inscripcion;
        this.numeroSocio = numeroSocio;
    }
}

function agregarAlumnos() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let documento = prompt("Ingrese su DNI");
    let fechaInscripcion = new Date().toLocaleString("en-GB", {
        timeZone: "UTC",
    });

    let numeroSocio = prompt("Ingrese 3 números para su keypass");

    let alumno = new nuevoAlumno(
        nombre,
        apellido,
        documento,
        fechaInscripcion,
        numeroSocio
    );
    return alumno;
}

function ingresarNuevoAlumno() {
    let tabla = document.getElementById("filas");
    tabla.innerHTML = "";
    let alumno = agregarAlumnos();
    alumnos.push(alumno);
    let index = localStorage.length;
    localStorage.setItem("alumno" + index, JSON.stringify(alumno));
    // Generar la tabla con alumnos inscriptos
    let filaActual = tabla.insertRow();
    for (const valor in alumno) {
        let celda1 = filaActual.insertCell();
        celda1.innerHTML = alumno[valor];
    }
}

function filtrarAlumnos() {
    let alumnosf =[];
    let filtro = document.getElementById("filtro-nombre").value;
    for (let i = 0; i < localStorage.length; i++) {
        const alumno = JSON.parse(localStorage.getItem("alumno" + i));
        alumnosf.push(alumno);
    }
    console.log(alumnos)
    let alumnosFiltrados = alumnosf.filter((alumno) => {
        return alumno.nombre.toLowerCase().includes(filtro.toLowerCase());
    });
    // Vaciar la tabla
    let tabla = document.getElementById("filas");
    tabla.innerHTML = "";

    // Generar las filas solo para los alumnos filtrados
    for (const item of alumnosFiltrados) {
        let filaActual = tabla.insertRow();
        for (const valor in item) {
            let celda = filaActual.insertCell();
            celda.innerHTML = item[valor];
        }
    }
}

function ingresar() {
    console.log("estoy dentro de ingresar");
    let keypass = document.getElementById("keypass").value;
    for (let i = 0; i < localStorage.length; i++) {
        const alumno = JSON.parse(localStorage.getItem("alumno" + i));
        if (keypass == alumno.numeroSocio) {
            console.log("dentro del if");
            alert("su nombre es\t" + alumno.nombre);
        }
    }
}

function actualizarLista() {
    let tabla = document.getElementById("filas");
    tabla.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        const alumno = JSON.parse(localStorage.getItem("alumno" + i));
        // Generar la tabla con alumnos inscriptos
        let filaActual = tabla.insertRow();
        for (const valor in alumno) {
            let celda1 = filaActual.insertCell();
            celda1.innerHTML = alumno[valor];
        }
    }
}
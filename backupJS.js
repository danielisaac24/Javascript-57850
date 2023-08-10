
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

    let alumno = agregarAlumnos();
    alumnos.push(alumno);
    let index = localStorage.length;
    localStorage.setItem("alumno" + index, JSON.stringify(alumno));
    
    // Generar la tabla con alumnos inscriptos
    let tabla = document.getElementById("filas");
    tabla.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        const alumno = JSON.parse(localStorage.getItem("alumno" + i));

        let filaActual = tabla.insertRow();
        for (const valor in alumno) {
            let celda1 = filaActual.insertCell();
            celda1.innerHTML = alumno[ valor ];
        }
    }

}

function filtrarAlumnos() {
    let alumnosf = [];
    let filtro = document.getElementById("filtro-nombre").value;

    for (let i = 0; i < localStorage.length; i++) {
        const alumno = JSON.parse(localStorage.getItem("alumno" + i));
        alumnosf.push(alumno);
    }

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
            celda.innerHTML = item[ valor ];
        }
    }
}

function ingresar() {

    let keypass = document.getElementById("keypass").value;

    for (let i = 0; i < localStorage.length; i++) {
        const alumno = JSON.parse(localStorage.getItem("alumno" + i));
        if (keypass == alumno.numeroSocio) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'SU NOMBRE Es\t' + alumno.nombre,
                showConfirmButton: false,
                timer: 3000
            })
        }
    }

}
let input1  = document.getElementById("keypass")
input1.addEventListener("keydown", function(event) {
    if(event.key === "Enter"){
        ingresar();
    }
})

function actualizarLista() {

    let tabla = document.getElementById("filas");
    tabla.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        const alumno = JSON.parse(localStorage.getItem("alumno" + i));
        let filaActual = tabla.insertRow();
        for (const valor in alumno) {
            let celda1 = filaActual.insertCell();
            celda1.innerHTML = alumno[ valor ];
        }
    }

}

document.getElementById("fetch").addEventListener("click", fetchP)

//--------------------------------------------------------------------------------------------------------
//en este OCTAVO EJEMPLO rutas relativas

//generar variable de ultimo pago desde el local storage
//importante tener dentro de ese objeto un id para poder cruzar los datos con el de cliente

    function fetchP(){
        const lista = document.querySelector('#respuesta')
        fetch('./clases.json')
            .then( (res) => res.json())
            .then( (data) => {
                data.forEach((cliente) => {
                    const li = document.createElement('li')
                    li.innerHTML = `<h4>${cliente.cliente}</h4>
                                    <p>${cliente.dni}</p>
                                    <p>${cliente.id}</p>
                                    <p>Código: ${cliente.fecha_alta}</p>
                                    <div>
                                    <p>Días restantes....XXX restar hoy - ultimo pago</p>
                                    <button>Pagar</buttton>
                                    </div>`
                    lista.append(li)
                })
            })
    }

    //por eso una que una API tiene siempre un protocolo y una documentacion clara de las posibilidades


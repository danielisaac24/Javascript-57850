function filtrarAlumnos() {
    let filtro = document.getElementById("filtro-nombre").value;
    fetch('../alumnos.json')
        .then((res) => res.json())
        .then((data) => {
            let alumnosf = data;
            let alumnosFiltrados = alumnosf.filter((alumno) => {
                return alumno.cliente.toLowerCase().includes(filtro.toLowerCase());
            });
            let tabla = document.getElementById("filas");
            tabla.innerHTML = "";
            for (const item of alumnosFiltrados) {
                let filaActual = tabla.insertRow();
                for (const valor in item) {
                    let celda = filaActual.insertCell();
                    celda.innerHTML = item[valor];
                }
            }
        })
}

function actualizarLista() {
    let tabla = document.getElementById("filas");
    tabla.innerHTML = "";
    fetch('../alumnos.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((cliente) => {
                let filaActual = tabla.insertRow();
                for (const valor in cliente) {
                    let celda = filaActual.insertCell();
                    celda.innerHTML = cliente[valor];
                }
                let celdaBoton = filaActual.insertCell();
                let botonPagar = document.createElement('button');
                botonPagar.textContent = 'Pagar';
                botonPagar.addEventListener('click', function () {
                    pagar(cliente.id); 
                });
                celdaBoton.appendChild(botonPagar);
            })
        })
}

function pagar(clienteId) {
    let fechaPago = new Date();
    const fechaISO = fechaPago.toISOString();
    localStorage.setItem('pago'+clienteId, fechaISO)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Pago Realizado',
        showConfirmButton: false,
        timer: 2000
    });
}

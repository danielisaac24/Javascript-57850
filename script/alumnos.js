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
        .catch((error) => {
            console.error('Error al cargar el archivo JSON:', error);
        });
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
                    let celda1 = filaActual.insertCell();
                    celda1.innerHTML = cliente[valor];
                }
            })
        })
}

document.getElementById("fetch").addEventListener("click", fetchP)
function fetchP() {
                const lista = document.querySelector('#respuesta')
                fetch('../alumnos.json')
                    .then((res) => res.json())
                    .then((data) => {
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




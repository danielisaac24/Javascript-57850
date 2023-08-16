
function ingresar() {
    const lista = document.getElementById('respuesta')
    lista.innerHTML = '';
    let keypass = document.getElementById("keypass").value;
    fetch('../alumnos.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((cliente) => {

                if (keypass == cliente.id) {
                    const semana = JSON.parse(localStorage.getItem(cliente.cliente));
                    const lista = document.getElementById('respuesta')
                    const li = document.createElement('li')
                    li.innerHTML = `
                        Nombre: ${cliente.cliente}<br>
                        Lunes: ${semana.lunes}<br>
                        Martes: ${semana.martes}<br>
                        Miércoles: ${semana.miercoles}<br>
                        Jueves: ${semana.jueves}<br>
                        Viernes: ${semana.viernes}
                    `;

                    lista.appendChild(li);
                }
            })
        })
}

let input1 = document.getElementById("keypass")
input1.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        ingresar();
    }
})




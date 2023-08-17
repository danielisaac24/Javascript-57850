
function ingresar() {
    const listaInformacion = document.getElementById('actividades-semanales');
    listaInformacion.innerHTML = '';
    const listaMensualidad = document.getElementById('mensualidad');
    listaMensualidad.innerHTML = '';
    let keypass = document.getElementById("keypass").value;
    let alumnoEncontrado = false;

    fetch('../alumnos.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((cliente) => {
                if (keypass == cliente.id) {
                    alumnoEncontrado = true;
                    let mes = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
                    let fechaGuardada = localStorage.getItem('pago' + cliente.id);
                    let diasRestantes;

                    if (fechaGuardada !== null) {
                        let fechaPago = new Date(fechaGuardada);
                        let fechaActual = new Date();

                        let d1 = fechaPago.getDate();
                        let m1 = fechaPago.getMonth();
                        let d2 = fechaActual.getDate();
                        let m2 = fechaActual.getMonth();

                        if (m1 === m2) {
                            diasRestantes = d1 > d2 ? mes[ m1 ] - (d1 - d2) : mes[ m1 ] - (d2 - d1);
                        } else {
                            diasRestantes = d1 > d2 ? (mes[ m1 ] - d2) - (mes[ m1 ] - d1) : 0;
                        }
                        const semana = JSON.parse(localStorage.getItem(cliente.cliente));
                        if (semana) {
                            const li = document.createElement('li');
                            const p = document.createElement('p');
                            const tituloH2 = document.getElementById('actividades-semanales');
                            const h2 = document.createElement('h2');
                            tituloH2.appendChild(h2);
                            const tituloH2Mensualidad = document.getElementById('mensualidad');
                            const h2M = document.createElement('h2');
                            tituloH2Mensualidad.appendChild(h2M);
                            h2.innerHTML = 'Actividades Semanales';
                            li.innerHTML = `
                            Nombre: ${cliente.cliente}<br>
                            Lunes: ${semana.lunes}<br>
                            Martes: ${semana.martes}<br>
                            Miércoles: ${semana.miercoles}<br>
                            Jueves: ${semana.jueves}<br>
                            Viernes: ${semana.viernes}
                        `;

                            tituloH2Mensualidad.appendChild(h2M);
                            listaInformacion.appendChild(li);
                            h2M.innerHTML = 'Abono Mensual';
                            listaMensualidad.appendChild(p);
                            p.innerHTML = `Restan ${diasRestantes} días de tu mensualidad`;
                        } else {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Inscribete en actividades semanales.',
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    } else {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Realiza el pago de tu Mensualidad',
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }

                }
            });

            if (!alumnoEncontrado) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No eres alumno de FIT LIFE',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        });
}

let input1 = document.getElementById("keypass");
input1.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        ingresar();
    }
});

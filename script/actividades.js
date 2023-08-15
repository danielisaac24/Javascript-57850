class actividadesSemanales {
    constructor(nombre, lunes, martes, miercoles, jueves, viernes) {
        this.nombre = nombre;
        this.lunes = lunes;
        this.martes = martes;
        this.miercoles = miercoles;
        this.jueves = jueves;
        this.viernes = viernes;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("guardar-actividades").addEventListener("click", function () {
        const lunes = document.getElementById("actividad-lunes").value;
        const martes = document.getElementById("actividad-martes").value;
        const miercoles = document.getElementById("actividad-miercoles").value;
        const jueves = document.getElementById("actividad-jueves").value;
        const viernes = document.getElementById("actividad-viernes").value;

        let keypass = document.getElementById("keypass").value;
        fetch('../alumnos.json')
            .then((res) => res.json())
            .then((data) => {
                data.forEach((cliente) => {
                    if (keypass == cliente.id) {
                        let semana = new actividadesSemanales(cliente.cliente, lunes, martes, miercoles, jueves, viernes);
                        localStorage.setItem(cliente.cliente, JSON.stringify(semana));
                    }else {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'No eres alumno de FIT LIFE',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
                });
            });
    });
});

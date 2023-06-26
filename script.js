
function ingresar() {
    let respuesta = window.prompt("BIENVENIDOS A FIT LIFE GIMNASIO\nDesea inscribirse a una activiad. seleccion su respuedsta por SI O NO");

    // while (respuesta != "si" || respuesta != "SI" || respuesta != "Si" && respuesta != "no" || respuesta != "No" || respuesta != "No") {
    while (respuesta != "si" && respuesta != "SI" && respuesta != "Si" && respuesta != "no" && respuesta != "NO" && respuesta != "No") {
        window.alert("Respuesta mal ingresada. Ingrese nuevamente");
        respuesta = window.prompt("Selecciones su respuesta por SI O NO");
    }
    if (respuesta == "si" || respuesta == "SI" || respuesta == "Si") {
        let actividad = window.prompt("Seleciones el valor de la actividad a la que desea inscribirsee: Musculacion=1 Funcional=2 Crossfit=3 Boxeo=4");
        while (actividad != "1" && actividad != "2" && actividad != "3" && actividad != "4") {
            window.alert("Ingrese un valor correcto")
            actividad = window.prompt("Seleciones el valor de la actividad a la que desea inscribirsee: Musculacion=1 Funcional=2 Crossfit=3 Boxeo=4");
        }

        switch (actividad) {
            case '1':
                document.getElementById('ingresar').innerHTML = 'Te inscribiste a MUSCULACION con el profesore Felipe los dias miercoles y virenes';
                break;
            case '2':
                document.getElementById('ingresar').innerHTML = 'Te inscribiste a FUNCIONAL con el profesore Carlos los dias Martes y Jueves';
                break
            case '3':
                document.getElementById('ingresar').innerHTML = 'Te inscribiste a CROSSFIT con la profesora Alina los dias Lunes, Miercoles y Viernes';
                break
            case '4':
                document.getElementById('ingresar').innerHTML = 'Te inscribiste a BOXEO con el profesore Juan los dias Martes, Jueves y Sabados';
                break
        }
    } else {
        window.alert("Gracias por visitarnos")
    }

}

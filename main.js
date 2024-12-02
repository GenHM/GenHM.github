var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora FrontEnd Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Resuelve el problema, después sé feliz!')
    .pauseFor(2500)
    //Cantidad de caracteres a borrar
    .deleteChars(9)
    .typeString('<strong>programa!</strong>')
    .pauseFor(2500)
    .start();


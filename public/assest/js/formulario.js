const formulario = document.querySelector('#miFormulario');

const procesaTodo = (event) =>{
    event.preventDefault();
    const datos = new FormData(event.target);

    const nombreApellido = datos.get('nombre_apellido');
    const correo = datos.get('correo');
    const consulta = datos.get('consulta');
    console.log({nombreApellido,correo,consulta});

}

formulario.addEventListener('submit', procesaTodo);
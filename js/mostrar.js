(function(){

    const tituloDispositivo = [...document.querySelectorAll('.subtitulo_dispositivo')];

    console.log(tituloDispositivo);

    tituloDispositivo.forEach(dispositivo =>{
        dispositivo.addEventListener('click', ()=>{
            let height = 0;
            let listado = dispositivo.nextElementSibling;
            let addPading = dispositivo.parentElement.parentElement;

            addPading.classList.toggle('dispositivo_padding--add');

            dispositivo.children[0].classList.toggle('dispositivo_arrow--rotate');

            if(listado.clientHeight === 0){
                height = listado.scrollHeight;
            }

            listado.style.height = `${height}px`;
        });
    });
    

})();
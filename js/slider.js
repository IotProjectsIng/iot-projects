(function(){
    const sliders = [...document.querySelectorAll('.serviocios_iot_body')];

    const botonSiguiente = document.querySelector('#next');

    const botonAntes = document.querySelector('#before');

    let value;

    botonSiguiente.addEventListener('click', ()=>{
        changePosition(1)
    })

    botonAntes.addEventListener('click', ()=>{
        changePosition(-1)
    })

    const changePosition = (add)=> {
        const currentServicio = document.querySelector('.servicios_iot_body--show').dataset.id;

        value = Number(currentServicio);

        value+= add;

        sliders[Number(currentServicio)-1].classList.remove('servicios_iot_body--show');

        if(value === sliders.length+1 || value === 0){
            value = value ===0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('servicios_iot_body--show');
    }

})();
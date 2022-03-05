const img = document.querySelector('#img');
const buttons = document.querySelector('#buttons')
let coloresIndex = 0;
let intervalID = null;

const trafficLight = ( event ) => {
    stopAuto();
    turnOn[event.target.id]()
    
}

const nextIndex  = () =>{
    coloresIndex = coloresIndex < 2 ? ++coloresIndex : 0;

    // if(coloresIndex<2){
    //     coloresIndex++
    // }else{
    //     coloresIndex = 0
    // }
} 

const stopAuto = () => {
    clearInterval( intervalID );
}

const changeColor = () =>{
    const colores = ['red','green','yellow']
    const color = colores[coloresIndex];
    turnOn[color]();
    nextIndex()
}

const turnOn = {
    'red':      () => img.src  ='./vermelho.png',
    'yellow':   () => img.src  = './amarelo.png',
    'green':    () => img.src  = './verde.png',
    'auto':     () => intervalID = setInterval(changeColor,1000 )
}

buttons.addEventListener('click', trafficLight);


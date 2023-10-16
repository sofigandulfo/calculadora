
import Display from "./Display.js";





const keys = document.querySelectorAll('button');
const pantalla = document.getElementById('display');

const display = new Display(pantalla);


let numeroAnterior = '';
    let numeroActual = '';
    let operadorActivo = '';



function removeActiveClass(key) {
    keys.forEach((key) => key.classList.remove('active'));
}



keys.forEach((key) => key.addEventListener('click', () => {
    const contenido = key.textContent;
    
    // <-- NÚMEROS -->
    if (key.classList.contains('num')) {
        console.log('tecla num')

        display.mostrar(contenido);

    }

    // <-- OPERADORES -->
    else if (key.classList.contains('operador')) {
        // console.log('tecla operador');
        
        // display.actualizarDisplay()

        if (operadorActivo) {
            removeActiveClass();
        }
        key.classList.add('active');
        operadorActivo = contenido;

        display.actualizarDisplay();

        // if (key.textContent == '+') {       //    SUMA
        //     key.classList.add('active');
        //     operador = contenido;
        //     // operador.sumar(numeroAnterior, numeroActual);
        //     // operador.resultado(result);

        // }
        // else if (key.textContent == '-') { //    RESTA
        //     key.classList.add('active');
        //     operador = contenido;
        //     // operador.restar(numeroAnterior, numeroActual);

        //     // operador.resultado(result);

        // }
        // else if (key.textContent == 'X') { //    MULTIPLICACIÓN
        //     key.classList.add('active');
        //     operador = contenido;
        //     // operador.multiplicar(numeroAnterior, numeroActual);

        //     // operador.resultado(result);

        // }
        // else {                            //    DIVISIÓN   
        //     key.classList.add('active');
        //     operador = contenido;
        //     // operador.dividir(numeroAnterior, numeroActual);

        //     // operador.resultado(result);

        // }


    }

    // <-- DECIMAL -->
    else if (key.classList.contains('decimal')) {
        console.log('tecla decimal');

        if (pantalla.textContent.includes('.')) {
            console.log('ya es un decimal')
        }
        else {
            display.mostrar(contenido);

        }
    }

    // <-- BORRAR -->
    else if (key.classList.contains('borrar')) {
        console.log('tecla borrar');
        removeActiveClass(key);
        display.borrar();
        pantalla.textContent = '0';
    }

    // <-- IGUAL -->
    else if (key.classList.contains('igual')) {
        numeroActual = pantalla.textContent;
        console.log('numero anterior: ' + display.numeroAnterior)
        console.log('numero Actual: ' + numeroActual);
        let resultado = 0;
        console.log(operadorActivo);
        if (display.numeroAnterior && numeroActual && operadorActivo) {
            switch (operadorActivo) {
                case '+':
                    resultado = parseFloat(display.numeroAnterior) + parseFloat(numeroActual);
                    pantalla.textContent = resultado;
                    break;
                case '-':
                    resultado = parseFloat(display.numeroAnterior) - parseFloat(numeroActual);
                    pantalla.textContent = resultado;
                    break;
                case 'X':
                    resultado = parseFloat(display.numeroAnterior) * parseFloat(numeroActual);
                    pantalla.textContent = resultado;
                    break;
                case '/':
                    resultado = parseFloat(display.numeroAnterior) / parseFloat(numeroActual);
                    pantalla.textContent = resultado;
                    break;
            }
            
    
        }
            // {
                //numeroActual = pantalla.textContent;
            // console.log('numero Anterior: ' + display.numeroAnterior);
            // console.log('numero Actual: ' + numeroActual);
            // let resultado = 0;



            // switch (key.classList.contains('operador') && key.classList.contains('active')) {
            //     case key.textContent === '+':
            //         resultado = parseFloat(display.numeroAnterior) + parseFloat(numeroActual);
            //         pantalla.textContent = resultado;
            //         console.log('suma')
            //         break;

            //     case key.textContent === '-':
            //         resultado = parseFloat(display.numeroAnterior) - parseFloat(numeroActual);
            //         pantalla.textContent= resultado;
            //         console.log('resta')
            //         break;
            //     case key.classList.contains('active') && key.textContent === '*':
            //         resultado =parseFloat(display.numeroAnterior) * parseFloat(numeroActual);
            //         pantalla.textContent= resultado;

            //         break;

            //     case key.classList.contains('active') && key.textContent === '/':
            //         resultado = parseFloat(display.numeroAnterior) / parseFloat(numeroActual);
            //         pantalla.textContent= resultado;

            //         break;

            //     default:
            //         break;
            // }



        
    }
}));


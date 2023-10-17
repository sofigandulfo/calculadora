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
        try {   // Manejo de errores, acá si falta alguno de estos datos para realizar la operación
            if (!display.numeroAnterior || !numeroActual || !operadorActivo) {
                throw new Error('Faltan datos para la operación');
            }
            // Operaciones matemáticas
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
                case '/': // Manejo de errores, para que no se pueda dividir por 0
                    if (parseFloat(numeroActual) === 0) {
                        throw new Error('No se puede dividir por 0')
                    }
                    resultado = parseFloat(display.numeroAnterior) / parseFloat(numeroActual);
                    pantalla.textContent = resultado;
                    break;

                default:
                    throw new Error('Operador no válido')
            }
            numeroAnterior = resultado;
            numeroActual = '';
            operadorActivo = removeActiveClass();
            // Dice cuál es el error
        } catch (error) {
            pantalla.textContent = 'Error: ' + error.message;
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

}))

document.addEventListener('keydown', (event) => {
    const teclaPresionada = event.key
    const teclaCodigo = event.code;
    const teclasNumericas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']



    if (teclaCodigo === 'NumpadAdd' || teclaPresionada === '+') {
        //Si la tecla presionada es el +, simulamos el clic en el boton (+)
        const sumaButton = document.getElementById('suma')
        sumaButton.click();
    }
    else if (teclaCodigo === 'NumpadSubtact' || teclaPresionada === '-') {
        //Si la tecla presionada es el -, simulamos el clic en el boton (-)
        const restaButton = document.getElementById('resta')
        restaButton.click();
    }
    else if (teclaCodigo === 'NumpadMultiply' || teclaPresionada === '*') {
        //Si la tecla presionada es el *, simulamos el clic en el boton (*)
        const mulplicarButton = document.getElementById('multiplicacion')
        mulplicarButton.click()
    }
    else if (teclaCodigo === 'NumpadDivide' || teclaPresionada === '/') {
        //Si la tecla presionada es el /, simulamos el clic en el boton (/)
        const dividirButton = document.getElementById('division')
        dividirButton.click()
    }
    else if (teclasNumericas.includes(teclaPresionada) || event.code === 'NumpadDecimal') {
        // Si la tecla presionada es un número o un punto decimal, lo agregamos a la pantalla.
        display.mostrar(teclaPresionada);
    }
    else if (teclaPresionada === 'Enter' || teclaPresionada === '=') {
        // Si se presiona Enter o el signo igual, simula un clic en el botón de igual (=).
        const igualButton = document.querySelector('.igual');
        igualButton.click();
    }
    else if (teclaPresionada === 'Backspace') {
        // Si se presiona la tecla de retroceso (Backspace), simula un clic en el botón de borrar (borrar).
        const borrarButton = document.querySelector('.borrar');
        borrarButton.click();
    }
})

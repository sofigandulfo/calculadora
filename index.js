// import Display from "./Display.js";
// import Operador from "./Operador.js";

// const display = new Display(document.getElementById('display'));
// const operador = new Operador(display);

// function calcularResultado(){
//     const numeroAnterior = operador.numeroAnterior;
//     const numeroActual = operador.numeroActual;
//     const operadorSeleccionado = display.operadorSeleccionado


//     let resultado;
//     switch (operadorSeleccionado){
//         case '+': 
//             resultado = numeroAnterior + numeroActual;
//         break;
        
//         case '-':
//             resultado = numeroAnterior - numeroActual;
//         break;

//         case '*':
//             resultado = numeroAnterior * numeroActual;
//         break;

//         case '/':
//             resultado = numeroAnterior / numeroActual;
//         break;
//         default:
//             resultado = 0;
//     }

//     return resultado;
// }

// function actualizarPantalla(resultado){
//     display.textContent = parseFloat(resultado);
// }

// document.querySelectorAll('button').forEach((button) => {
//     button.addEventListener('click', () =>{
//         const contenido = button.textContent;

//         if(!isNaN(contenido)){
//             display.mostrar(contenido);
//         }

//         else if (contenido === '+' || contenido === '-' || contenido === '*' || contenido === '/'){
//             display.operadorSeleccionado = contenido;
//             display.actualizarDisplay(display.numeroActual, contenido);
//             calcularResultado();
//         }

//         else if(contenido === '='){
//             const resultado = calcularResultado();
//             actualizarPantalla(resultado)
//         }

//         else if(contenido === 'AC'){
//             display.borrar();
//         }
//     })
// })
import Display from "./Display.js";

class Operador {
    //Propiedades
    constructor(pantalla){
        this.display = new Display(pantalla);
        this.resultadoCalculado = 0;
    }
     
    //Metodos
    sumar(numeroAnterior, numeroActual){
        console.log('SUMA');
        this.resultadoCalculado = parseFloat(numeroAnterior) + parseFloat(numeroActual);
    }
    
    restar(numeroAnterior, numeroActual){
        console.log('RESTA');
        this.resultadoCalculado = numeroAnterior - numeroActual;
        
    }
    
    multiplicar(numeroAnterior, numeroActual){
        console.log('MULTIPLICACION');
        this.resultadoCalculado = numeroAnterior * numeroActual;
        
    }

    dividir(numeroAnterior, numeroActual){
        console.log('DIVISION');
        this.resultadoCalculado = numeroAnterior / numeroActual;
        
    }

    
        obtenerResultado() {
                this.display.mostrarResultado(this.resultadoCalculado);

    }
}

export default Operador;
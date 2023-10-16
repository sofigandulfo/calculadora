
class Display {
    constructor(pantalla){
        this.display = pantalla;
        this.numeroAnterior = '';
        this.numeroActual = '';  
    }

    mostrar(contenido){
        console.log(contenido)
        if(this.display.textContent === '0'){
            this.display.textContent = '';
            this.display.textContent += contenido;
            }
         else{
            this.display.textContent += contenido;
        }

        }

        actualizarDisplay(){
            console.log('pantalla actualizada');
            this.numeroAnterior = this.display.textContent;
            console.log('numero anterior: ' + this.numeroAnterior);
            this.display.textContent = '0';
            }
    borrar(){
        this.numeroAnterior = '';
        this.numeroActual = '';
        this.display.textContent = '';
    }

    mostrarResultado(){
       
        
    }
    }
        

export default Display;


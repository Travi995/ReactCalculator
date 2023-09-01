import { Historial, guardaroperacion } from '../historial/historial'
import './button.css'

let resultado = '0'
let btnOperacion = ''
let operacion = {}

export const Buttoncalc = ({ text }) => {

    return <button className='Buttoncalc' value={text} onClick={handlerEvents}>
        {text}
    </button>
}

const handlerEvents = (arg) => {
    let elemento = arg.target
    let cajaTexto = document.getElementById('entrada')

    if (isNaN(Number(elemento.value))) {
        switch (elemento.value) {
            case 'AC':
                cajaTexto.value = '0'
                resultado = '0'
                operacion = {}
                break;
            
            case 'HL':
                
                console.log('el historial se esta ejecutando')
                return    
            
                break;

            default:
                
                

                if (resultado === '0') {
                    resultado = document.getElementById('entrada').value
                    operacion.firstElement = resultado
                }

                if (elemento.value !== '=') {
                    
                    console.log('el elemento guardado en btnOperacion es :' +elemento.value)
                    btnOperacion = elemento.value
                    operacion.operation = btnOperacion
                    cajaTexto.value = ''
        
                    return
                } else {
        
                    operacion.secondElement = cajaTexto.value
                }
                
                break;
        }
    
    } else if (typeof (Number(elemento.value)) === 'number') {
        if (cajaTexto.value === '0') {
            cajaTexto.value = elemento.value
        } else {
            cajaTexto.value += elemento.value
            return
        }
    }

    /* if (isNaN(Number(elemento.value))) {
         if (resultado === '0') {
             resultado = document.getElementById('entrada').value
             operacion.firstElement = resultado
         }
 
         if (elemento.value === 'AC') {
             cajaTexto.value = '0'
             resultado = '0'
             operacion = {}
         }
 
         if (elemento.value !== '=') {
             btnOperacion = elemento.value
             operacion.operation = btnOperacion
             cajaTexto.value = ''
 
             return
         } else {
 
             operacion.secondElement = cajaTexto.value
         }
     }
 
     else if (typeof (Number(elemento.value)) === 'number') {
         if (cajaTexto.value === '0') {
             cajaTexto.value = elemento.value
         } else {
             cajaTexto.value += elemento.value
             return
         }
     }
 
     */

    
    console.log( resultado + ' ' + cajaTexto.value + ' ' + btnOperacion)
    switch (btnOperacion) {
        case '+':
            alert('el case + se esta ejecutando')
            operacion.result = Number(resultado) + Number(cajaTexto.value)
            cajaTexto.value = operacion.result

            guardaroperacion(operacion)
            resultado = '0'
            break;

        case '-':
            operacion.result = Number(resultado) - Number(cajaTexto.value)
            cajaTexto.value = operacion.result
            guardaroperacion(operacion)
            resultado = '0'
            break;

        case '*':
            operacion.result = Number(resultado) * Number(cajaTexto.value)
            cajaTexto.value = operacion.result
            guardaroperacion(operacion)
            resultado = '0'
            break;

        case '/':
            operacion.result = Number(resultado) / Number(cajaTexto.value)
            cajaTexto.value = operacion.result
            guardaroperacion(operacion)
            resultado = '0'
            break;
        case '%':
            operacion.result = Number(resultado) % Number(cajaTexto.value)
            cajaTexto.value = operacion.result
            guardaroperacion(operacion)
            resultado = '0'
            break;

        case ',':
            cajaTexto.value += ','

            break;
    
        default:
            console.log('no hay Operacion k ejecutar')
            break;
    }


}
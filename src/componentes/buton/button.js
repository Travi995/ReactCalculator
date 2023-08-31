import './button.css'

let resultado = '0'


let operacion = ''

export const Buttoncalc = ({ text }) => {

    return <button className='Buttoncalc' value={text} onClick={handlerEvents}>
        {text}
    </button>
}

const handlerEvents = (arg) => {
    let elemento = arg.target
    let cajaTexto = document.getElementById('entrada')
    



    if (isNaN(Number(elemento.value))) {
        if (resultado === '0') {
            resultado = document.getElementById('entrada').value
        }
        
        if (elemento.value === 'AC') {
            cajaTexto.value = '0'
            resultado ='0'
        }

        if (elemento.value !== '=') {
            operacion = elemento.value
            cajaTexto.value = ''
            
            return
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

    
    switch (operacion) {
        case '+':
            console.log(resultado)
            cajaTexto.value = Number(resultado) + Number(cajaTexto.value)
            resultado = '0'
            break;
        
        case '-':
            cajaTexto.value = Number(resultado) - Number(cajaTexto.value)
            resultado ='0'
            break;
        
        case '*':
            cajaTexto.value = Number(resultado) * Number(cajaTexto.value)
            resultado ='0'
            break;
        
        case '/':
            cajaTexto.value = Number(resultado) / Number(cajaTexto.value)
            resultado ='0'
            break;
        case '%':
            cajaTexto.value = Number(resultado) % Number(cajaTexto.value)
            resultado ='0'
            break;
        
        case ',':
            cajaTexto.value += ','
            
            break;
        





        default:
            console.log('no hay operacion k ejecutar')
            break;
    }
    

}
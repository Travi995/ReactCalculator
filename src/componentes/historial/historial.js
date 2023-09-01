
import { useState } from 'react'
import './historial.css'

let operationsTotal = []
export const Historial = () => {
    
    alert('el componente historial se esta ajecutando')
    return <div id='historial'>
        {operationsTotal.forEach(element => {
            <section className='operacion'>
                <span>{ element.firstElement}</span>
                <span>{ element.operation }</span>
                <span>{ element.secondElement}</span>
                <span>=</span>
                <span>{ element.result}</span>   
        </section>
        })}   
        <button id='btnClose'>Cerrar</button>
     </div>
}


export const guardaroperacion = ({ firstElement, operation, secondElement , result}) => operationsTotal.push( firstElement + operation + secondElement + ' = ' + result)
    

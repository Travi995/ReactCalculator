import './cuerpo.css'
import { Inputcalc } from './../input/input'
import {Buttoncalc} from './../buton/button'


export const Cuerpo = () => {
    
    return <div className='cuerpo'>
        
    <Cuerpocalc/>
    </div>
}

const Cuerpocalc = () => {
    
    return <div id='calculadora'>
        <Inputcalc />
        <Conjuntobotones/>
    </div>
}

const Conjuntobotones = () => {
     
    return <div className='Conjbtns'>

        <Buttoncalc text='1' />
        <Buttoncalc text='2' />
        <Buttoncalc text='3' />
        <Buttoncalc text='+' />
        <Buttoncalc text='-' />
        <Buttoncalc text='4' />
        <Buttoncalc text='5' />
        <Buttoncalc text='6' />
        <Buttoncalc text='*' />
        <Buttoncalc text='/' />
        <Buttoncalc text='7' />
        <Buttoncalc text='8' />
        <Buttoncalc text='9' />
        <Buttoncalc text='%' />
        <Buttoncalc text='=' />
        <Buttoncalc text='0' />
        <Buttoncalc text=',' />
        <Buttoncalc text='00' />
        <Buttoncalc text='AC' />

    </div>
}


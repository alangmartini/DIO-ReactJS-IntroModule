import React from "react";
import Botao from './Components/Botao';


function isClicked() {
    alert('You clicked the button, so naughty')
};
const isChanged = (event: any) => {
    const { value } = event.target;
    console.log(value)

}

function Teste () {
    
   

    return (
        <div className="teste">
            <Botao />
            <input onChange={isChanged} />
            
        </div>
    )
}


export default Teste;

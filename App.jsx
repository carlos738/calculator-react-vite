import { useState } from "react";
import Input from '/components/Input/Input';
import Button from './src/components/Button/Button';


const App =()=>{
    const[inputValue,setInputValue] = useState('');
    const[result,setResult] = useState(null);

    const[operation,setOperation] = useState('add');


    const calcular =()=>{
        const numero = parseFloat(inputValue);
        if (!isNaN(numero)) {
            let resultado;

            switch(operation){
                case 'add':
                    resultado = numero+1;
                    break;
                case 'subtract':
                    resultado = numero-1;
                    break;
                case 'multiply':
                    resultado = numero*2;
                    break;
                case 'divide':
                    resultado = numero/2;
                    break;
                case 'percentage':    
                    resultado = numero*0.1;
                    break;
                default:
                    resultado = numero;        

            }
            setResult(resultado);
            
        }else{
            alert("Por favor digite um numero válido: ");
        }
    };
    return(
        <div style={{padding:'20px'}}>
            <h1>Calculadora Simples</h1>
            <Input 
              value={inputValue}
              onChange={(e)=> setInputValue(e.target.value)}
              placeholder="Digite um número:"
                
            />
            {/**botões para selecionar a operação */}
            <Button label="Adicionar" onClick={()=> setOperation('add')}/>
            <Button label="Adicionar" onClick={()=> setOperation('subtract')}/>
            <Button label="Adicionar" onClick={()=> setOperation('multiply')}/>
            <Button label="Adicionar" onClick={()=> setOperation('divide')}/>
            <Button label="Adicionar" onClick={()=> setOperation('percentage')}/>

            <Button label="Calcular" onClick={calcular}/>

            {result !== null && <h2>Resultado: {result}</h2>}
        </div>
    );
};
export default App;
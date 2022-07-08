import { useState } from "react";
import ButtonNumber from "../../components/ButtonNumber";
import DisplayResults from "../../components/DisplayResults";
import ModalCalculator from "../../components/ModalCalculator";
import { Container } from "./styles";

export default function calculator() {
  const [results, setResult] = useState(0);
  const [aux, setAux] = useState(0); 
  const [operationLogics, setOperationLogics] = useState("");
  const [operation, setOperation] = useState(0);
  const [historic, setHistoric] = useState('')


  function isOperation(value:string) {
    switch (value) {
      case '+': return true;
      case '-': return true;
      case '/': return true;
      case 'X': return true;
      case '=': return true;
      case '.': return true;
      default: return false;      
    }
  }

  function handleHistoric(value:string){
    const endElement = (historic.length-1)
    if(value != historic[endElement]){      
      setHistoric(historic + value)      
    } else if(!isOperation(value)) {
      setHistoric(historic + value)      
    }
  }

  function handleInputNumber(e: any) {
    var input = e.target.value;
    if (results === 0) {
      setResult(input);
      handleHistoric(input)
    }else {
      setResult(results + input);
      handleHistoric(input)
    }
  }

  function handleResetResults(){
    setResult(0);
    setAux(0);
    setOperationLogics("");
    setOperation(0);
    setHistoric('')
  }

  function handleSetOperationLogics(e: any) {
    setAux(results);
    setOperationLogics(e.target.value);
    setResult(0)
    handleHistoric(e.target.value)    
  }

  function handleCalculation(){    
    if(operationLogics === "-"){
      setResult(parseFloat(aux.toString()) - parseFloat(results.toString()))
    }else if(operationLogics === "+"){
      setResult(parseFloat(aux.toString()) + parseFloat(results.toString()))
    }else if(operationLogics === "/"){
      setResult(parseFloat(aux.toString()) / parseFloat(results.toString()))
    }else if(operationLogics === "X"){
      setResult(parseFloat(aux.toString()) * parseFloat(results.toString()))
    } else handleHistoric("=")
  }

  return (
    <ModalCalculator>
      <Container>
        <DisplayResults results={results} historic={historic} />
        <main>
          <div className="operationNumber">
            <ButtonNumber value={"7"} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"8"} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"9"} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"4"} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"5"} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"6"} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"1"} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"2"} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"3"} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"0"} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"."} isOperation={false} onClick={handleInputNumber} />
            <ButtonNumber value={"C"} isOperation onClick={handleResetResults} />
          </div>
          <div className="operationLogics">
            <ButtonNumber value={"/"} isOperation onClick={handleSetOperationLogics} />
            <ButtonNumber value={"X"} isOperation onClick={handleSetOperationLogics} />
            <ButtonNumber value={"-"} isOperation onClick={handleSetOperationLogics} />
            <ButtonNumber value={"+"} isOperation onClick={handleSetOperationLogics} />
            <ButtonNumber value={"="} isOperation onClick={handleCalculation} />
          </div>
        </main>
      </Container>
    </ModalCalculator>
  );
}

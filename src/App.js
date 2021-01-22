import './App.css';
import Title from "./componets/title";
import Subtitle from "./componets/subtitle";
import Button from "./componets/buttons";
import Simdetails from './componets/simdetails';

const numberOfSims = [2, 3, 4, 5];


function App() {
  return (
    <div className="app">
      <div className="card">
        <Title Title='How many SIMs do you need?'/>
        <Subtitle Subtitle="Each extra SIM has a 20% discout"/>
        <Button clickHandler={buttonOnClick} label={numberOfSims}/>
      </div>
      <Simdetails />
    </div>
  );
}
function buttonOnClick(e) {
  console.log("button click : ", e.target.innerText);
}

export default App;
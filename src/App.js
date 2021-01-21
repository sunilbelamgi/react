import './App.css';
import Title from "./componets/title";
import Subtitle from "./componets/subtitle";
import Button from "./componets/buttons";

function App() {
  return (
    <div className="app">
      <div className="card">
        <Title Title='How many SIMs do you need?'/>
        <Subtitle Subtitle="Each extra SIM has a 20% discout"/>
        <div className="button_wrapper">
          <Button handleClick={buttonOnClick} label="2"/>
          <Button handleClick={buttonOnClick} label="3"/>
          <Button handleClick={buttonOnClick} label="4"/>
          <Button handleClick={buttonOnClick} label="5"/>
        </div>
      </div>
      <div className="sim_details">
        <Title Title='How much data would you like per SIM?'/>
        <div className="button_wrapper">
          <Button handleClick={buttonOnClick} label="1GB"/>
          <Button handleClick={buttonOnClick} label="6GB"/>
          <Button handleClick={buttonOnClick} label="15GB"/>
          <Button handleClick={buttonOnClick} label="40GB"/>
          <Button handleClick={buttonOnClick} label="60GB"/>
          <Button handleClick={buttonOnClick} label="100GB"/>
        </div>
      </div>

    </div>
  );
}
function buttonOnClick(e) {
  // Some function which does fake API call
  console.log("button click : ", e.target.innerText);
}

export default App;
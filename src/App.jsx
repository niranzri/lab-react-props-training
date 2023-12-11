import "./App.css";
import IdCard from "./components/IdCard.jsx";
import Greetings from "./components/Greetings.jsx"
import Random from "./components/Random.jsx"
import BoxColor from "./components/BoxColor.jsx"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Props Training </h1>
      <p className="title"> Iteration 1 </p>
      <IdCard 
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')} />
      <IdCard 
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')} />

      <p className="title"> Iteration 2 </p>
      <Greetings lang="de"> Ludwig </Greetings>
      <Greetings lang="fr"> François </Greetings>

      <p className="title">Iteration 3</p>
      <Random min={3} max={6}/>
      <Random min={1} max={100} />

      <p className="title">Iteration 4</p>
      <BoxColor r={255} g={0} b={0} text="white" />
      <BoxColor r={128} g={255} b={0} text="black" />  
    </div>
  );
}

export default App
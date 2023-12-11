import "./App.css";
import IdCard from "./components/IdCard.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training </h1>
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
    </div>
  );
}

export default App;

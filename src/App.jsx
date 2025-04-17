import "./App.css";
import IncreaseDecreaseCount from "./Components/IncreaseDecreaseCount/IncreaseDecreaseCount";
import MyCounter from "./Components/MyCounter/MyCounter";
import UseEffectForTitle from "./Components/UseEffectForTitle/UseEffectForTitle";

function App() {
  return (
    <>
      <MyCounter />
      <IncreaseDecreaseCount />
      <UseEffectForTitle />
    </>
  );
}

export default App;

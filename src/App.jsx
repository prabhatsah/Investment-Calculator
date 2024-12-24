import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  let isInvalidData = false;
  function handleChange(field, value) {
    if(field == )
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [field]: value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isInvalidData && <Content userInput={userInput} />}
    </>
  );
}

export default App;

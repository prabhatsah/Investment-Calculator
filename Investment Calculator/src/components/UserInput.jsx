import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    return: 6,
    duration: 10,
  });

  function handleChange(field, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [field]: value,
      };
    });
  }

  return (
    <>
      <div id="user-input">
        <div id="input-group">
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          />
        </div>
        <div id="input-group">
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          />
        </div>
        <div id="input-group">
          <label>Return</label>
          <input
            type="number"
            required
            onChange={(event) => handleChange("return", event.target.value)}
            value={userInput.return}
          />
        </div>
        <div id="input-group">
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) => handleChange("duration", event.target.value)}
            value={userInput.duration}
          />
        </div>
      </div>
    </>
  );
}

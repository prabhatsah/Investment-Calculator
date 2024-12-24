import { useState } from "react";

export default function UserInput({ userInput, onChange }) {
  return (
    <>
      <div id="user-input">
        <div id="input-group">
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("initialInvestment", parseInt(event.target.value))
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
              onChange("annualInvestment", parseInt(event.target.value))
            }
            value={userInput.annualInvestment}
          />
        </div>
        <div id="input-group">
          <label>Return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("return", parseInt(event.target.value))
            }
            value={userInput.expectedReturn}
          />
        </div>
        <div id="input-group">
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("duration", parseInt(event.target.value))
            }
            value={userInput.duration}
          />
        </div>
      </div>
    </>
  );
}

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    return: 6,
    duration: 10,
  });

  function handleChange() {}

  return (
    <>
      <div id="user-input">
        <div id="input-group">
          <label>Initial Investment</label>
          <input type="number" required />
        </div>
        <div id="input-group">
          <label>Annual Investment</label>
          <input type="number" required />
        </div>
        <div id="input-group">
          <label>Return</label>
          <input type="number" required />
        </div>
        <div id="input-group">
          <label>Duration</label>
          <input type="number" required />
        </div>
      </div>
    </>
  );
}

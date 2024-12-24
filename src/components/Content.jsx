import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Content({ userInput }) {
  let contentVal = calculateInvestmentResults(userInput);
  console.log(contentVal);
  let totalInterest = 0;
  let totalInvestment = userInput.initialInvestment;

  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {contentVal.map((eachValue, index) => {
          totalInterest += eachValue.interest;
          totalInvestment += eachValue.annualInvestment;

          return (
            <tr key={index}>
              <td>{eachValue.year}</td>
              <td>{formatter.format(eachValue.valueEndOfYear)}</td>
              <td>{formatter.format(eachValue.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

import investmentImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investmentImage} alt="Investment logo" />
      <h1>Investment calculator</h1>
    </header>
  );
}

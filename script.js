function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
  const months = parseInt(document.getElementById("months").value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(months)) {
    document.getElementById("result").innerText = "Please fill all fields correctly.";
    return;
  }

  const totalInterest = loanAmount * interestRate * months;
  const totalRepayment = loanAmount + totalInterest;
  const monthlyPayment = totalRepayment / months;

  document.getElementById("result").innerHTML = `
    <strong>Monthly Payment:</strong> UGX ${monthlyPayment.toFixed(2)}<br>
    <strong>Total Interest:</strong> UGX ${totalInterest.toFixed(2)}<br>
    <strong>Total Repayment:</strong> UGX ${totalRepayment.toFixed(2)}
  `;
}

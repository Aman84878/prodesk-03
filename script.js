
function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tip = parseFloat(document.getElementById("tip").value);

  if (!isNaN(bill) && !isNaN(tip)) {
    const total = bill + (bill * tip / 100);
    document.getElementById("total").textContent = "$" + total.toFixed(2);
  } else {
    alert("Please enter valid numbers in both fields.");
  }
}

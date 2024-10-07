console.log('In client.js')

let totalMonthlyCost = 0;


function submitForm() {
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let idNumber = document.querySelector("#idNumber").value;
  let jobTitle = document.querySelector("#jobTitle").value;
  let annualSalary = parseFloat(document.querySelector("#annualSalary").value);

  let monthly = annualSalary / 12;
  totalMonthlyCost += monthly;

  let tableBody = document.querySelector("#employeeTblbd");
  tableBody.innerHTML += `
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${idNumber}</td>
      <td>${jobTitle}</td>
      <td>${annualSalary}</td>
      <td><button onclick='deleteEmployee(event)'>Delete</button></td>
    </tr>`;

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("idNumber").value = "";
  document.getElementById("jobTitle").value = "";
  document.getElementById("annualSalary").value = "";
}

function deleteEmployee(event) {

  event.target.parentElement.parentElement.remove();


  updateFooter();
}

function updateFooter() {

  let footer = document.querySelector("#ft");
  footer.innerHTML = `Monthly Total: $ ${totalMonthlyCost}`;


  if (totalMonthlyCost > 20000) {
    footer.classList.add("over-budget");
  } else {
    footer.classList.remove("over-budget");
  }
}

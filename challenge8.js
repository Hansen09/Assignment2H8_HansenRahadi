let variables = [
  "Name",
  "Occupation",
  "Availability",
  "Age",
  "Location",
  "Experience",
  "Email",
];

function editForm() {
  const formEdit = document.getElementById("editForm");

  if (formEdit.classList.contains("hidden")) {
    formEdit.classList.remove("hidden");

    variables.forEach((value) => {
      //for querySelector, pake # untuk search by id only
      // pake [attribute="...."] untuk search by attribute
      document.querySelector(`[name=${value}]`).value = document.getElementById(
        `${value}`
      ).textContent;
    });
  } else {
    formEdit.classList.add("hidden");
  }
}

const submitForm = document.querySelector("#submitForm");

submitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(event.target);

  for (const [name, value] of data) {
    console.log(name);
    document.querySelector(`#${name}`).innerHTML = value;
  }

  document.getElementById("editForm").classList.add("hidden");
});

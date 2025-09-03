// Load navbar dynamically
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

// Load header dynamically
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Classes & subjects
const classes = ["প্রথম শ্রেণি", "দ্বিতীয় শ্রেণি", "তৃতীয় শ্রেণি", "চতুর্থ শ্রেণি", "পঞ্চম শ্রেণি"];
const subjects = ["বাংলা", "গণিত", "ইংরেজি"];
const container = document.getElementById("classes-container");

classes.forEach(cls => {
  const section = document.createElement("div");
  section.className = "class-section";

  const h2 = document.createElement("h2");
  h2.textContent = cls;
  section.appendChild(h2);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "subject-buttons";

  subjects.forEach(sub => {
    const btn = document.createElement("button");
    btn.textContent = sub;
    buttonsDiv.appendChild(btn);
  });

  section.appendChild(buttonsDiv);
  container.appendChild(section);
});

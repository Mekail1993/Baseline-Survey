// শ্রেণি এবং বিষয়সমূহ
const classes = [
  "প্রথম শ্রেণি",
  "দ্বিতীয় শ্রেণি",
  "তৃতীয় শ্রেণি",
  "চতুর্থ শ্রেণি",
  "পঞ্চম শ্রেণি"
];

const subjects = ["বাংলা", "গণিত", "ইংরেজি"];

// container নির্বাচন
const classesContainer = document.getElementById("classes-container");

// শ্রেণি এবং বাটন ডাইনামিকভাবে তৈরি করা
classes.forEach(className => {
  const classSection = document.createElement("div");
  classSection.className = "class-section";

  const h2 = document.createElement("h2");
  h2.textContent = className;
  classSection.appendChild(h2);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "subject-buttons";

  subjects.forEach(subject => {
    const button = document.createElement("button");
    button.textContent = subject;
    buttonContainer.appendChild(button);
  });

  classSection.appendChild(buttonContainer);
  classesContainer.appendChild(classSection);
});


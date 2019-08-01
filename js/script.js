const slider = document.getElementById("slider");
const social = document.getElementById("social");
const btnHomeA = document.getElementById("btn-home-a");
const btnHomeC = document.getElementById("btn-home-c");
const btnHomeS = document.getElementById("btn-home-s");

const btnAboutH = document.getElementById("btn-about-h");
const btnAboutC = document.getElementById("btn-about-c");
const btnAboutS = document.getElementById("btn-about-s");

const btnShowA = document.getElementById("btn-show-a");
const btnShowC = document.getElementById("btn-show-c");
const btnShowH = document.getElementById("btn-show-h");

const btnContactA = document.getElementById("btn-contact-a");
const btnContactH = document.getElementById("btn-contact-h");
const btnContactS = document.getElementById("btn-contact-s");

const contactDetail = document.getElementById("contact");
const controls = [
  document.getElementById("control-a"),
  document.getElementById("control-c"),
  document.getElementById("control-s")
];
const btnHome = document.getElementById("btn-home");
const header = document.getElementsByTagName("header")[0];

//social slider

if (social) {
  social.addEventListener("mouseover", event => {
    social.classList.remove("slide-left");
    social.classList.add("slide-right");
  });
}
if (social) {
  social.addEventListener("mouseout", event => {
    social.classList.remove("slide-right");
    social.classList.add("slide-left");
  });
}

//close and display home page
const closeMe = () => {
  console.log("hello");
  const mains = document.getElementsByTagName("main");
  for (let i = 0; i < mains.length; i++) {
    let detail = mains[i];

    detail.classList.remove("pull-up");
    detail.classList.add("pull-down");
    setTimeout(() => {
      detail.classList.remove("pull-down");
      detail.classList.add("hidden");
      header.classList.remove("hidden");
    }, 500);
  }
};

//close and display home page
const showSection = id => {
  const mains = document.getElementsByTagName("main");
  const target = document.getElementById(id);
  for (let i = 0; i < mains.length; i++) {
    let detail = mains[i];
    if (target === detail) {
      detail.classList.remove("hidden");
      detail.classList.remove("pull-down");
      detail.classList.add("pull-up");

      header.classList.add("hidden");
    } else {
      detail.classList.add("hidden");
    }
  }
};

//control buttons
controls.map(control => {
  if (control) control.addEventListener("click", closeMe);
});

//navigation on home page buttons

if (btnHomeA)
  btnHomeA.addEventListener("click", () => {
    showSection("about");
  });

if (btnHomeC)
  btnHomeC.addEventListener("click", () => {
    showSection("contact");
  });

if (btnHomeS)
  btnHomeS.addEventListener("click", () => {
    showSection("showcase");
  });

//navigation on about page buttons

if (btnAboutS)
  btnAboutS.addEventListener("click", () => {
    showSection("showcase");
  });

if (btnAboutC)
  btnAboutC.addEventListener("click", () => {
    showSection("contact");
  });

if (btnAboutH) btnAboutH.addEventListener("click", closeMe);
//navigation on showcase page buttons

if (btnShowA)
  btnShowA.addEventListener("click", () => {
    showSection("about");
  });

if (btnShowC)
  btnShowC.addEventListener("click", () => {
    showSection("contact");
  });

if (btnShowH) btnShowH.addEventListener("click", closeMe);

//navigation on showcase page buttons

if (btnContactA)
  btnContactA.addEventListener("click", () => {
    showSection("about");
  });

if (btnContactS)
  btnContactS.addEventListener("click", () => {
    showSection("showcase");
  });

if (btnContactH) btnContactH.addEventListener("click", closeMe);

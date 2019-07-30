const slider = document.getElementById("slider");
const social = document.getElementById("social");
const btnAbout = document.getElementById("btn-about");
const btnShow = document.getElementById("btn-showcase");
const btnContact = document.getElementById("btn-contact");
const container = document.getElementById("container");
const control = document.getElementById("control");

if (control) {
  control.addEventListener("click", () => {
    container.classList.remove("slide-top");
    container.classList.add("slide-bottom");
    setTimeout(() => {
      container.classList.add("hidden");
    }, 500);
  });
}
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

// Event listener to big buttons
if (btnAbout) {
  btnAbout.addEventListener("mouseover", () => {
    btnAbout.classList.remove("border-purple");
    btnAbout.classList.add("border-white");
  });
  btnAbout.addEventListener("mouseout", () => {
    btnAbout.classList.remove("border-white");
    btnAbout.classList.add("border-purple");
  });

  btnAbout.addEventListener("click", e => {
    container.classList.remove("hidden");
    container.classList.remove("slide-bottom");
    container.classList.add("slide-top");
  });
}

if (btnShow) {
  btnShow.addEventListener("mouseover", () => {
    btnShow.classList.remove("border-purple");
    btnShow.classList.add("border-white");
  });
  btnShow.addEventListener("mouseout", () => {
    btnShow.classList.remove("border-white");
    btnShow.classList.add("border-purple");
  });
}

if (btnContact) {
  btnContact.addEventListener("mouseover", () => {
    btnContact.classList.remove("border-purple");
    btnContact.classList.add("border-white");
  });
  btnContact.addEventListener("mouseout", () => {
    btnContact.classList.remove("border-white");
    btnContact.classList.add("border-purple");
  });
}

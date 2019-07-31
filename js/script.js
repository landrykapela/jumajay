const slider = document.getElementById("slider");
const social = document.getElementById("social");
const btnHomeA = document.getElementById("btn-home-a");
const btnHomeC = document.getElementById("btn-home-c");
const btnHomeS = document.getElementById("btn-home-s");

const btnAboutA = document.getElementById("btn-about-a");
const btnAboutC = document.getElementById("btn-about-c");
const btnAboutS = document.getElementById("btn-about-s");

const btnShowA = document.getElementById("btn-show-a");
const btnShowsC = document.getElementById("btn-show-c");
const btnShowS = document.getElementById("btn-show-s");

const btnContactA = document.getElementById("btn-contact-a");
const btnContactC = document.getElementById("btn-contact-c");
const btnContactS = document.getElementById("btn-contact-c");

const contactDetail = document.getElementById("contact");
const controls = [
  document.getElementById("control-a"),
  document.getElementById("control-c"),
  document.getElementById("control-s")
];
const btnHome = document.getElementById("btn-home");
const header = document.getElementsByTagName("header")[0];

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
      // setTimeout(() => {
      //   // header.classList.remove("hidden");
      //   detail.classList.add("hidden");
      // }, 500);

      header.classList.add("hidden");
    }
  }
};

//control buttons
controls.map(control => {
  if (control) control.addEventListener("click", closeMe);
});

//navigation buttons

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

btnHomes.map(home => {
  if (home) {
    home.addEventListener("click", e => {
      e.preventDefault();
      console.log(home.id);
      if (home.id.substr(home.id.length - 3, 2) === "-a") showSection("about");
      else {
        if (home.id.substr(home.id.length - 3, 2) === "-s") showSection("show");
        else {
          if (home.id.substr(home.id.length - 3, 2) === "-c")
            showSection("contact");
        }
      }
    });
  }
});

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

// // Event listener to big buttons
// if (btnAbout) {
//   btnAbout.addEventListener("mouseover", () => {
//     btnAbout.classList.remove("border-purple");
//     btnAbout.classList.add("border-white");
//   });
//   btnAbout.addEventListener("mouseout", () => {
//     btnAbout.classList.remove("border-white");
//     btnAbout.classList.add("border-purple");
//   });

//   btnAbout.addEventListener("click", e => {
//     const about = document.getElementById("about");
//     about.classList.remove("hidden");
//     // container.classList.remove("pull-up");
//     header.classList.add("hidden");
//     about.classList.add("pull-up");
//   });
// }

// if (btnShow) {
//   btnShow.addEventListener("mouseover", () => {
//     btnShow.classList.remove("border-purple");
//     btnShow.classList.add("border-white");
//   });
//   btnShow.addEventListener("mouseout", () => {
//     btnShow.classList.remove("border-white");
//     btnShow.classList.add("border-purple");
//   });

//   btnShow.addEventListener("click", showSection("showcase"));
// }

// if (btnContact) {
//   btnContact.addEventListener("mouseover", () => {
//     btnContact.classList.remove("border-purple");
//     btnContact.classList.add("border-white");
//   });
//   btnContact.addEventListener("mouseout", () => {
//     btnContact.classList.remove("border-white");
//     btnContact.classList.add("border-purple");
//   });

//   btnContact.addEventListener("click", () => {
//     showSection("contact");
//   });
// }

const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const backdrop = document.getElementById("back-drop");
const courseContent = document.getElementsByClassName("course_content");
const courseHeader = document.querySelectorAll(".course_header");
const Feedback = document.getElementById("feed");
const Move = document.getElementById("move");
const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    backdrop.classList.add("show");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    backdrop.classList.remove("show");
  });
}

function toggleCourse() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < courseContent.length; i++) {
    courseContent[i].className = "course_content courses_close";
  }
  if (itemClass === "course_content courses_close") {
    this.parentNode.className = "course_content courses_open";
  }
}

courseHeader.forEach((ele) => {
  ele.addEventListener("click", toggleCourse);
});

const Scroll = () => {
  const right = document.getElementById("feed");
  right.scrollLeft = right.scrollLeft + 1000;
};

const ScrollAlt = () => {
  const right = document.getElementById("feed");
  right.scrollLeft = right.scrollLeft - 1000;
};

const ScrollStu = () => {
  const Student = document.getElementById("stu");
  Student.scrollLeft = Student.scrollLeft + 500;
};

const ScrollStuAlt = () => {
  const Student = document.getElementById("stu");
  Student.scrollLeft = Student.scrollLeft - 500;
};

const ScrollCta = () => {
  const card = document.getElementById("cardd");
  card.scrollLeft = card.scrollLeft + 2000;
};

const ScrollCtaAlt = () => {
  const card = document.getElementById("cardd");
  card.scrollLeft = card.scrollLeft - 2000;
};

const ScrollCou = () => {
  const cou = document.getElementById("cou");
  cou.scrollLeft = cou.scrollLeft + 2000;
};

const ScrollCouAlt = () => {
  const cou = document.getElementById("cou");
  cou.scrollLeft = cou.scrollLeft - 2000;
};

const ScrollCou2 = () => {
  const cou = document.getElementById("cou2");
  cou.scrollLeft = cou.scrollLeft + 2000;
};

const ScrollCouAlt2 = () => {
  const cou = document.getElementById("cou2");
  cou.scrollLeft = cou.scrollLeft - 2000;
};

const ScrollCou3 = () => {
  const cou = document.getElementById("cou3");
  cou.scrollLeft = cou.scrollLeft + 2000;
};
const ScrollCouAlt3 = () => {
  const cou = document.getElementById("cou3");
  cou.scrollLeft = cou.scrollLeft - 2000;
};

const ScrollCou4 = () => {
  const cou = document.getElementById("cou4");
  cou.scrollLeft = cou.scrollLeft + 2000;
};
const ScrollCouAlt4 = () => {
  const cou = document.getElementById("cou4");
  cou.scrollLeft = cou.scrollLeft - 2000;
};

const ScrollCou5 = () => {
  const cou = document.getElementById("cou5");
  cou.scrollLeft = cou.scrollLeft + 2000;
};
const ScrollCouAlt5 = () => {
  const cou = document.getElementById("cou5");
  cou.scrollLeft = cou.scrollLeft - 2000;
};

const ScrollCou6 = () => {
  const cou = document.getElementById("cou6");
  cou.scrollLeft = cou.scrollLeft + 2000;
};
const ScrollCouAlt6 = () => {
  const cou = document.getElementById("cou6");
  cou.scrollLeft = cou.scrollLeft - 2000;
};

const ScrollCou7 = () => {
  const cou = document.getElementById("cou7");
  cou.scrollLeft = cou.scrollLeft + 2000;
};
const ScrollCouAlt7 = () => {
  const cou = document.getElementById("cou7");
  cou.scrollLeft = cou.scrollLeft - 2000;
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    let target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("course_active");
    });
    target.classList.add("course_active");
    tabs.forEach((tabb) => {
      tabb.classList.remove("course_active");
    });
    tab.classList.add("course_active");
  });
});

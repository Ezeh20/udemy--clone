const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const backdrop = document.getElementById("back-drop");
const courseContent = document.getElementsByClassName("course_content");
const courseHeader = document.querySelectorAll(".course_header");

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

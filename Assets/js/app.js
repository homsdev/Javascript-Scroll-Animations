const boxes = document.querySelectorAll(".box");
const boxy = document.querySelector(".box");

boxy.classList.add("ani");
boxy.classList.remove();

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

function scrollELement(element, options) {
  const internalCallback = function (entries) {
    let observedElement = entries[0];

    // if (observedElement.isIntersecting) {
    //   element.classList.add("ani-scroll");
    // } else {
    //   element.classList.remove("ani-scroll");
    // }

    observedElement.isIntersecting
      ? element.classList.add("min-ani-scroll")
      : element.classList.remove("min-ani-scroll");
  };

  const observer = new IntersectionObserver(internalCallback, options);
  observer.observe(element);
}

boxes.forEach((box) => {
  scrollELement(box, options);
});

const title = document.getElementById("title");
scrollELement(title, options);

const container = document.querySelector(".snowfall");

const createDelay = () => {
  let delay = Math.floor(Math.random() * 1000);

  return delay;
};

const randomLeft = () => {
  return Math.floor(Math.random() * 100);
};

const createSnow = () => {
  if (container.children.length >= 50) {
    container.innerHTML = "";
    createSnow();
  } else {
    const snow = document.createElement("p");
    snow.classList.add("snow");
    snow.style.left = `${randomLeft()}vw`;
    snow.style.backgroundColor = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`;
    container.append(snow);

    setTimeout(() => createSnow(), createDelay());
  }
};

createSnow();

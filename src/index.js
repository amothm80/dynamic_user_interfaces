import "./styles.css";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.jpg";

function dropDownMenu(dropdownButton, DropDownList) {
  const but = document.getElementById("dropdown-button");
  dropdownButton.addEventListener("click", (e) => {
    if (DropDownList.style.display == "block") {
      DropDownList.style.display = "none";
    } else {
      DropDownList.style.display = "block";
    }
  });
  DropDownList.addEventListener("mouseleave", (e) => {
    DropDownList.style.display = "none";
  });
  DropDownList.addEventListener("click", (e) => {
    DropDownList.style.display = "none";
  });
}

function eventHandlers(ic) {
  document.getElementById("body").addEventListener("click", (e) => {
    switch (e.target.id) {
      case "play":
        ic.play()
        break;
      case "stop":
        ic.stop();
        break;
      case "previous":
        ic.prev();
        break;
      case "next":
        ic.next();
        break;
      case "manual-button":
        break;
      case "autoplay-button":
        break;
    }
  });
}

function imageController() {
  let index = 0;
  let interval = '';
  const imagesElement = document.getElementById("images");
  const images = [image1, image2, image3, image4];
  imagesElement.src = images[index];
  function next() {
    index++;
    if (index > images.length - 1) {
      index = 0;
    }
    imagesElement.src = images[index];
  }
  function prev() {
    index--;
    if (index < 0) {
      index =images.length - 1;
    }
    imagesElement.src = images[index];
  }
  function play(){
    if(!interval){
    interval = setInterval(() => {
        next();
    }, 1000);
    }
  }
  function stop(){
    if(interval){
        clearInterval(interval);
        interval = '';
    }
  }
  return{next,prev,play,stop}
}

(() => {
  dropDownMenu(
    document.getElementById("dropdown-button"),
    document.getElementById("dropdown-list")
  );

  const ic = imageController();
  eventHandlers(ic);
})();

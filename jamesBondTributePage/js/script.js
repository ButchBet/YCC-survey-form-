// configure the normal heigth row
const subcontiner = document.querySelectorAll(".subcontainer");
subcontiner.forEach(element => {
    // if(element.classList.contains("sub1") || element.classList.contains("sub8")) {
    //     element.style.height = "3rem";
    // } else {
    //     element.style.height = "5rem";
    // }
    // element.style.border = ".5px solid var(--white-color)";

    if(element.classList.contains("sub1") ||
        element.classList.contains("sub8")) {
        element.classList.add("firstLastRem");
    } else {
        element.classList.add("middelRem");
    }
    element.style.border = ".5px solid var(--white-color)";
});



// change the general back ground to all of the rectangles 
const subSubContainer = document.querySelectorAll(".subSubContainer");
let firstColor = "colorGray";
let secondColor = "colorWhite";
let i = 0;


while(i < subSubContainer.length) {
    let changecolor = firstColor;

    subSubContainer[i].classList.add(firstColor);
    let j = i+1;
    subSubContainer[j].classList.add(secondColor);

    // change the class values 
    firstColor = secondColor;
    secondColor = changecolor;

    i += 2;
}


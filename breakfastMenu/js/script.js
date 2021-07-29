// Variables to make the change of menu or menuImage
var cM = 0, cI = 0;

// Data puttin 
function dataPut() {
    const xmlR = new XMLHttpRequest;

    xmlR.onreadystatechange = function () {
        if(xmlR.readyState === 4 && xmlR.status === 200) {
            myFunction(this);
        }
    }

    xmlR.open("GET", "../data/breakfastMenu.xml");
    
    xmlR.send();
}

// Function to put the xml file information
function myFunction(xml) {
    // Html data z
    let title, price, description, changeImage;
    title = document.querySelector("#title");

    price = document.querySelector(".price");

    description = document.querySelector(".description");

    changeImage = document.querySelector(".changeImage");

    // Xml data 
    let xmlDoc, xName, xPrice, xDescription, xImage;

    xmlDoc = xml.responseXML;

    xName = xmlDoc.querySelectorAll("name");

    xPrice = xmlDoc.querySelectorAll("price");

    xDescription = xmlDoc.querySelectorAll("description");

    xImage = xmlDoc.querySelectorAll("image");

    title.innerHTML = xName[cM].childNodes[0].nodeValue;

    price.innerHTML = "$" + xPrice[cM].childNodes[0].nodeValue;

    description.innerHTML = xDescription[cM].childNodes[0].nodeValue;

    changeImage.src =  xImage[cM].querySelectorAll("img")[cI].childNodes[0].nodeValue + ".jpg";
}

/* Posible events */
const changeLeft = document.querySelector(".changeLeft");

const changeRight = document.querySelector(".changeRight");

const buttonLeft = document.querySelector(".buttonLeft");

const buttonRight = document.querySelector(".buttonRight");

changeLeft.addEventListener("click", () => {
    if(cM === 0) {
        return;
    } else {
        cM--;

        cI = 0;

        dataPut();
    }
});

changeRight.addEventListener("click", () => {
    if(cM === 4) { 
        return;
    } else {
        cM++;

        cI = 0;

        dataPut();
    }
});

buttonLeft.addEventListener("click", () => {
    if(cI === 0) { 
    } else {
        cI--;

        dataPut()
    }
});

buttonRight.addEventListener("click", () => {
    if(cI === 4) { 
        return;
    } else {
        cI++;

        dataPut()
    }
});

dataPut();
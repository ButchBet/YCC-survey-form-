// General variables
let xmlText, dog, xmlDoc, parser, xName, xPositive, xNegative, xImage;
let leftImg = 0, rightImg = 2, dataControl = 0;  
// when data control be 45 the program has to finish the comparation

// data to save a mark of each image win
let data = {
    "aurora" : [],
    "doffy" : [],
    "kira" : [],
    "market" : [],
    "maya" : [],
    "pickel" : [],
    "richard" : [],
    "rocky" : [],
    "roland" : [],
    "silver" : []
}
// General event to create specidy events 
document.addEventListener("DOMContentLoaded", event => {
    // get each image reference 
    const leftImage = document.querySelector("#firstImage");
    const rightImage = document.querySelector("#secondImage");

    // Put the main Images 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            putInformation(this);
        }
    }

    xhttp.open("GET", "../data/dogsData.xml");
    xhttp.send();
    
    function putInformation(xml) {
        xmlText = xml.responseText;
    
        parser = new DOMParser();
    
        xmlDoc = parser.parseFromString(xmlText, "text/xml");

        dog = xmlDoc.querySelectorAll("dog");
    
        xName = xmlDoc.querySelectorAll("name");
    
        xPositive = xmlDoc.querySelectorAll("counterP");
    
        xNegative = xmlDoc.querySelectorAll("counterN")
    
        xImage = xmlDoc.querySelectorAll("link");

        if(dataControl >= 45) {
            alert("The program has finished the recopilation");
        } else {
            leftImage.src =  xImage[leftImg].childNodes[0].nodeValue;

            rightImage.src = xImage[rightImg].childNodes[0].nodeValue;

            console.log(leftImg + " " + rightImg);
        }
    } 

    // Left and right image events 
    leftImage.addEventListener("click", event => {
        let idRight = dog[rightImg].id;

        let idLeft = dog[leftImg].id;

        data[idRight].push(idLeft);


        rightImg += 2;
        
        if(rightImg > 18) {
            rightImg = 0;
            
            if(leftImg === rightImg) {
                rightImg += 2;
            } 
        } else {
            if(leftImg === rightImg) {
                rightImg += 2;

                if(rightImg > 18) {
                    rightImg = 0;
                }
            } 
        }
        idRight = dog[rightImg].id;
        // Identidy the image has been market alrady 
        let change = false;
        for(let i = 0; i < data[idRight].length; i++) {
            idRight = dog[rightImg].id;

            if(data[idRight][i] === idLeft || data[idLeft][i] === idRight) {
                rightImg += 2;
                i -= i;
                // if( rightImg > 18) {
                //     leftImg += 2;

                //     if(rightImg > 18) {
                //         rightImg = 0;
                        
                //         if(leftImg === rightImg) {
                //             rightImg += 2;
                //         } 
                //     } else {
                //         if(leftImg === rightImg) {
                //             rightImg += 2;
            
                //             if(rightImg > 18) {
                //                 rightImg = 0;
                //             }
                //         } 
                //     }
                // }
            }
         }
        dataControl++;

        putInformation(xhttp);
    });

    rightImage.addEventListener("click", event => {
        let idLeft = dog[leftImg].id;

        let idRight = dog[rightImg].id;

        data[idLeft].push(idRight);

        leftImg += 2;


        if(leftImg > 18) {
            leftImg = 0;
            
            if(rightImg === leftImg) {
                leftImg += 2;
            } 
        } else {
            if(rightImg === leftImg) {
                leftImg += 2;

                if(leftImg > 18) {
                    leftImg = 0;
                }
            } 
        }

        // // Identidy the image has been market alrady 
        // let change = false;
        // for(let i = 0; i < data[idLeft].length; i++) {
        //     do {
        //         idLeft = dog[leftImg].id;

        //         if(data[idLeft][i] === idRight || data[idRight][i] === idLeft) {
        //             leftImg += 2;
                    
        //             change = false;
        //         } else {
        //             change = true;
        //         } 
        //     } while(change === false);
        // }
        dataControl++;

        putInformation(xhttp);
    });
});

// Arrays to use in the checkEvent function 
const alts = ["Daniel Craig as James Bond", "Pierce Brosnan as James Bond",
              "Timothy Dalton ad James Bond", "Rooger Moore as James Bond",
              "George Lazenby as James Bond", "Sean Conery as James Bond"];

const actors = ["DanielCraig", "PierceBranson", "TimothyDalton", 
                "RogerMoore", "GeorgeLazenby", "SeanConnery"];

// Setting of the normal heigth row
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



// Change the general background to all of the rectangles 
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


// Event click in the different images 
window.addEventListener("click", (event) => {
    checkEvent(event);
});

// function to check the posible events
function checkEvent(event) {
    const list = document.querySelector(".list");
    const container = document.querySelector(".container");
    
    // Check if the event is in the close button
    if(event.path[0].classList.contains("panelButton")) {
        document.querySelector(".panel").classList.add("hidden");
        
        document.querySelectorAll(".subcontainer").forEach(element => {
            element.classList.remove("opac");
        });

    // Check is in any of the pictures 
    } else {
        for(let i = 0; i < alts.length; i++) {
            if(event.path[0].alt === alts[i]) {
                // Remove the last li added
                list.innerHTML = "";

                const option = {
                    method : "GET",

                    headers: {
                        "Content-Type": "application/json"
                    }
                }

                const names = fetch("../data/moviesData.json", option);
                
                const dates = fetch("../data/dateData.json", option);

                names
                .then(response => {
                    if(response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.status);
                    }
                })
                .then(value => {
                    dates
                    .then(response2 => {
                        if(response2.ok) {
                            return response2.json();
                        } else {
                            throw new Error(response2.status);
                        }
                    })
                    .then(value2 => {
                        // Loop to go throught the actors movies names
                        let actor = actors[i];
                        for(let j = 0; j < value[actor].length; j++) {
                            let liName = document.createElement("li");

                            let liDate = document.createElement("li");  

                            liName.innerHTML = value[actor][j].toUpperCase();

                            liDate.innerHTML = value2[actor][j];
                            
                            liDate.classList.add("lastMod")

                            list.append(liName);

                            list.append(liDate);
                        }
                    })
                    .catch(error2 => {
                        console.error(error2);
                    })
                })
                .catch(error => {
                    console.error(error);
                });

            document.querySelector(".panel").classList.remove("hidden");
            
            document.querySelectorAll(".subcontainer").forEach(element => {
                element.classList.add("opac");
            });
            }
        }
    }
    
}


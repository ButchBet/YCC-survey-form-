const imgIDs = 
[   "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
    "img7",
    "img8",
    "img9",
    "img10"
],

    dataIDs = 
[],

constainer1 = document.getElementById("container1"),

constainer2 = document.getElementById("container2");

document.addEventListener("DOMContentLoaded", () => {
    imgIDs.forEach(element => putImages(element, 1))
});


function putImages(img, status) {
    let link;

    if(status === 1) {
        let radomID = Math.floor(Math.random() * 500 + 1);

        link = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + radomID;
    } else {
        link = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + img;
    }

    const options = {
        method: "GET"
        };

    fetch(link, options)

        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                putImages(img, 1);
                return
            }
        })

        .then((response) => {
            if(response.primaryImageSmall === "" 
               || response.country === ""
               || response.artistDisplayName === ""
               || response.title === "") {
                putImages(img), 1;
                return;
            } else {
                if(status === 1) {
                    dataIDs.push(response.objectID);

                    console.log(response);

                    const division = document.getElementById(img);

                    const image = document.createElement("img");
                    
                    image.src = response.primaryImageSmall;

                    image.alt = response.objectID;

                    division.append(image);
                } else if(status === 0) {
                    console.clear();

                    console.log(response.artistDisplayName);
                    console.log(response.country)
                    // Presentation ariables 
                    const title = document.getElementById("title"),

                    artist = document.getElementById("artist"),
                    
                    country = document.getElementById("country"),

                    dimensions = document.getElementById("dimensions"),

                    medium = document.getElementById("medium"),

                    date = document.getElementById("date"), 

                    seeMore = document.getElementById("button2");

                    // change the values

                     title.innerHTML = response.title;

                     artist.innerHTML = response.artistDisplayName;

                     country.innerHTML = response.country;

                     dimensions.innerHTML = response.dimensions;

                     medium.innerHTML = response.medium;

                     date.innerHTML = response.objectDate;

                    seeMore.href = response.objectURL;

                     constainer2.style.display = "flex";

                     constainer1.classList.add("hidden");

                }
            }
            // document.getElementById(img).src = response.primaryImageSmall;
        });
}

 // Event catch
 document.addEventListener("click", event => {
    eventCheck(event);
});

// function to check the event 
function eventCheck(event) {
    if(event.path[0].id === "button1") {
        constainer2.style.display = "none";

        constainer1.classList.remove("hidden");
    }

    dataIDs.forEach(element => {
        if(element == event.path[0].alt) {
            putImages(event.path[0].alt, 0);
        }
    });
}
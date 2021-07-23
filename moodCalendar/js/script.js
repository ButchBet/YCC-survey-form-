/* Create an event loader to all of the events */
window.addEventListener("click", (event) => {
    typeEvent(event);
});

/* check event function */
function typeEvent(event){
    // // icons gegeral objecs events 
    // const allIcons = document.querySelectorAll(".version1");
    // const eventElementIcons = event.toElement.classList.contains(".version1");
    // const eventElementMainContet = event.toElement.classList.contains(".mainContent");
    // const eventElementYear = event.toElement.classList.contains(".mainTitleYear");
    // const eventElementDays = event.toElement.classList.contains("tableDays")

    if(event.toElement.classList.contains("version1")){
        // change the image echa time that click about the image
        if(event.toElement.classList.contains("changed")){
            document.querySelector(".happy").src = "./icons/happy1.svg";
            document.querySelector(".yummy").src = "./icons/yummy1.svg";
            document.querySelector(".sad").src = "./icons/crying1.svg"
            document.querySelector(".noExpresion").src = "./icons/no-expression1.svg";
            document.querySelector(".angry").src = "./icons/angry1.svg";

           // Remove the changed class attribute to the next click event correct change
           event.toElement.classList.remove("changed");

        }else{
            // At the second different icon click (see coment 1)
            document.querySelector(".happy").src = "./icons/happy1.svg";
            document.querySelector(".happy").classList.remove("changed");

            document.querySelector(".yummy").src = "./icons/yummy1.svg";
            document.querySelector(".yummy").classList.remove("changed");


            document.querySelector(".sad").src = "./icons/crying1.svg"
            document.querySelector(".sad").classList.remove("changed");


            document.querySelector(".noExpresion").src = "./icons/no-expression1.svg";
            document.querySelector(".noExpresion").classList.remove("changed");

            document.querySelector(".angry").src = "./icons/angry1.svg";
            document.querySelector(".angry").classList.remove("changed");


            // Search the individual icon
           if(event.toElement.title === "happy"){
                document.querySelector(".happy").src = "./icons/happy2.svg";
            }else if(event.toElement.title === "yummy"){
                document.querySelector(".yummy").src = "./icons/yummy2.svg";
            }else if(event.toElement.title === "sad"){
                document.querySelector(".sad").src = "./icons/crying2.svg"
            }else if(event.toElement.title === "noExpresion"){
                document.querySelector(".noExpresion").src = "./icons/no-expression2.svg";
            }else {
                document.querySelector(".angry").src = "./icons/angry2.svg";
            }

            // Add the changed class attribute to the next click event correct change
            event.toElement.classList.add("changed");
        }
    }
    // Now if the user click one avaliable day 
    else if(event.toElement.classList.contains("tableDays")){
        let background = "inherit";

        // Check if the icons has been selected 
        document.querySelectorAll(".version1").forEach((element) =>{
            if(element.classList.contains("changed")){
                // change backgound ass the id that saves the css var linear-gradient 
                background = element.id;
            }
        })

        // Change the background of the clicked dayNumber
        event.toElement.style.background = background;
    }
}

// COMENTS
/* 1) We can click .happy the first time, at the second tyme we click .sad, .happy will have 
still .cahngeg so at the second .happy click this is going to use the sencente document.querySelector(".happy").src = "./icons/happy1.svg";
so the image will noth change until another .happy click. the soution is to remove .cahnge class from all of the 
icons prevent it */

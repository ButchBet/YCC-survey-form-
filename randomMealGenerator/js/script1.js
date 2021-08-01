/* Create an event loader to all of the events */
document.addEventListener("DOMContentLoaded", () =>{
    let button = document.querySelector("#button");
    let firstCont = document.querySelector(".container2");
    let secondCont = document.querySelector(".container3");
    
    button.addEventListener("click", () => {
      dataRenovation(firstCont, secondCont);
      firstCont.classList.remove("hidden");
      secondCont.classList.remove("hidden");
    })
  });
  
  function dataRenovation(first, second){
    const option = {
      mode: "no-cors", 
      method: 'GET',
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": '*'  
      }
    };
    
    fetch("//www.themealdb.com/api/json/v1/1/random.php", option)
    .then(response => {
      if(response.ok) {
        return response.json();
      }else {
        throw new Error(response.status);
      }
    })
    .then(data => {
      console.log("Data: " + data);
    })
    .catch(err => {
      console.error(err);
    });
  }
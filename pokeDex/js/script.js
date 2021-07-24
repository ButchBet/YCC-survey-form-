// Arrya with the pokemos direction
const pokAddress = ["../pokemos/bulbasaur.json", "../pokemos/ivysaur.json", "../pokemos/venusaur.json", "../pokemos/charmander.json",
                    "../pokemos/charmeleon.json", "../pokemos/charizard.json", "../pokemos/squirtel.json", "../pokemos/wartortle.json", "../pokemos/blastoise.json"];

// Create the infraestructure to each one 


pokAddress.forEach(elemenet => {
    // Create the .sub2 division
    const sub2 = document.querySelector(".sub2");

    const option = {
        method : 'GET',
        headers : {
            "Concent-Type" : "aplication/json"
        }
    };

    fetch(elemenet, option)
    .then(response => {
        if(response.ok) {
            return response.json();
        }else {
            throw new Error(response.value);
        }
    })
    .then(value => {
        // Create general elements and add the neccesary classes
        const h3 = document.createElement("h3");
        h3.innerHTML = value.name;

        const img = document.createElement("img");
        img.src = `${value.sprite}`;
        img.alt =  `${value.name} image`;

        const h4 = document.createElement("h4");
        h4.innerHTML = value.number;

        const type = document.createElement("div");
        type.classList.add("types")
        // types
        for(key in value.type[0]) {
            if(value.type[0][key] == "") {
                break;
            }else {
                type.innerHTML += `<span>${value.type[0][key]}</span> `;
            }
        }

        const a = document.createElement("a");
        a.href += value.url;
        a.innerHTML = "Check";

        // Create the general pokemon element
        const pokemon = document.createElement("div");
        pokemon.append(h3);
        pokemon.appendChild(img);
        pokemon.append(h4);
        pokemon.append(type);
        pokemon.append(a);

        pokemon.classList.add("pokemon");

        // append all pokemon inside sub2 division 
        sub2.append(pokemon);
    })
    .catch(err => {
        console.error(err);
    });
});

var paint = document.getElementsByTagName("img");

document.addEventListener("DOMContentLoaded", () => {
    let radomID = Math.floor(Math.random() * 45734 + 1);

    let link = "//collectionapi.metmuseum.org/public/collection/v1/objects/" + radomID;

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        'Access-Control-Allow-Origin' : 'https://collectionapi.metmuseum.org/'
        };

    fetch(link, options)

        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })

        .then((response) => {
            console.log(response.constituentWikidata_URL);
        })

        .catch((error) => {
            console.log(error);
        });
});

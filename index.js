

window.onload = function () {
    fetch("https://api.pexels.com/v1/search?query=nature&per_page=50", {
        "method": "GET",
        "headers": {
            Authorization: "563492ad6f91700001000001b1cde242cf37453bb83b8b5911c2ec4d",
            // "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
        .then((response) => response.json())
        .then(jsonData => {
            console.log("Its working")
            console.log(jsonData);

            let firstButton = document.querySelector(".btn-primary")




            firstButton.addEventListener("click", function () {

                let theSVG = document.querySelectorAll("svg")
                let parentCard = document.querySelectorAll(".card")

                let cardBody = document.querySelectorAll(".card-body")

                // to remove the SVG
                for (let i = 0; i < theSVG.length; i++) {
                    theSVG[i].style.display = "none"
                }
                // to create an img
                for (let i = 0; i < parentCard.length; i++) {
                    let image = document.createElement("img")
                    parentCard[i].insertBefore(image, cardBody[i])
                }

                let imgCreated = document.querySelectorAll("img")

                for (let i = 0; i < imgCreated.length; i++) {
                    imgCreated[i].setAttribute("src", jsonData.photos[i].src.medium)
                    imgCreated[i].setAttribute("height", "225")
                    imgCreated[i].setAttribute("width", "100%")
                }
            })






        })
        .catch(err => {
            console.error(err);
        });

    fetch("https://api.pexels.com/v1/curated?per_page=9", {
        "method": "GET",
        "headers": {
            Authorization: "563492ad6f91700001000001b1cde242cf37453bb83b8b5911c2ec4d",
            // "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
        .then((response) => response.json())
        .then(jsonData => {
            console.log("Its working")
            console.log(jsonData);


            let secondButton = document.querySelector(".btn-secondary")

            secondButton.addEventListener("click", function () {

                let theSVG = document.querySelectorAll("svg")
                let parentCard = document.querySelectorAll(".card")
                let cardBody = document.querySelectorAll(".card-body")

                // to remove the SVG
                for (let i = 0; i < theSVG.length; i++) {
                    theSVG[i].style.display = "none"
                }
                // to create an img
                for (let i = 0; i < parentCard.length; i++) {
                    let image = document.createElement("img")
                    parentCard[i].insertBefore(image, cardBody[i])
                }

                let imgCreated = document.querySelectorAll("img")
                for (let i = 0; i < imgCreated.length; i++) {
                    imgCreated[i].setAttribute("src", jsonData.photos[i].src.medium)
                    imgCreated[i].setAttribute("height", "225")
                    imgCreated[i].setAttribute("width", "100%")
                }
            })

            secondButton.addEventListener("click", function () {

            })




        })
        .catch(err => {
            console.error(err);
        });
}

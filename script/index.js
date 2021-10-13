document.querySelector(".cloud form").addEventListener("submit", (event) => {
    event.preventDefault()
    const location = event.target.location.value
    const info = document.querySelector('#results')
    const history = document.querySelector('#previous ul')
    fetch(`https://wttr.in/${location}?format=j1`).then((response) => response.json()).then((data) => {
        console.log(data)
        // info.firstElementChild.remove()
        removeAllChildNodes(info)

        if (history.firstElementChild.textContent === 'No previous searches made') {
            history.firstElementChild.remove()
        }

        let heading = document.createElement("h3")
        heading.textContent = `${location}`
        let pTag = document.createElement("p")
        pTag.classList.add("list")
        pTag.textContent = `Area: ${location}\n`

        let pTag2 = document.createElement("p")
        pTag2.classList.add("list")
        pTag2.textContent = `Region: ${data.nearest_area[0].region[0].value}\n`

        let pTag3 = document.createElement("p")
        pTag3.classList.add("list")
        pTag3.textContent = `Country: ${data.nearest_area[0].country[0].value}\n`

        let pTag4 = document.createElement("p")
        pTag4.classList.add("list")
        pTag4.textContent = `Currently: Feels like ${data.current_condition[0].FeelsLikeF}°F`

        let historyTag = document.createElement("li")
        historyTag.textContent = `${location} - ${data.current_condition[0].FeelsLikeF}°F`
        history.append(historyTag)
        historyTag.addEventListener("click", () => {
            let newInput = document.querySelector(".textbox")
            newInput
        })

        info.append(heading)
        info.append(pTag)
        info.append(pTag2)
        info.append(pTag3)
        info.append(pTag4)


    }).catch((error) => {
        // console.log(error, "aaaaaaaa")
    })
    event.target.reset()
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const card = document.querySelector(".card")
const container = document.querySelector(".container")
const cloud = document.querySelector(".cloud")

container.addEventListener("mousemove", (event) => {
    console.log(event)
    let xAxis = (window.innerWidth / 2 - event.pageX) / 25; 
    let yAxis = (window.innerHeight / 2 - event.pageY) / 25; 
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container.addEventListener("mouseenter", (event) => {
    card.style.transition = "none";

    cloud.style.transform  = "translateZ(150px)"
})

container.addEventListener("mouseleave", (event) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})
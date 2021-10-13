

const fill = (weather) => {
    const info = document.querySelector('#results')
    const history = document.querySelector('#previous ul')

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
        newInput.focus()
    })
    info.append(heading)
    info.append(pTag)
    info.append(pTag2)
    info.append(pTag3)
    info.append(pTag4)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


if (typeof fill === "undefined") {
  fill = undefined;
}
if (typeof module !== "undefined") {
  module.exports = fill;
}
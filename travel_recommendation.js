const dataSource = './travel_recommendation_api.json'

function getData(keyword) {
        fetch(dataSource)
        .then(data => data.json())
        .then(destinations => {
            const list = destinations[keyword].forEach(dest => console.log(dest))
            })  
        .catch(e => console.log(`Error: ${e}`))
}

function keywordSearch() {
    const userInput = searchbarInput.value 
    console.log(userInput)

    const keyword = userInput.toLowerCase()
    switch(keyword) {
        case("beach"):
        case("beaches"):
            getData("beaches")
            // clearInput()
            break
        case("country"):
        case("countries"):
            getData("countries")
            // clearInput()
            break
        case("temple"):
        case("temples"):
            getData("temples")
            // clearInput()
            break
        default:
            // get404()
            // clearInput()
            // break
    }
}

const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', keywordSearch)

const searchbarInput = document.getElementById('searchbarInput')


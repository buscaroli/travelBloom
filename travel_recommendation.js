const dataSource = './travel_recommendation_api.json'

function getData((keyword, hasSubArray) {
        fetch(dataSource)
        .then(data => data.json())
        .then(destinations => {
            generateList(destinations[keyword])
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
            getData("beaches", false)
            // clearInput()
            break
        case("country"):
        case("countries"):
            getData("countries", true)
            // clearInput()
            break
        case("temple"):
        case("temples"):
            getData("temples", false)
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
searchbarInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') keywordSearch()
})

function generateList(list, hasSubArray) {
    const listElem = document.createElement('div')
    listElem.className = 'resultList'
    
    console.log('- - - - - - -')
    console.log(list)

    if (list.length === 0) {
        console.log('nothing found, tell user somehow')
        return
    }

    if (hasSubArray) { // country

    } else { // either beach or temple
        for (item of list) {
            let newCard = document.createElement('div')
            newCard.className = 'destinationCard'
            
            let newDestName = document.createElement('div')
            newDestName.className = 'destinationName'

            let newDestImg = document.createElement('img')
            newDestImg.className = 'destinationImg')

            let newDestDesc = document.createElement('img')
            newDestDesc.className = 'destinationDesc'

            let newDestBtn = document.createElement('button')
            newDestBtn.className = 'destinationBtn'

            newCard.append(newDestName)
            newCard.append(newDestImg)
            newCard.append(newDestDesc)
            newCard.append(newDestBtn)
            listElem.append(newCard)

            listElem.classList.toggle('visibility')
        }
    }

}

function destroyList() {
    const listCreated = document.getElementsByClass('listElem')
    if (listCreated.length > 0) {
        listCreated[0].remove()
    }
}

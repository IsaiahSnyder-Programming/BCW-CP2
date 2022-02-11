let chickenAmount = 0

let clickerUpgrades = {
    double: {
        name: 'Double',
        price: 10,
        quantity: 0,
        multiplier: 2,
        image: '//thiscatdoesnotexist.com/'
    },
    triple: {
        name: 'Triple',
        price: 20,
        quantity: 0,
        multiplier: 3,
        image: '//thiscatdoesnotexist.com/'
    },
}



function drawUB() {
    let template = ''
    for (let key in clickerUpgrades) {
        let item = clickerUpgrades[key]
        template += `
        <div class="col-12 mt-3 d-flex justify-content-center" onclick="">
            <img class="upgrade-button" src="${item.image}" alt="">
        </div>
        <div class="col-12 mb-3 d-flex justify-content-center" onclick="">
            <h2 class="m-2">${item.name}:</h2>
            <h2 class="m-2">${item.price}</h2>
        </div>
        `
        document.getElementById('upgrade-button').innerHTML = template
    }
}

function drawUA() {
    let template = ''
    for (let key in clickerUpgrades) {
        let item = clickerUpgrades[key]
        template += `
        <div class="col-12 mt-3 d-flex justify-content-center" onclick="">
            <img class="upgrade-button" src="${item.image}" alt="">
        </div>
        <div class="col-12 mb-3 d-flex justify-content-between" onclick="">
            <h2 class="m-2">${item.name}</h2>
            <h2 class="m-2">Owned: ${item.quantity}</h2>
        </div>
        `
        document.getElementById('upgrade-aquire').innerHTML = template
    }
}


function upgradeItem() {
    
}

function makeChicken() {
    chickenAmount++
    console.log(chickenAmount)
    document.getElementById('chickenCount').innerText = chickenAmount.toFixed()
}

drawUB()
drawUA()
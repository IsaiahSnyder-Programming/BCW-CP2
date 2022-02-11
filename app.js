let chickenAmount = 0

let cart = []

let clickerUpgrades = {
    double: {
        id: 1,
        name: 'Double',
        price: 10,
        quantity: 0,
        multiplier: 2,
        image: '//thiscatdoesnotexist.com/'
    },
    triple: {
        id: 2,
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
        <div class="col-12 mt-3 d-flex justify-content-center" onclick="upgradeItem(${item.id})">
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
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        template += `
        <div class="col-12 mt-3 d-flex justify-content-center">
            <img class="upgrade-button" src="${item.image}" alt="">
        </div>
        <div class="col-12 mb-3 d-flex justify-content-center" onclick="">
            <h2 class="m-2">${item.name}:</h2>
            <h2 class="m-2">${item.price}</h2>
        </div>
        `
        document.getElementById('upgrade-aquire').innerHTML = template
    }
}


function upgradeItem(upgradeID) {

    cart.push(upgradeID)
    console.log(cart);

    chickenAmount -= 10
    document.getElementById('chickenCount').innerText = chickenAmount.toFixed()
    drawUA()

}

function makeChicken() {
    chickenAmount++
    console.log(chickenAmount)
    document.getElementById('chickenCount').innerText = chickenAmount.toFixed()
}

drawUB()
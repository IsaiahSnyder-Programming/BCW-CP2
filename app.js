let chickenAmount = 0


let clickerUpgrades = {
    double: {
        id: 1,
        name: '+1/Click',
        price: 1,
        quantity: 0,
        multiplier: 1,
        image: '//thiscatdoesnotexist.com/'
    },
    triple: {
        id: 2,
        name: '+100/Click',
        price: 1,
        quantity: 0,
        multiplier: 99,
        image: '//thiscatdoesnotexist.com/'
    },
}

let autoUpgrades = {
    double: {
        id: 1,
        name: '+100/Sec',
        price: 1,
        quantity: 0,
        multiplier: 100,
        image: '//thiscatdoesnotexist.com/'
    },
    triple: {
        id: 1,
        name: '+10,000/Sec',
        price: 1,
        quantity: 0,
        multiplier: 10000,
        image: '//thiscatdoesnotexist.com/'
    },
}




function drawUB() {
    let template = ''
    for (let key in clickerUpgrades) {
        let item = clickerUpgrades[key]
        template += `
        <div class="col-12 mt-3 d-flex justify-content-center" onclick="upgradeItem('${key}')">
            <img class="upgrade-button" src="${item.image}" alt="">
        </div>
        <div class="col-12 mb-3 d-flex justify-content-center" onclick="">
            <h2 class="m-2">${item.name}:</h2>
            <h2 class="m-2">$${item.price}</h2>
        </div>
        `
        document.getElementById('upgrade-button').innerHTML = template
    }
    drawClickTotal()
}

function drawUA() {
    let template = ''
    for (let key in clickerUpgrades) {
        let item = clickerUpgrades[key]
        template += `
        <div class="col-12 mt-3 d-flex justify-content-center">
            <img class="upgrade-button" src="${item.image}" alt="">
        </div>
        <div class="col-12 mb-3 d-flex justify-content-between" onclick="">
            <h2 class="m-2">${item.name}:</h2>
            <h2 class="m-2">Level ${item.quantity}</h2>
        </div>
        `
        document.getElementById('upgrade-aquire').innerHTML = template
    }
}

function drawAutoBtn() {
    let template = ''
    for (let key in autoUpgrades) {
        let item = autoUpgrades[key]
        template += `
        <div class="col-12 mt-3 d-flex justify-content-center" onclick="autoUpgradeItem('${key}')">
            <img class="upgrade-button" src="${item.image}" alt="">
        </div>
        <div class="col-12 mb-3 d-flex justify-content-center" onclick="">
            <h2 class="m-2">${item.name}:</h2>
            <h2 class="m-2">$${item.price}</h2>
        </div>
        `
        document.getElementById('auto-upgrades').innerHTML = template
    }
    drawAutoTotal()
}

function drawAutoUpgrade() {
    let template = ''
    for (let key in autoUpgrades) {
        let item = autoUpgrades[key]
        template += `
        <div class="col-12 mt-3 d-flex justify-content-center">
            <img class="upgrade-button" src="${item.image}" alt="">
        </div>
        <div class="col-12 mb-3 d-flex justify-content-between" onclick="">
            <h2 class="m-2">${item.name}:</h2>
            <h2 class="m-2">Level ${item.quantity}</h2>
        </div>
        `
        document.getElementById('auto-upgrade-aquire').innerHTML = template
    }
}


function upgradeItem(key) { 
        let item = clickerUpgrades[key]
        if(chickenAmount >= item.price) {
            chickenAmount -= item.price
            item.quantity++
            item.price += 2
            document.getElementById('chickenCount').innerText = chickenAmount.toFixed()
        } 
        drawUB()
        drawUA()
}

function autoUpgradeItem(key) {
    let item = autoUpgrades[key]
        if(chickenAmount >= item.price) {
            chickenAmount -= item.price
            item.quantity++
            item.price += 2
            document.getElementById('chickenCount').innerText = chickenAmount.toFixed()
        } 
        drawAutoBtn()
        drawAutoUpgrade()
}

function drawClickTotal() {
    let item = 1 + clickerUpgrades.double.multiplier * clickerUpgrades.double.quantity
    let item2 = clickerUpgrades.triple.multiplier * clickerUpgrades.triple.quantity 

    let total = item + item2

    console.log(clickerUpgrades.double.multiplier + clickerUpgrades.double.quantity);
    document.getElementById('chicken-click').innerText = total.toFixed()
}

function drawAutoTotal() {
    let item = autoUpgrades.double.multiplier * autoUpgrades.double.quantity
    let item2 = autoUpgrades.triple.multiplier * autoUpgrades.triple.quantity 

    let total = item + item2

    console.log(autoUpgrades.double.multiplier + autoUpgrades.double.quantity);
    document.getElementById('chicken-second').innerText = total.toFixed()
}


function makeChicken() {
    chickenAmount++
    document.getElementById('chickenCount').innerText = chickenAmount.toFixed()

    for(let key in clickerUpgrades) {
        let item = clickerUpgrades[key]
        
        if(item.quantity >= 1){
            
            chickenAmount += item.multiplier * item.quantity

            document.getElementById('chickenCount').innerText = chickenAmount.toFixed()
        }
    }

    
}

function autoChicken() {
    for (let key in autoUpgrades) {
        let item = autoUpgrades[key]

        if(item.quantity >= 1){

            chickenAmount += item.multiplier * item.quantity

            document.getElementById('chickenCount').innerText = chickenAmount.toFixed()
        }
    }
}


drawUB()
drawUA()
drawAutoBtn()
drawAutoUpgrade()
setInterval(autoChicken, 1000);

drawClickTotal()
drawAutoTotal()

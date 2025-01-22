let delivery = false;

let noAdd = false;

let countBasket = 0;
let deliveryPrice = 5;
let basketItems = [];

let maxCountBasket = 20;     //  max count for basket -  X20
let maxLengthBasket = 15;    //  max length for basket - 10 items

function carI() {

    if (delivery == false) {
        deliveryOn();
        delivery = true;
    } else {
        deliveryOff();
        delivery = false;
    }
    showBasketSum();
}

function deliveryOn() {

    document.getElementById('roadI').classList.add('road2');
    document.getElementById('carI').classList.add('car2');
    delivery = true;
    deliveryOnText();
    showBasketSum();
}

function deliveryOff() {

    document.getElementById('roadI').classList.remove('road2');
    document.getElementById('carI').classList.remove('car2');
    delivery = false;
    deliveryOffText();
    showBasketSum();
}

function deliveryOnText() {
    document.getElementById('withDelivery').classList.add('hover-bold');
    document.getElementById('withoutDelivery').classList.add('hover-lighter');
    document.getElementById('withDelivery').classList.remove('hover-lighter');
    document.getElementById('withoutDelivery').classList.remove('hover-bold');
}

function deliveryOffText() {
    document.getElementById('withDelivery').classList.add('hover-lighter');
    document.getElementById('withoutDelivery').classList.add('hover-bold');
    document.getElementById('withDelivery').classList.remove('hover-bold');
    document.getElementById('withoutDelivery').classList.remove('hover-lighter');
}

function hoverD() {

    const myElement = document.getElementById('hover1');
    myElement.addEventListener('mouseover', hoverD1);
    myElement.addEventListener('mouseout', hoverD2);

    const myElement2 = document.getElementById('hover2');
    myElement2.addEventListener('mouseover', hoverD12);
    myElement2.addEventListener('mouseout', hoverD22);
}

function hoverD1() {

    const myElement = document.getElementById('withoutDelivery');
    myElement.classList.add('delivery-hover');

    deliveryOffText();
}

function hoverD2() {
    const myElement = document.getElementById('withoutDelivery');
    myElement.classList.remove('delivery-hover');
    if (delivery == false) {
        deliveryOffText();
    } else {
        deliveryOnText();
    }
}

function hoverD12() {

    const myElement = document.getElementById('withDelivery');
    myElement.classList.add('delivery-hover');

    deliveryOnText();
}

function hoverD22() {
    const myElement = document.getElementById('withDelivery');
    myElement.classList.remove('delivery-hover');
    if (delivery == false) {
        deliveryOffText();
    } else {
        deliveryOnText();
    }
}

function addToBasket(menuCurrent1, priceToFixed, idNumber) {

    if (noAdd == false) {

    plusPressed(menuCurrent1, priceToFixed, idNumber);
    }
}

function addToBasketFinish(menuCurrent1, priceToFixed) {

    if (noAdd == false) {

        priceToAdd = Number(priceToFixed);

        let b = basketItems.filter(element => { return element.name == menuCurrent1 });

        if (b.length < 1) {

            noElementInBasket(menuCurrent1, priceToAdd);

        } else {

            increaseElementInBasket(menuCurrent1);
        }
    }
}

function plusPressed(menuCurrent1, priceToFixed, idNumber) {

    noAdd = true;

    document.getElementById(`eatDivId${idNumber}`).style = "border: 3px solid #fc8200ff";
    setTimeout(plusPressedEnd, 200, menuCurrent1, priceToFixed, idNumber);
}

function plusPressedEnd(menuCurrent1, priceToFixed, idNumber) {

    document.getElementById(`eatDivId${idNumber}`).style = "";
    noAdd = false;

    addToBasketFinish(menuCurrent1, priceToFixed);
}

function noElementInBasket(menuCurrent1, priceToAdd) {

    if (basketItems.length < maxLengthBasket) {

        basketItems.push({

            name: menuCurrent1,
            price: priceToAdd,
            itemCount: 1
        });

        countBasket++;
        showHeader();
        showBasketChoice();
        showBasketSum();

        const element = document.getElementById('choiceSum');
        element.scrollTop = element.scrollHeight;
    }
}

function increaseElementInBasket(menuCurrent1) {

    findIndex = basketItems.findIndex((phrase) => phrase.name === menuCurrent1);

    let c = basketItems[findIndex].itemCount;

    c++;

    if (c < maxCountBasket + 1) {

        basketItems[findIndex].itemCount = c;

        countBasket++;

        showHeader();
        showBasketChoice();
        showBasketSum();
    }
}

function showBasketChoice() {

    let choiceRef = document.getElementById('choiceTemplates');

    choiceRef.innerHTML = "";

    if (basketItems != "") {

        for (index = 0; index < basketItems.length; index++) {

            priceToShowChoice = basketItems[index].price.toFixed(2);

            choiceRef.innerHTML += getShowChoice(index, priceToShowChoice);
        }

    } else {

        choiceRef.innerHTML = getNoChoice();
    }
}

function showBasketSum() {

    let sumRef = document.getElementById('sumTemplates');

    let subtotal = 0;
    let allCost = 0;

    let showDeliveryPrice = showDeliveryPriceCreate();

    if (countBasket > 0) {

        calculateArray = calculateAllCost(subtotal, allCost);

        allCost = calculateArray[0];
        subtotal = calculateArray[1];
    }

    showSubtotal = subtotal.toFixed(2);
    showAllCost = allCost.toFixed(2);

    sumRef.innerHTML = getShowSum(showDeliveryPrice, showSubtotal, showAllCost);
}

function showDeliveryPriceCreate() {

    if (delivery == true) {

        showDeliveryPrice = deliveryPrice.toFixed(2);
    } else {
        showDeliveryPrice = 0;
    }
    return showDeliveryPrice;
}


function calculateAllCost(subtotal, allCost) {

    for (index = 0; index < basketItems.length; index++) {

        subtotal += basketItems[index].price * basketItems[index].itemCount;

        if (delivery == true) {
            deliveryCost = deliveryPrice;
        } else {
            deliveryCost = 0;
        }

        allCost = subtotal + deliveryCost;
    }

    return [allCost, subtotal];
}

function minusItem(index) {

    let a = basketItems[index].itemCount - 1;

    if (a > 0) {

        basketItems[index].itemCount = a;
        countBasket--;

        showHeader();
        showBasketChoice();
        showBasketSum();

    } else {
        trashItem(index);
    }
}

function plusItem(index) {

    let a = basketItems[index].itemCount + 1;

    if (a < 21) {

        basketItems[index].itemCount = a;

        countBasket++;

        showHeader();
        showBasketChoice();
        showBasketSum();
    }
}

function trashItem(index) {

    countBasket = countBasket - basketItems[index].itemCount;

    basketItems.splice(index, 1);

    showHeader();
    showBasketChoice();
    showBasketSum();
}

function applyBasketChoice() {

    if (countBasket > 0) {

        noAdd = true;

        scrollToPlace('body-start');

        document.getElementById('choiceSum').classList.add('d-none');

        document.getElementById('acceptedBasket').innerHTML = getAccepted();

        setTimeout(applyBasketChoice2, 3000);

    } else {
        chooseYourOrder();
    }
}

function applyBasketChoice2() {

    document.getElementById('choiceSum').classList.remove('d-none');
    document.getElementById('acceptedBasket').innerHTML = "";

    setTimeout(applyBasketChoice3, 1500);
}

function applyBasketChoice3() {

    noAddChange()

    basketItems = [];
    countBasket = 0;
    showHeader();
    showBasketChoice();
    showBasketSum();
}

function chooseYourOrder() {

    scrollToPlace('body-start');

    basketFullView();

    noAdd = true;

    document.getElementById('arrowHeader').classList.remove('d-none');

    setTimeout(chooseYourOrder2, 800);
    setTimeout(chooseYourOrder3, 1600);
    setTimeout(chooseYourOrder2, 2400);
    setTimeout(chooseYourOrder3, 3200);
    setTimeout(chooseYourOrder2, 4000);
    setTimeout(noAddChange, 4000);
}

function chooseYourOrder2() {

    document.getElementById('arrowHeader').classList.add('d-none');
}

function chooseYourOrder3() {

    document.getElementById('arrowHeader').classList.remove('d-none');
}

function noAddChange() {

    noAdd = false;
}

function basketFullView() {

    const mediaQuery = window.matchMedia('(max-width: 708px)')

    if (mediaQuery.matches) {

        document.getElementById('menuDiv').classList.add('d-none');
    }
}





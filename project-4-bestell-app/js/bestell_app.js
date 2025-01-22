function start() {

    document.getElementById('withDelivery').classList.add('hover-lighter');
    document.getElementById('withoutDelivery').classList.add('hover-bold');
    hoverD();

    showHeader();
    showPastaPizzaWater();
    showBasketChoice();
    showBasketSum();

    basketFullView();
}

function menuOnOff() {

    const mediaQuery = window.matchMedia('(max-width: 708px)')

    if (mediaQuery.matches) {

        document.getElementById('menuDiv').classList.toggle('d-none');
    }
}

function showHeader() {

    if (countBasket > 0) {
        countBasketHeader = countBasket;
    } else {
        countBasketHeader = "";
    }

    document.getElementById('headerTemplates').innerHTML = getShowHeader(countBasketHeader);
}

function showPastaPizzaWater() {

    let idNumber = 0
    idNumber = showItemsFromMenu('menuPasta', 'pastaTemplates', idNumber);
    idNumber = showItemsFromMenu('menuPizza', 'pizzaTemplates', idNumber);
    showItemsFromMenu('menuWater', 'waterTemplates', idNumber);
}

function showItemsFromMenu(selectedArray, selectedId, idNumber) {

    for (index = 0; index < eval(selectedArray).length; index++) {

        let selectedIdRef = document.getElementById(selectedId);

        let priceToFixed = eval(selectedArray)[index].price.toFixed(2);

        let menuCurrent1 = eval(selectedArray)[index].name;
        let menuCurrent2 = eval(selectedArray)[index].description;

        selectedIdRef.innerHTML += getShowPastaPizzaWater(priceToFixed, menuCurrent1, menuCurrent2, idNumber);
        idNumber ++;
    }
    return idNumber;
}

function bodyStart() {

    const mediaQuery = window.matchMedia('(max-width: 708px)')

    if (mediaQuery.matches) {

        document.getElementById('menuDiv').classList.add('d-none');

    } else {

        scrollToPlace('body-start');
    }
}

function scrollToPlace(place) {

    const section1 = document.getElementById(place);

    if (section1) {

        window.scrollTo({
            top: section1.offsetTop,
            behavior: "smooth"
        });
    }
}





function getShowHeader(countBasketHeader) {
    return `
    
        <header class="hR">
            <img src="logo/logo.png" alt="" class="logo-header">

            <div class="header-basket">
                <img src="img/arrow1.png" alt="" class="arrow-header d-none" id="arrowHeader">
                <b>${countBasketHeader}</b>
                <img src="img/basket3.png" alt="" onclick="menuOnOff()" class="basket-header">
            </div>
        </header>
    `;
}

function getShowPastaPizzaWater(priceToFixed, menuCurrent1, menuCurrent2, idNumber) {
    return `

        <div class="eat-div" id="eatDivId${idNumber}">

            <div class="eat-div-plus" onclick="addToBasket('${menuCurrent1}', ${priceToFixed}, ${idNumber})"><img src="img/plus.svg" alt=""></div>

            <div class="eat-name"><b>${menuCurrent1}</b></div>
            <div class="eat-description">${menuCurrent2}</div>
            <div class="eat-price"><b>${priceToFixed}€</b></div>

        </div>
    `;
}

function getShowChoice(index, priceToShowChoice) {
    return `

        <div class="choice">

            <div class="choice-name"> <b>${basketItems[index].name}</b></div>

            <div class="choice-cost">
                <img src="img/minus.svg" alt="" style="margin-left: 6px" class="minus-plus" onclick="minusItem(${index})"> ${basketItems[index].itemCount}
                <img src="img/plus.svg" alt="" style="margin-right: 20px" class="minus-plus" onclick="plusItem(${index})"> ${priceToShowChoice}€
                <img src="img/trash.svg" alt="" style="margin-right: 6px; margin-left: 16px; width: 14px;" class="trash" onclick="trashItem(${index})">
            </div>

        </div>
    `;
}

function getNoChoice() {
    return `

    <div class='emptyBasket'>Der Warenkorb ist leer</div>

    `;
}

function getShowSum(showDeliveryPrice, showSubtotal, showAllCost) {
    return `

                        <div class="sum123" style="color: #97999cff; margin-top: 23px"> Summe <div>${showSubtotal}€</div>
                    </div>
                    <div class="sum123" style="color: #97999cff"> Lieferkosten <div>${showDeliveryPrice}€</div>
                    </div>
                    <div class="sum123" style="color: #050505ff"><b> Gesamt </b>
                        <div><b>${showAllCost}€</b></div>
                    </div>


    `;
}

function getAccepted() {
    return `

       <br><br><br><br>

       <h3 style="text-align: center; color: #97999cff">Ihre Bestellung wurde angenommen !</h3>
   `;
}


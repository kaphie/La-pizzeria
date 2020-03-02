var sizePrice, crustPrice, toppingPrice ;

function sizeSelect(sizePricing,sizeSlecting){
    this.sizePricing=sizePricing;
    this.sizeSlecting=sizeSlecting;
}

function crustSelect(crustPricing,crustSelecting){
    this.crustPricing=crustPricing;
    this.crustSelecting=crustSelecting
}

function toppingSelect(toppingPricing,toppingSelecting){
    this.toppingPricing=toppingPricing;
    this.toppingSelecting=toppingSelect;
}

function pizzaNumberSelect(pieces){
    this.pieces=pieces;
}

function finalPriceSubmition(finalPrice){
    this.finalPrice=finalPrice;
    return finalPrice;
}

function finalPriceDelivery(deliveryFinalPrice){
    this.deliveryFinalPrice=deliveryFinalPrice;
}



$(Document).ready(function(){

    $("#pizza_size_select").click(function(){
        var checkedSize = $("input[name='size']:checked").val();
        if(checkedSize=='small'){
            sizePrice = 300;
            } 
            else if(checkedSize=='medium'){
                sizePrice = 500;
             } 
             else if(checkedSize=='large'){
                sizePrice = 1200;
             }
             sizePricing = sizePrice;
         sizeSlecting = selectedSize;
         $("#price_show1").text(sizePricing);
         console.log(sizePricing);
         console.log(sizeSlecting)
     });

});
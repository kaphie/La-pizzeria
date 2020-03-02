$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
//Get inputs
    $("#checkout").click(function () {
        let quality =$(".quality option:selected").val()
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (q, s, c, t, n, total) => {
            return {q, s, c, t, n, total};
        };

        //check price
        let price, totalPrice;
        switch (quality) {
            case quality = "high_quality":
                switch (size) {
                    case size = "small":
                        price = 300;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 500;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
          
            case quality = "medium_quality":
                switch (size) {
                    case size = "small":
                        price = 300;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 500;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case quality = "low_quality":
                switch (size) {
                    case size = "small":
                        price = 300;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 500;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "gluten-free") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
               
              
                
                break;
        }
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 50;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 50;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 130;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 180;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 180;
                break;

        }

        //Execute order function
        let newOrder = order(quality, size, crust, topping, number, totalPrice);
        console.log(newOrder); // test func

        //create a new object
        // let myOrder = JSON.stringify(JSON.parse(newOrder));

        //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Quality :   " + newOrder.q+ "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });


    //Pick Up
    $(".delivernot").click(function () {

    });

});
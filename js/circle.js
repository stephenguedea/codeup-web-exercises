// (function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        //property1/method
        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            var area = Math.PI * Math.pow(circle.radius, 2);
            // var area = Math.PI * Math.pow(this.radius, 2);
            return area; // TODO: return the proper value
        },

        //property2/method
        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            var finalAmount;
            if (doRounding) {
                finalAmount = Math.round(circle.getArea());
            } else {
                finalAmount = circle.getArea();
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + finalAmount);
        }
    };



    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
// })();

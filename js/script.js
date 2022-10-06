// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function displays "Hello, World!".
 * @constructor
 */
function doMathClicked() {
  document.getElementById("multiply-math").innerHTML =
    "<p>Area =  " + 5 * 3 + "</p>"
  document.getElementById("add-math").innerHTML =
    "<p>perimeter = " + 2 * (5 + 3) + "</p>"
}

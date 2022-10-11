"use strict";

drawRectangle();

function drawRectangle() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    context.fillRect(0, 0, 300, 300);



    context.fillStyle = "#66FF00";
    context.fillRect(25, 25, 100, 50);
    context.fillRect(175, 25, 100, 50);
    context.fillRect(25, 225, 250, 50);
    context.fillRect(25, 125, 250, 50);

    context.stroke();
}
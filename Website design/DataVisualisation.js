function clearCanvas (context) {
    context.clearRect(0,0, 900,600);
}

//create the function to draw pie chart
function pieChart(data, colour, title) {

    //design for texts
    context.font = "0.75em cursive";
    context.fillText("Courses",590,47);
    context.textAlign = "centre";

    //variables for center coordinates and radius
    let x = 650;
    let y = 300;
    let radius = 200;

    //variable for the starting coordinate
    let startCood = 0;

    //length of the data
    let dataLength = data.length;

    //calculate the sum of the values of options
    let sum = 0;
    for (let i = 0; i<dataLength; i++) {
        sum +=data[i][1];
    }

    for (let i = 0; i<dataLength; i++) {
        //calculate the percentage to determine the part each option will take up
        let percentage = (data[i][1])/sum *100;

        //determine the end point of each pie
        let endCood = startCood + (2/100*percentage); //2 is the end point of a circle

        //start drawing pie chart and colour it
        context.beginPath();
        context.fillStyle = colour[i];
        context.moveTo(x,y);
        context.arc(x, y, radius, startCood*Math.PI, endCood*Math.PI); 
        context.fill();

        //to start another pie
        startCood = endCood;

        // draw labels for each element 
        context.fillText( data[ i ][ 0 ] + " (" + data[ i ][ 1 ] + ")", 220, 52 * i + 220 ); 
        context.rect( 180, (50 * i) + 200, 35, 35 ); 
        context.fill(); 
    }
}  

//define function to draw the grid
function drawGrid(context, xCood1, yCood1, xCood2, yCood2, colour) {
    context.save();
    context.strokeStyle = colour;
    context.beginPath();
    context.moveTo(xCood1, yCood1);
    context.lineTo(xCood2, yCood2);
    context.stroke();
    context.restore();
}

//define function to draw the a single bar
function drawEachBar(context, xCood, yCood, width, height, colour) {
    context.save();
    context.fillStyle = colour;
    context.fillRect(xCood, 500-yCood-height, width, height);
    context.restore();
}

//draw the whole bar chart
function drawBars(context, data,c) {
    for (let i = 0; i<data.length; i++) {
        drawEachBar(context, (100+30*i), 190, 30, data[i]*45, c[i]);
    }
    //draw the x-axis
    drawGrid(context, 80, 311, 810, 311, "rgb(255,255,255)");

    //draw labels
    context.font = "0.75em cursive";
    context.fillStyle = "#ffffff";
    context.fillText("Com1001", 160, 340);
    context.fillText("Com1003", 390, 340);
    context.fillText("Com1008", 640, 340);
    context.font = "1em cursive";
    context.fillStyle = "#FF9800";
    context.fillText("Courses", 400, 37);
}

//function to draw 1 line graph
function drawLine(context, x1, data, colour){
    for (let i=0; i<data.length; i++) {
        drawGrid(context, x1, 300- data[i]*45, (x1+90), 300-data[i+1]*45, colour);
        x1 = x1+90;
    }
}


//function to draw a complete line graph
function drawLines1 () {
    drawLine(context, 300, dataLine1, colourSet1);
    drawLine(context, 300, dataLine2, colourSet2);
    drawLine(context, 300, dataLine3, colourSet3);

    // draw legends
    for (let i = 0; i<3; i++) {
        context.beginPath();
        context.fillStyle = colourSetA[i];
        context.rect(480, 450 + 50*i, 35, 35); 
        context.fill(); 
        context.fillText(nameModule[i], 520, 472 + 52*i); 
    }
    
    drawGrid(context,250,400,900,400,"white");
}

function drawLines2 () {
    drawLine(context, 300, dataLine1, colourSet4);
    drawLine(context, 300, dataLine2, colourSet5);
    drawLine(context, 300, dataLine3, colourSet6);

   // draw legends
   for (let i = 0; i<3; i++) {
    context.beginPath();
    context.fillStyle = colourSetB[i];
    context.rect(480, 450 + 50*i, 35, 35); 
    context.fill(); 
    context.fillText(nameModule[i], 520, 472 + 52*i); 
}

drawGrid(context,250,400,900,400,"white");
}

let context = document.getElementById("canvas").getContext("2d");
context.font = "0.75em cursive";

//colour and data sets for pie charts
let data = [["Com1001", 15.6], ["Com1003", 19], ["Com1008", 24]];

colourA = ["rgb(173, 93, 12)", "rgb(15, 148, 121)", "rgb(148, 15, 124)"];
colourB = ["rgb(66, 138, 245)", "rgb(102, 54, 150)", "rgb(125, 22, 48)"];


//colour and data sets for bar charts
let dataFile = [0.1,4,3,3,2,3,0.5, 0, 2,5,1,2,3,5,1, 0, 4,3,4,5,3,2,3];

colourC = ["rgb(173, 50, 12)", "rgb(84, 66, 245)", "rgb(245, 161, 66)","rgb(66, 245, 191)", "rgb(168, 50, 129)","rgb(235, 64, 52)", "rgb(9, 153, 31)", "rgb(0,0,0)","rgb(173, 50, 12)", "rgb(84, 66, 245)", "rgb(245, 161, 66)","rgb(66, 245, 191)", "rgb(168, 50, 129)","rgb(235, 64, 52)", "rgb(9, 153, 31)","rgb(0,0,0)", "rgb(173, 50, 12)", "rgb(84, 66, 245)", "rgb(245, 161, 66)","rgb(66, 245, 191)", "rgb(168, 50, 129)","rgb(235, 64, 52)", "rgb(9, 153, 31)"]

colourD = ["rgb(105, 168, 50)","rgb(50, 168, 164)","rgb(168, 50, 154)","rgb(168, 113, 50)","rgb(194, 14, 56)","rgb(93, 50, 168)","rgb(204, 94, 125)","rgb(0,0,0)","rgb(105, 168, 50)","rgb(50, 168, 164)","rgb(168, 50, 154)","rgb(168, 113, 50)","rgb(194, 14, 56)","rgb(93, 50, 168)","rgb(204, 94, 125)","rgb(0,0,0)","rgb(105, 168, 50)","rgb(50, 168, 164)","rgb(168, 50, 154)","rgb(168, 113, 50)","rgb(194, 14, 56)","rgb(93, 50, 168)","rgb(204, 94, 125)"]

//colour and data sets of line graph
colourSet1 = "rgb(255,255,255)"; 
colourSet2 = "rgb(19, 189, 13)";
colourSet3 = "rgb(255,25,255)";
colourSetA = ["rgb(255,255,255)", "rgb(19, 189, 13)", "rgb(255,25,255)"]; //array to store all colour options for line graph 1

colourSet4 = "rgb(54,165,197)";  
colourSet5 = "rgb(194, 14, 56)";
colourSet6 = "rgb(236,185,66)";
colourSetB = ["rgb(54,165,197)", "rgb(194, 14, 56)", "rgb(236,185,66)"];  //array to store all colour options for line graph 2

dataLine1 = [0.1,4,3,3,2,3,0.5];
dataLine2 = [2,5,1,2,3,5,1];
dataLine3 = [1,1,4,3,3,2,1,0.5];


//data about name of modules
nameModule = ["Com1001", "Com1003", "Com1008"];
colourSet = ["#FFFFFF", "#37FFFF", "#FF19FF"];


//clear button
let clear = document.getElementById("clear");
clear.addEventListener("click", function() {clearCanvas(context) } );

//run the function with buttons to change colours
let pie1 = document.getElementById("pie1");
pie1.addEventListener("click", function() {pieChart(data, colourA, "Course") } );
let pie2 = document.getElementById("pie2");
pie2.addEventListener("click", function() {pieChart(data, colourB, "Course") } );

//run the function with buttons to change colours of bar chart
let bar1 = document.getElementById("bar1");
bar1.addEventListener("click", function() {drawBars(context, dataFile, colourC) } );
let bar2 = document.getElementById("bar2");
bar2.addEventListener("click", function() {drawBars(context, dataFile, colourD) } );

//run the function with buttons to change colours of line graph
let line1 = document.getElementById("line1");
line1.addEventListener("click", function() {drawLines1()});
let line2 = document.getElementById("line2");
line2.addEventListener("click", function() {drawLines2()});





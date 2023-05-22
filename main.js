// Generate a random number within the range of quick_draw_data_set
var quick_draw_data_set = [
    "Cat",
    "Dog",
    "Car",
    "Flower",
    "Tree",
    "House",
    "Sun",
    "Bird",
    "Cake",
    "Rocket",
    "Chair",
    "Book",
    "Apple",
    "Banana",
    "Fish",
    "Star",
    "Heart",
    "Smiley Face",
    "Guitar",
    "Clock"
];
var random_number = Math.floor(Math.random() * quick_draw_data_set.length);

// Print the random sketch name
console.log(quick_draw_data_set[random_number]);

// Get the random sketch name and store it in the sketch variable
var sketch = quick_draw_data_set[random_number];

// Update the text of the span tag which is holding the Sketch to be drawn
document.getElementById("sketchToDraw").innerText = "Sketch To be Drawn: " + sketch;

// Define the variables
var timer_counter = 0;
var timer_check = "";
var drawn_sketch = "";
var answer_holder = "";
var score = 0;

// Function to create and update the canvas
function updateCanvas() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // Set canvas background color to white
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Generate random number to select a sketch
    var random_number = Math.floor(Math.random() * quick_draw_data_set.length);

    // Get the sketch name and update the HTML element
    var sketch = quick_draw_data_set[random_number];
    document.getElementById("sketchName").innerText = sketch;
}

// Function to set up the canvas and drawing
function setup() {
    var canvas = document.getElementById("canvas");
    canvas.width = 280;
    canvas.height = 280;
    canvas.style.margin = "0 auto";
    canvas.style.background = "white";

    // Function to check if the drawn sketch matches the sketch to be drawn
    function draw() {
        check_sketch();

        if (drawn_sketch === sketch) {
            answer_holder = "set";
            score++;
            document.getElementById("score").innerText = "Score: " + score;
        }
    }

    // Function to check the drawn sketch and update time
    function check_sketch() {
        timer_counter++;
        document.getElementById("timer").innerText = "Timer: " + timer_counter;
        console.log(timer_counter);

        if (timer_counter > 400) {
            timer_counter = 0;
            timer_check = "completed";
        }

        if (timer_check === "completed" || answer_holder === "set") {
            timer_check = "";
            answer_holder = "";
            updateCanvas();
        }
    }

    // Call the draw function to start checking sketches
    draw();
}

// Call the updateCanvas function to initialize the canvas
updateCanvas();

// Call the setup function to set up canvas and drawing logic
setup();
/****************** YOUR NAME: Leilanie Dizon

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let duration = 0;
let xyzCost = 100;
let cprgCost = 213;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate(model){

    let costLabel = document.getElementById("calculated-cost");
    let totalCost = 0;
    
    if (model === "XYZ") {
        totalCost = duration * xyzCost;
    } 
    
    else if (model === "CPRG") {
        totalCost = duration * cprgCost;
    } 
    costLabel.innerText = totalCost.toFixed(2);
}

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */

let modelButton = document.getElementById("model-button");

    modelButton.addEventListener("click", changeModel);

    function changeModel() {

        let modelName = document.getElementById("model-text");
        let model = "";

        if (modelName.innerText.includes("XYZ")) {
            modelName.innerHTML = "Model CPRG";
            model = "CPRG";
        } 
        
        else if (modelName.innerText.includes("CPRG")) {
            modelName.innerHTML = "Model XYZ";
            model = "XYZ";
        }

        recalculate(model);
    }

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

let durationButton = document.getElementById("duration-button");

function changeDuration() {

    let model = "";

    let durationText = document.getElementById("duration-text");   
    
    let modelName = document.getElementById("model-text");
    
    duration = parseInt(prompt("Enter new duration:"));
    durationText.innerHTML = duration;
    
    if (modelName.innerText.includes("XYZ")) {
        model = "XYZ";
    
    }

    else if (modelName.innerText.includes("CPRG")) {
            model = "CPRG";
    }
    recalculate(model);
}

durationButton.addEventListener("click", changeDuration);


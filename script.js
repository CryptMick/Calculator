const input = document.querySelector("input");
const ac = document.querySelector("#AC");
const del = document.querySelector("#del");
const equal = document.querySelector("#equal");

// Delete "del" to remove errors in user's inputs
del.onclick = () => { input.value = input.value.replace(input.value.substr(-1),""); str.pop();};

// Reset Calculation input/answer
ac.onclick = () => {
   location.reload();
}

// perform simple Arimethic calculations 
function operate(opt, frt, scd) {
    if (opt === "+") return frt + scd;
    if (opt === "-") return frt - scd;
    if (opt === "/") return frt / scd;
    if (opt === "*") return frt * scd;
    if (opt === "%") return frt % scd;
}
// array to hold user inputs for arithmetic operation 
let str = [];

// allow keyboard input from user
document.addEventListener("keydown", (event) => {
    if (input.value.length <= 21) {
        if(event.key === "1"|| event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === "0") {
            str.push(event.key);
            input.value += event.key;
        }
        if (event.key === "Backspace") {
            input.value = input.value.replace(input.value.substr(-1),""); str.pop();
        }
    } else{
        str = [];
        input.style.cssText = "Color: yellow; font-size: 30px;";
        return input.value = "MAX INPUT REACHED";
    }
return input.value;
});


// Display user's input
function display (ele) {
    if (input.value.length  <= 21) {
        input.value += ele;
        str.push(ele);
    } else {
        str = [];
        input.style.cssText = "Color: yellow; font-size: 30px;";
        return input.value = "MAX INPUT REACHED";
    }
}

// Find index number of (+, -, /, *, or %) in str return -1 if not found
function locate(str) {
    let ind = str.findIndex((item) => item === "+"|| item === "-" || item === "/"|| item === "*" || item === "%");
    return ind;
}
equal.onclick = () => {
    // Determine the number times mathematical operation will hold
    const rep = str.filter((item) => item === "+"|| item === "-" || item === "/"|| item === "*" || item === "%");
    const lengh = rep.length;
    let ans;
    
    // loop through user's inputs and parse operate() to get answer...
    for (let i = 1; i <= lengh; i++) {
        frt = parseFloat(str.splice(0,locate(str)).join(""));
        opt = str[locate(str)];
        str.shift();
    if (locate(str) === -1) {
        sec = parseFloat(str.splice(0).join(""));
        ans = operate(opt, frt, sec);
        str.push(ans.toString());
        input.value = Math.round( ans*1000)/1000;
    } else{
        sec = parseFloat(str.splice(0,locate(str)).join(""));
        ans = operate(opt, frt, sec);
        str.unshift(ans.toString());
    }
    }
};
const input = document.getElementById("input");
const far = document.getElementById("tofrh");
const cel = document.getElementById("tocel");
const result = document.getElementById("result");
let temp;

function convert(){

    temp = Number(input.value);
    if(document.getElementById("tofrh").checked){
        temp = temp * 9/5 + 32;
        result.textContent = temp + " ℉";
    }
    else if(document.getElementById("tocel").checked){
        temp = (temp - 32 * (9/5));
        result.textContent = temp + " ℉";
    }
    else{
        result.textContent = "select a unit";
    }
}

const countvalue = document.querySelector("#counter");
const steps = document.querySelector("#step");

const increment = () =>{
    let value = parseInt(countvalue.innerHTML);
    value = value + parseInt(steps.value);
    countvalue.innerHTML = value;
};

const decrement = () => {
    let value = parseInt(countvalue.innerHTML);
    value = value - parseInt(steps.value);
    countvalue.innerHTML = value;
}

const reset = () => {
    countvalue.innerHTML = 0;
}
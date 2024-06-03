let count = 0;

const countcontent = document.getElementById("Count");


function decrease() {
    count--;
    updateCount();
}

function reset() {
    count = 0;
    updateCount();
}

function Increase() {
    count++;
    updateCount();
}

function updateCount() {
    countcontent.textContent = count;
    if (count > 0){
        Count.style.color = 'green';
    } else if(count < 0) {
        Count.style.color = 'red';
    }
    else {
        Count.style.color = 'black'; 
    }
}

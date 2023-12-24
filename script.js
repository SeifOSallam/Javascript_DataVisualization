var inputElement = document.getElementById("input");
var searchElement = document.getElementById("search");
var arrayContainer = document.getElementById("arraycontainer");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
inputElement.addEventListener("keyup", (key) => {
    if (key.code == "Enter") {
        var input = inputElement.value;
        var dataarr = input.split(" ");
        dataarr.forEach(element => {
            var val = parseInt(element);
            if (!isNaN(val)) {
                arrayContainer.innerHTML += `
                <div class ="datacontainer" id="datacontainer">
                    <span id="data" class="data">
                        ${val}
                    </span>
                </div>
                `
            }
        });
        inputElement.value = ""
    }
});
searchElement.addEventListener("keyup", (key) => {
    if (key.code == "Enter") {
        var input = searchElement.value;
        var val = parseInt(input);
        var dataarr = input.split(" ");
        binarySearch(val);
    }
});

async function binarySearch(value) {
    var dataCollection = document.getElementsByClassName("data");
    var arrayValues = [];
    for (var i=0;i<dataCollection.length;i++) {
        arrayValues[i] = parseInt(dataCollection[i].textContent);
    }
    var dataContainer = document.getElementsByClassName("datacontainer");
    fixElements(dataContainer, 0, dataContainer.length);
    var leftindex = 0;
    var rightindex = arrayValues.length-1;
    while (leftindex <= rightindex) {
        var midindex = Math.ceil(((leftindex+rightindex)/2));
        console.log("Mid value: " + arrayValues[midindex]);
        console.log("Mid index: " + midindex);
        if (value > arrayValues[midindex]) {
            leftindex = midindex+1;
        }
        else if (value < arrayValues[midindex]) {
            rightindex = midindex-1;
        }
        else {
            console.log("WE DONE");
            fixElements(dataContainer, leftindex, rightindex);
            return;
        }
        fixElements(dataContainer, leftindex, rightindex);
        const secondsTimer = async (seconds) => {
            let sec = seconds;
            let i = 0;
            while (i <= sec) {
                console.log(i);
                await sleep(1000);
                i++;
            }
        };
        
        secondsTimer();
    }
}
function fixElements(elements, startindex, endindex) {
    for (var i=0;i<elements.length;i++) {
        if (i >= startindex && i <= endindex) {
            elements[i].style.backgroundColor = 'green';
        }
        else {
            elements[i].style.backgroundColor = 'red';
        }
    }
}

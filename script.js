var inputElement = document.getElementById("input");
var searchElement = document.getElementById("search");
var arrayContainer = document.getElementById("arraycontainer");
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
        var input = inputElement.value;
        var val = parseInt(input);
        var dataarr = input.split(" ");
        binarySearch(val);
    }
});

function binarySearch(value) {
    var dataCollection = document.getElementsByClassName("data");
    var arrayValues = [];
    for (var i=0;i<dataCollection.length;i++) {
        arrayValues[i] = parseInt(dataCollection[i].textContent);
    }
    arrayValues.forEach((data) => {
        console.log(data);
    });
}

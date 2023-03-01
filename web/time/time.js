
/* TEST
fetch("/api/test")
.then(response => response.json())
.then(result => {
    const testWrapperDiv = document.getElementById("test-wrapper");

    result.data.forEach(test => {
        const testDiv = document.createElement("div");
        
        const testTimeP = document.createElement("p");
        testTimeP.innerText = test.days || "No days";
        testDiv.appendChild(testTimeP);

        const breakBr = document.createElement("br");
        testDiv.appendChild(breakBr);

        testWrapperDiv.appendChild(testDiv);
    });
}); */

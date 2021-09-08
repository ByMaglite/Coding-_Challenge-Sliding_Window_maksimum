const btnSolution = document.getElementById("btn");
const solitionDiv = document.getElementById("solition");
const jsBtn = document.getElementById("js");
const pythonBtn = document.getElementById("python");
const reset = document.getElementById("reset");



btnSolution.addEventListener("click", () => {

    let arr = [10, 5, 2, 7, 8, 7];
    let k = 3;
    let n = arr.length
    let maxArr = []

    for (let i = 0; i < (n - k) + 1; i++) {
        let newArr = arr.slice(i, i + k)
        maxArr.push(Math.max(...newArr))
    }

    solitionDiv.style.display = "block";

    jsBtn.addEventListener("click", () => {
        var contentJs = document.createElement("img");
        contentJs.src ="JS_solition.png"
        solitionDiv.appendChild(contentJs)       
    });

    pythonBtn.addEventListener("click", () => {
        var contentPython = document.createElement("img");
        contentPython.src ="Python_solition.png";        
        solitionDiv.appendChild(contentPython);     
    });

    reset.addEventListener("click", ()=>{
        var e = solitionDiv.lastChild;
        solitionDiv.removeChild(e);      
    })
})

       
   




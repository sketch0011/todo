
let bd1 = document.querySelector(".bd1");
let bd2 = document.querySelector(".bd2");
let itm = document.querySelector(".itm");

let nn = function () {

    go.children[0].style.width = "18";
    setTimeout(() => { go.children[0].style.width = "" }, 100);
    let b = inp.value.trim();
    if (b !== "") {
        bd1.style.display = "none";
        bd2.style.display = "flex";

        let newp = document.createElement("div");
        newp.setAttribute("class", "itm");
        newp.innerHTML = itm.innerHTML;
        newp.children[0].innerText = b;
        bd2.appendChild(newp);
    }
    inp.value = "";
}

let inp = document.querySelector("#inp");
let go = document.querySelector(".go");
go.addEventListener('mousedown', nn);
inp.addEventListener("keydown", (event) => {
    let b = inp.value.trim();
    if ((event.key == "Enter") && (b !== "")) {
        nn();
        inp.value = "";
    };
});

bd2.addEventListener("click", (event) => {
    if (event.target.nodeName == "path") {
        event.target.parentElement.parentElement.parentElement.style.position = "relative";
        event.target.parentElement.parentElement.parentElement.style.backgroundColor = "rgb(200,0,0)";
        event.target.parentElement.parentElement.parentElement.style.paddingLeft = "100%";
        setTimeout(() => { event.target.parentElement.parentElement.parentElement.remove(); }, 300)
        if (bd2.childElementCount == 2) {
            setTimeout(() => { bd1.style.display = ""; bd2.style.display = ""; }, 300)
        }
    }
})

let mod = document.querySelector(".mod");
let ui = document.querySelector(".ui");
let body = document.querySelector("body");
let msp = 1;

mod.addEventListener("click", () => {
    if (msp == 1) {
        mod.style.backgroundColor = "rgb(50,50,50)";
        mod.children[0].style.right = "3vh"
        mod.children[0].style.backgroundColor = "rgb(200,200,200)";
        mod.children[0].children[0].children[0].style.fill = "rgb(0,0,0)";
        mod.parentElement.style.backgroundColor = "rgb(180,180,180)"
        ui.style.backgroundColor = "rgb(200,200,200)";
        ui.style.color = "rgb(50,50,50)";
        msp = msp-1;
    }
    else {
        mod.style.backgroundColor = "";
        mod.children[0].style.right = ""
        mod.children[0].style.backgroundColor = "";
        mod.children[0].children[0].children[0].style.fill = "";
        mod.parentElement.style.backgroundColor = ""
        ui.style.backgroundColor = "";
        ui.style.color = "";
        msp = msp+1;
    }
})
// console.log("Start Todo");
// let todo = [];
// let x = 1;
// let y=1;

// while (true) {

//     let mth = prompt("Plese enter your request");

//     if (mth == "quit") {
//         console.log("Quitted Todo");
//         break;
//     }
//     if (mth == "list") {
//         console.log("____________________");
//         for (let i=0;i<todo.length;i++) {
//             console.log(i+1,todo[i]);
//         }
//         console.log("____________________");
//     }
//     else if (mth == "add") {
//         todo.push(prompt("Plese enter the task you want to added"));

//         console.log(x++,"task added");
//     }
//     else if(mth=="delete"){
//         for (let i=0;i<todo.length;i++) {
//             console.log(i+1,todo[i]);
//         }
//         todo.splice(prompt("Enter the index you want to delete")-1,1);

//         console.log(y++,"task deleted");
//     }
//     else if(mth=="edit"){
//         for (let i=0;i<todo.length;i++) {
//             console.log(i+1,todo[i]);
//         }
//         todo[prompt("Enter the index you want to edit")-1]=prompt("Enter your edited task");
//         console.log("Task edited");
//     }
//     else{
//         console.log("Wrong request");
//         break;
//     }
// }
//_______________________________________________________e n t e r   t e x t . . . __________________
// let an = ["ab", "c", "gg", "tg"]
// let a = "enter text here..."

//     setTimeout(() => {
//         for (let i = 1; i <= a.length; i++) {
//             b = a.replace(a.slice(i), "");
//             console.log(b.slice(-1));}
//     }, 1000)
// console.log(...a)


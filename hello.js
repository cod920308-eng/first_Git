let txt = document.getElementById("text");
let parea = document.getElementById("printSpace");
let printText = "Onepiece is the Best";

function helo() {


    if (txt.innerText === "Hisashiburi da na… Nakama") {
        txt.innerText = "Long time no see... Friend";
    } else {
        txt.innerText = "Hisashiburi da na… Nakama";
    }
}

function p() {


    if (txt.innerText === "Hisashiburi da na… Nakama") {
        txt.innerText = "Long time no see... Friend";
    } else {
        txt.innerText = "Hisashiburi da na… Nakama";
    }
}

function print() {
    let howmany = document.getElementById("time").value;
    let prints = "";

    for (let i = 0; i < howmany; i++) {
        prints += printText + "<br>";
    }

    parea.innerHTML = prints;
}





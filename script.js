var addbtn = document.getElementsByClassName("add")
var subbtn = document.getElementsByClassName("sub")
var removebtn = document.getElementsByClassName("delete")
var heart = document.getElementsByClassName("like")
var total = document.querySelector(".total")

function add() {
    var parent = this.parentNode;
    var itemnb = parent.querySelector(".itemnb");
    itemnb.innerHTML = parseInt(itemnb.innerHTML) + 1;
    var grandParent = parent.parentNode;
    var price = grandParent.querySelector(".price").innerHTML;
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price);
}

function sub() {
    var parent = this.parentNode;
    var itemnb = parent.querySelector(".itemnb");
    if (itemnb.innerHTML > 0) {
        itemnb.innerHTML = parseInt(itemnb.innerHTML) - 1;
        var grandParent = parent.parentNode;
        var price = grandParent.querySelector(".price").innerHTML;
        total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
    }
    
}

function remove() {
    var parent = this.parentNode;
    var grandParent = parent.parentNode;
    var price = grandParent.querySelector(".price").innerHTML;
    var itemnb = grandParent.querySelector(".itemnb").innerHTML;
    total.innerHTML = parseInt(total.innerHTML) - parseInt(price) * parseInt(itemnb);
    grandParent.remove();
}

function like() {
    if (this.style.color == "red") {
        this.style.color = "black";
    } else {
        this.style.color = "red";
    }
}

for (var i = 0; i < addbtn.length; i++) {
    addbtn[i].addEventListener("click", add);
    subbtn[i].addEventListener("click", sub);
    removebtn[i].addEventListener("click", remove);
    heart[i].addEventListener("click", like);
}
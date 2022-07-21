

function preis(){
    let laenge = document.getElementById("laenge").value;
    let breite = document.getElementById("breite").value;
    
    let sum = laenge * breite;
    let pr = 130
    let total = pr * sum
    alert(total + "Euro würde der Auftrag kosten")
    document.getElementById("result").innerHTML += `<p>Der Preis beträgt <strong>${total} Euro </strong> für ${sum} Quadratmeter Fläche</p>`;
  
    
}


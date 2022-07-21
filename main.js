

function preis(){
    let laenge = document.getElementById("laenge").value;
    let breite = document.getElementById("breite").value;
    
    let sum = laenge * breite;
    let pr = 130
    let total = pr * sum
  
    document.getElementById("result").innerHTML = `<p>Der Preis beträgt <strong>${total} Euro </strong> für ${sum} Quadratmeter Fläche</p>`;
  
    
}


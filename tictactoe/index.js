document.getElementById("one").addEventListener("click",function() {markSpot(this);});
document.getElementById("two").addEventListener("click",function() {markSpot(this);});
document.getElementById("three").addEventListener("click",function() {markSpot(this);});
document.getElementById("four").addEventListener("click",function() {markSpot(this);});
document.getElementById("five").addEventListener("click",function() {markSpot(this);});
document.getElementById("six").addEventListener("click",function() {markSpot(this);});
document.getElementById("seven").addEventListener("click",function() {markSpot(this);});
document.getElementById("eight").addEventListener("click",function() {markSpot(this);});
document.getElementById("nine").addEventListener("click",function() {markSpot(this);});

function markSpot(e){var doc = document.getElementById(e.id); 
    doc.innerText = "x";}
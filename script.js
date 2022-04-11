let slider = tns({
    container : ".my-slider",
    "slideBy" : 1,
    "speed": 400,
    "nav" : false,
    controlsContainer : "#controls",
    prevButton : ".previous",
    nextButton : ".next",
    items : 3,
    gutter:20
    
});
let div = document.querySelector('.hide');
div.style.display = 'none';

function appear(){
     div.style.display = 'block';
     div2.style.display = 'none';
     
}

let div2 = document.querySelector('.hide2');
div2.style.display = 'none';

function appear2(){
    div.style.display = 'none';
    div2.style.display = 'block';
     
};

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
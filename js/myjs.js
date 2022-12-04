const navigacia = ["მთავარი", "კოლექცია", "სიახლეები", "ჩვენს შესახებ", "კონტაქტი"];
const links=["index.html", "collection.html", "news.html", "aboutus.html", "contact.html"]
let navigationlength = navigacia.length;
let linkslength= links.length

let txt = "<ul>";
for( let i=0; i<navigationlength; i++){
    txt += '<li><a href=' + links[i] + ">" + navigacia[i] + "</a></li>";
}
txt += "</ul>";
document.getElementById("nav").innerHTML = txt;

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

document.getElementById("img1").innerHTML='<img src="img/img1.png" alt="surati acidsto">';
document.getElementById("img2").innerHTML='<img src="img/img2.png" alt="surati acidsto">';
document.getElementById("img3").innerHTML='<img src="img/img3.png" alt="surati acidsto">';

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }



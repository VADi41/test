var aboutScrollHeight;
var galleryScrollHeight;
var contactsScrollHeight;

if (window.matchMedia("(min-height: 970px)").matches) {
  console.log("970");
  aboutScrollHeight = 800;
  galleryScrollHeight = 1800;
  contactsScrollHeight = 2700;
} else if (window.matchMedia("(min-height: 820px)").matches) {
  console.log("820");
  aboutScrollHeight = 600;
  galleryScrollHeight = 1300;
  contactsScrollHeight = 2000;
}

setTimeout(function(){
  if(document.getElementById('leftStroke')){
  document.getElementById('leftStroke').setAttribute('id', 'leftStrokeOut');}
},1000);
setTimeout(function(){
  if(document.getElementById('centerStroke')){
  document.getElementById('centerStroke').setAttribute('id', 'centerStrokeOut');}
},1100);

var minLeftImg=1;
var maxLeftImg=9;
var randomLeftImg =Math.floor(Math.random() * (+maxLeftImg - +minLeftImg)) + +minLeftImg;
var  z= 'url("img/left ('+ randomLeftImg + ').jpg")';;//img[Math.floor(Math.random()*img.length)];
document.getElementById("img-left").style.backgroundImage = z;

setTimeout(function(){
  if(document.getElementById('body')){
  document.getElementById('body').style.overflow = "auto";}
},500);

var minGallery = 1;
var maxGallery = 42;
var list = document.getElementsByClassName('galleryImg');
var imgArray = [];
for (var i = 1; i < maxGallery; i++) {
  imgArray.push(i);
}
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
shuffle(imgArray);
for (var i = 0; i < list.length; i++){

  var random = Math.floor(Math.random() * (+maxGallery - +minGallery)) + +minGallery;
  list[i].style.backgroundImage='url("img/gallery/gallery (' +imgArray[i]+').jpg")';

}

/*var position = $(window).scrollTop();
var target = "#main"
var x=0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > position) {
    /*x++;
    console.log("scrolling downwards", x);*/
    /*var isScrolling;
window.addEventListener('scroll', function ( event ) {
	window.clearTimeout( isScrolling );
	isScrolling = setTimeout(function() {
		console.log( 'Scrolling has stopped.' );
	}, 66);

var pageHeight = window.innerHeight;



    $('html, body').stop().animate({
        scrollTop: target.top
    }, 1000);
  } else {
    console.log("scrolling upwards");
  }
  position = scroll;
});*/



$('#rightText[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 750);
    }
});
$('#centerButton[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 750);
    }
});



$(window).scroll(function() {
	  console.log("scrolling");
  if ($(this).scrollTop() > aboutScrollHeight) {
    document.getElementById("sideMenu").classList.add("sideMenuDown");
    document.getElementById("sideMenu").classList.remove("sideMenuUp");
    document.getElementById("aboutP").classList.remove("fadeOutDown");
    document.getElementById("aboutP").classList.add("fadeInDown");
    document.getElementById("mainBlock").classList.add("mainBlockFadeRight");


    setTimeout(function(){
        document.getElementById("mainStroke").classList.add("mainStrokeSlideIn");
    },500);
    setTimeout(function(){
        document.getElementById("mainStrokeRight").classList.add("mainStrokeSlideIn");
    },750);
    setTimeout(function(){
        document.getElementById('mainStroke').style.height = "500px";
    },1000);
    setTimeout(function(){
      document.getElementById('mainImgBlock').classList.add("mainImgFadeInLeft");
      document.getElementById('mainImgBlockSecond').classList.add("mainImgFadeInLeft");
    },1250);
    setTimeout(function(){
        document.getElementById("mainStroke").classList.remove("mainStrokeSlideIn");
        document.getElementById('mainStroke').classList.add("mainStrokeSlideOut");
    },1750);
    setTimeout(function(){
        document.getElementById("mainStrokeRight").classList.remove("mainStrokeSlideIn");
        document.getElementById('mainStrokeRight').classList.add("mainStrokeSlideOut");
    },1900);


    setTimeout(function(){
      if(document.getElementById('mainText')){
        document.getElementById('mainBlockLeftBack').classList.add("mainBlockLeftBackSlideIn");
        document.getElementById('mainBlockRightBack').classList.add("mainBlockRightBackSlideIn");
        document.getElementById('mainTextBlock').style.gridColumn = "2/2";
        document.getElementById('mainH').style.marginLeft = "50px";
        document.getElementById('mainText').style.marginLeft = "50px";
        document.getElementById('mainTextSecond').style.marginLeft = "50px";}
    },2000);
  } else {
    document.getElementById("sideMenu").classList.remove("sideMenuDown");
    document.getElementById("sideMenu").classList.add("sideMenuUp");
  }
});

var scrolledGallery = new Boolean(false);
console.log(scrolledGallery);
$(window).scroll(function() {
  if ($(this).scrollTop() > galleryScrollHeight) {
    if(scrolledGallery==false){
    document.getElementById("galleryP").classList.add("fadeInDown");
    document.getElementById("galleryBlock").style.width = "100%";

    setTimeout(function(){
        document.getElementById('galleryBlockMiddleStroke').style.height = "100%";
    },500);

    setTimeout(function(){
        document.getElementById('galleryBlockLeftMiddleStroke').style.height = "100%";
        document.getElementById('galleryBlockRightMiddleStroke').style.height = "100%";
    },750);

    setTimeout(function(){
        document.getElementById('galleryBlockLeftStroke').style.height = "100%";
        document.getElementById('galleryBlockRightStroke').style.height = "100%";
    },1000);

    setTimeout(function(){
      var list = document.getElementsByClassName('firstLeft');
      for (var i = 0; i < list.length; i++){
        list[i].classList.add("mainImgFadeInRight");}
      var list = document.getElementsByClassName('firstRight');
      for (var i = 0; i < list.length; i++){
        list[i].classList.add("mainImgFadeInLeft");}
    },1250);
    setTimeout(function(){
      var list = document.getElementsByClassName('secondLeft');
      for (var i = 0; i < list.length; i++){
        list[i].classList.add("mainImgFadeInRight");}
      var list = document.getElementsByClassName('secondRight');
      for (var i = 0; i < list.length; i++){
        list[i].classList.add("mainImgFadeInLeft");}
    },1750);
    setTimeout(function(){
      var list = document.getElementsByClassName('thirdLeft');
      for (var i = 0; i < list.length; i++){
        list[i].classList.add("mainImgFadeInRight");}
      var list = document.getElementsByClassName('thirdRight');
      for (var i = 0; i < list.length; i++){
        list[i].classList.add("mainImgFadeInLeft");}
    },2250);

    setTimeout(function(){
        //document.getElementById('galleryBlockLeftStroke').style.alignSelf = "normal";
        //document.getElementById('galleryBlockRightStroke').style.alignSelf = "normal";
        document.getElementById('galleryBlockLeftStroke').style.height = "0%";
        document.getElementById('galleryBlockRightStroke').style.height = "0%";
    },3250);

    setTimeout(function(){
        //document.getElementById('galleryBlockLeftMiddleStroke').style.alignSelf = "end";
        //document.getElementById('galleryBlockRightMiddleStroke').style.alignSelf = "end";
        document.getElementById('galleryBlockLeftMiddleStroke').style.height = "0%";
        document.getElementById('galleryBlockRightMiddleStroke').style.height = "0%";
    },3500);

    setTimeout(function(){
        //document.getElementById('galleryBlockMiddleStroke').style.alignSelf = "normal";
        document.getElementById('galleryBlockMiddleStroke').style.height = "0%";
    },3750);
    scrolledGallery = true;
    console.log(scrolledGallery);
  }
}
});

var scrolledContacts = new Boolean(false);
console.log(scrolledContacts);
$(window).scroll(function() {
  if ($(this).scrollTop() > contactsScrollHeight) {
    if (scrolledContacts == false) {
      document.getElementById("contactsP").classList.add("fadeInDown");

      document.getElementById("contactsRight").classList.add("fadeInRight");
      document.getElementById("contactsRight").style.display = "grid";
      document.getElementById("contactsLeft").classList.add("fadeInLeft");
      document.getElementById("contactsLeft").style.display = "block";

      setTimeout(function(){
        document.getElementById("contactsRightStroke").classList.add("slideInUp");
        document.getElementById("contactsRightStroke").style.display = "block";
      },500);

      setTimeout(function(){
        document.getElementById("mapGoogle").classList.add("fadeInRight");
        document.getElementById("mapGoogle").style.display = "block";
      },1000);

      setTimeout(function(){
        document.getElementById("contactsRightStroke").classList.add("slideOutUp");
      },1500);

      scrolledContacts = true;
    }
  }
});

// GALLERY
console.log(window.getComputedStyle(document.getElementById("galleryShow")).display);
function imgRef(item){
  var backImg = item.style.backgroundImage;
  //console.log(backImg);
  document.getElementById("galleryShow").style.display = "grid";
      document.getElementById("galleryShowMainImg").style.backgroundImage = backImg;
  setTimeout(function(){
    document.getElementById("galleryShowWrap").style.opacity = "0.85";
  },50);
  if (window.getComputedStyle(document.getElementById("galleryShow")).display === "grid") {
    document.getElementById('body').style.overflow = "hidden";
  }
}
function galleryShowClose(){
  document.getElementById("galleryShow").style.display = "none";
  document.getElementById('body').style.overflow = "auto";
  document.getElementById("galleryShowWrap").style.opacity = "0";
}

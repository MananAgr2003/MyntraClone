function showMenu(){

    document.getElementById('popboxs').style.display = "block";
}       
function hideMenu(){

    document.getElementById('popboxs').style.display = "none";
}       
function getimg0() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner.webp');

}
function getimg1() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner3.webp');

}
function getimg2() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner2.jpg');

}
function getimg3() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner4.webp');
}
function getimg4() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner5.webp');
}
function getimg5() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner6.webp');
}
function getimg6() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner7.webp');
}
function getimg7() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner8.webp');
}
function getimg8() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner9.webp');
}
function getimg9() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner10.webp');
}
function getimg10() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner11.jpg');
}
function getimg11() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner12.webp');
}
function getimg12() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner13.webp');
}
function getimg13() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner14.jpg');
}

function getimg14() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner11.jpg');
}
function getimg15() {
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/banners/banner6.webp');
}
function getdeal0(){
    let myimg = document.getElementById('deal');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/deals/deal1.webp');
}
function getdeal1(){
    let myimg = document.getElementById('deal');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/deals/deal2.webp');
}
function getdeal2(){
    let myimg = document.getElementById('deal');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/deals/deal3.webp');
}
function getdeal3(){
    let myimg = document.getElementById('deal');
    let img = myimg.getAttribute('src');
    myimg.setAttribute('src', './img/deals/deal4.webp');
}
function navpops(){
   document.getElementById('navpop').style.display = 'block';
   document.getElementById('navpop').style.left = '130px';
}
function navpops1(){
   document.getElementById('navpop').style.display = 'block';
   document.getElementById('navpop').style.left = '200px';
}
function navpops2(){
    document.getElementById('navpop').style.display = 'block';
    document.getElementById('navpop').style.left = '290px';
}
function navpops3(){
    document.getElementById('navpop').style.display = 'block';
    document.getElementById('navpop').style.left = '360px';
}
function navpops4(){
    document.getElementById('navpop').style.display = 'block';
    document.getElementById('navpop').style.left = '440px';
}
function navpops5(){
    document.getElementById('navpop').style.left = '530px';
   document.getElementById('navpop').style.display = 'block';
}
function navclose(){
   document.getElementById('navpop').style.display = 'none';
   document.getElementById('navpop').style.left = '130px';
}
var num = 0;
setInterval(function () {

    num = num + 1;
    if (num > 15) {
        num = 0;
    }
    let myimg = document.getElementById('con1_img');
    let img = myimg.getAttribute('src');

    if (num == 0) {
        getimg0();

    } else if (num == 1) {
        getimg1();
    }
    else if (num == 2) {
        getimg2();
    }
    else if (num == 3) {
        getimg3();
    }
    else if (num == 4) {
        getimg4();
    }
    else if (num == 5) {
        getimg5();
    }
    else if (num == 6) {
        getimg6();
    }
    else if (num == 7) {
        getimg7();
    }
    else if (num == 8) {
        getimg8();
    }
    else if (num == 9) {
        getimg9();
    }
    else if (num == 10) {
        getimg10();
    }
    else if (num == 11) {
        getimg11();
    }
    else if (num == 12) {
        getimg12();
    }
    else if (num == 13) {
        getimg13();
    }
    else if (num == 14) {
        getimg14();
    }
    else if (num == 15) {
        getimg15();
    }
}
    , 3500);
    var num1 = 0;

    setInterval(function(){

        num1 = num1 + 1;
        if(num1 >4){
            num1 = 0;
        }

        if(num1==0){
            getdeal0();
        }

        if(num1==1){
            getdeal1();
        }

        if(num1==2){
            getdeal2();
        }

        if(num1==3){
            getdeal3();
        }

    }, 3500);


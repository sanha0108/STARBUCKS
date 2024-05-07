// 색상 변경 팝업
const openBtn = document.querySelector(".colormode");
const popup = document.querySelector(".popup");
const XBtn = document.querySelector(".popupXbtn")

openBtn.addEventListener('click', function(){
    popup.classList.add('show');
});

XBtn.addEventListener('click', function(){
    popup.classList.remove('show');
});

// 메인 색 변경
const maincolorTag1 = document.querySelector(".topline");
const maincolorTag2 = document.querySelector(".left");

const rangeRed = document.querySelector("input.red");
const rangeGreen = document.querySelector("input.green");
const rangeBlue = document.querySelector("input.blue");

rangeRed.addEventListener("input", function(){
    maincolorTag1.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
    maincolorTag2.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
})
rangeGreen.addEventListener("input", function(){
    maincolorTag1.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
    maincolorTag2.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
})
rangeBlue.addEventListener("input", function(){
    maincolorTag1.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
    maincolorTag2.style.backgroundColor = `rgb(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value})`;
})

// 체크박스 필터
const CBallProduct = document.querySelector("#product_all");
const CBcoldbrew = document.querySelector("#product_coldbrew");
const CBbrewed = document.querySelector("#product_brewed");
const CBespresso = document.querySelector("#product_espresso");
const CBfrappuccino = document.querySelector("#product_frappuccino");

const Concoldbrew = document.querySelector(".coldbrewCon");
const Conbrewed = document.querySelector(".brewedCon");
const Conespresso = document.querySelector(".espressoCon");
const Confrappuccino = document.querySelector(".frappuccinoCon");

//전체상품
CBallProduct.addEventListener('change', function(){
    if(CBallProduct.checked){
        Concoldbrew.style.display = 'block';
        Conbrewed.style.display = 'block';
        Conespresso.style.display = 'block';
        Confrappuccino.style.display = 'block';
    }else{
        Concoldbrew.style.display = 'none';
        Conbrewed.style.display = 'none';
        Conespresso.style.display = 'none';
        Confrappuccino.style.display = 'none';
    }
});

//콜드브루
CBcoldbrew.addEventListener('change', function(){
    if(CBcoldbrew.checked){
        Concoldbrew.style.display = 'block';
    }else{
        Concoldbrew.style.display = 'none';
    }
});

//브루드
CBbrewed.addEventListener('change', function(){
    if(CBbrewed.checked){
        Conbrewed.style.display = 'block';
    }else{
        Conbrewed.style.display = 'none';
    }
});

//에스프레소
CBespresso.addEventListener('change', function(){
    if(CBespresso.checked){
        Conespresso.style.display = 'block';
    }else{
        Conespresso.style.display = 'none';
    }
});

//프라푸치노
CBfrappuccino.addEventListener('change', function(){
    if(CBfrappuccino.checked){
        Confrappuccino.style.display = 'block';
    }else{
        Confrappuccino.style.display = 'none';
    }
});
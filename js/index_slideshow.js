//slideshow

//photo
var imgList=[
	"images/1.jpg",
	"images/2.jpg",
	"images/3.jpg"
];

//画像とナビの要素を追加
for(var i=0; i<imgList.length; i++){
	//li要素取得(slide)
	var slide=document.createElement("li");
	//li要素を画像タグに埋め込む
	slide.innerHTML = "<img src='" + imgList[i] + "'>";
	//li要素をslider-innerの子要素として追加
	document.getElementsByClassName("slider-inner")[0].appendChild(slide);

	//li要素を取得(nav)
	var nav=document.createElement("li");
	//data-nav-indexに数値を割り振る
	nav.setAttribute("data-nav-index",i);
	//li要素をnavの子要素として追加
	document.getElementsByClassName("nav")[0].appendChild(nav);
}
//imageSlideに画像の1枚の要素を格納
var imageSlide=document.getElementsByClassName("slider-inner")[0].getElementsByClassName("li");
//dotNavigationにどっとナビの１つの要素を格納
var dotNavigation=document.getElementsByClassName("nav")[0].getElementsByClassName("li");
//nowIndex:〇枚目の画像を表示中というインデックス番号を格納する変数
var nowIndex=0;
//現在表示されている画像とドットナビにクラス名をつける
imageSlide[nowIndex].classList.add("show");
dotNavigation[nowIndex].classList.add("current");
// スライダーに表示する画像のパス

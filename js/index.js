$(function(){
	$(".g_button").on("click", function(){
		// ハンバーガーメニューの位置を設定するための変数
		var rightVal = 0;
		if($(this).hasClass("open")) {
			// 「open」クラスを持つ要素はメニューを開いた状態に設定
			rightVal = -300;
			// メニューを開いたら次回クリック時は閉じた状態になるよう設定
			$(this).removeClass("open");
		} else {
			// 「open」クラスを持たない要素はメニューを閉じた状態に設定 (rightVal は0の状態 )
			// メニューを開いたら次回クリック時は閉じた状態になるよう設定
			$(this).addClass("open");
		}

		$("#gnavi").stop().animate({
			right: rightVal
		}, 200);
	});

// title animation
	$('h1').textillate({
		loop:false,
		in:{
			effect:'rollIn',
			delay:50,
			sequence:true
		}
	});

//scrollanimation

//preform

	ScrollOut({
		threshold: 0.5,
		onShown: function(element, ctx, scrollingElement) {
			element.classList.add('active');
		}
	});


//animate.css

	ScrollOut({
  	onShown(el) {
    	el.classList.add("animated");
  	}
	});

	ScrollOut({
	  onShown: function(el) {
	    // remove the class
	    el.classList.remove("animated");

	    // force reflow
	    void el.offsetWidth;

	    // re-add the animated cl
	    el.classList.add("animated");
	  }
	});

//slick
/*	$('.slider').slick({
		dots:true,
	});*/
	$('.slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
		adaptiveHeight: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider',
	  dots: true,
		arrows: false,
	  centerMode: true,
	  focusOnSelect: true
	});
})

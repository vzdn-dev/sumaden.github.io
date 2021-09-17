$(function(){

	window.addEventListener("resize", function(){
		align();
	});
	align();

	function align() {
		var h = document.documentElement.clientHeight;
		document.querySelector(":root").style.setProperty("--doc-height", h + "px");
	}
	
	
	
	
	
	
	
	$("body").addClass("type2021");
	
	
	var wrap = $(".wrapper")[0];
	var pointer = wrap.getElementsByTagName("*")[0];
	
	
	initHeader();
	initFooter();
	
	if(window.isTop) {
		initKV();
	}
	
	console.log(window.isTop)
	if(window.isTop) {
		initShortcut();
	}
	



	if(window.isTop) {
		var js = document.createElement("script");
		js.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js";
		document.body.appendChild(js);
		
		var timer = setInterval(function(){
			if($("body").slick) {
				clearInterval(timer);
				initSlick();
			}
		}, 100);
	}
	
	
	
	
	
	
	window.addEventListener("scroll", function(){
		var y = window.scrollY;
		if(y > window.innerHeight) {
			$("body").addClass("scrolled");
		}
		else {
			$("body").removeClass("scrolled");
		}
		
		if(y >= $("body").outerHeight(true) - window.innerHeight) {
			$("body").addClass("scroll-ended");
		}
		else {
			$("body").removeClass("scroll-ended");
		}
	}, {passive:false});
	
	
	$(".pagetop").on("click", function(){
		$("html,body").animate({scrollTop:0}, {duration:800});
	});
	
	
	
	
	function initSlick() {
		
		$(".kv-slide-pc .inner").slick({
			infinite: true,
			slidesToShow: 1,
			centerPadding: 0,
			centerMode: true,
			dots: true,
			arrows: false,
			accessibility: false
		});
		
		$(".kv-slide-sp .inner").slick({
			infinite: true,
			slidesToShow: 1,
			centerPadding: 0,
			centerMode: true,
			dots: true,
			arrows: false,
			accessibility: false
		});
		
		if(window.innerWidth >= 770) {
			return;
		}
		
		
		
	
		$(".slide1 .row").slick({
			infinite: false,
			slidesToShow: 1,
			centerPadding: 0,
			dots: true,
			arrows: false,
			accessibility: false
		});
		
		$(".slide2 .row").slick({
			infinite: false,
			slidesToShow: 1,
			centerPadding: 0,
			dots: true,
			arrows: false,
			accessibility: false
		});
		
		$(".slide3 .row").slick({
			infinite: false,
			slidesToShow: 1,
			centerPadding: 0,
			dots: true,
			arrows: false,
			accessibility: false
		});
		
		$(".slide4 .row").slick({
			infinite: false,
			slidesToShow: 1,
			centerPadding: 0,
			dots: true,
			arrows: false,
			accessibility: false
		});
	}
	
	
	
	
	
	
	function initHeader(){
		var head = document.createElement("header");
		head.id = "head2021";

		var container1 = document.createElement("div");
		container1.className = "container1";
		head.appendChild(container1);

		var container2 = document.createElement("div");
		container2.className = "container2";
		head.appendChild(container2);
		
		

		var h1 = document.createElement("h1");
		var a = document.createElement("a");
		var logo = new Image();
		logo.src = "https://ferret-one.akamaized.net/images/601027b45a4bb90f72514165/original.svg";

		a.href = "https://smaden.com/";
		a.appendChild(logo);
		h1.appendChild(a);
		container1.appendChild(h1);
		wrap.insertBefore(head, pointer);


		
		
		var btn = document.createElement("a");
		btn.className = "menu-button";
		btn.innerHTML = "<i></i><i></i><i></i>";
		container1.appendChild(btn);
		
		btn.addEventListener("click", function(){
			if($("body").hasClass("opened-menu")) {
				$("body").removeClass("opened-menu");
			}
			else {
				$("body").addClass("opened-menu");
			}
		});


		var nav1 = document.createElement("nav");
		var ul1 = document.createElement("ul");
		nav1.className = "global";

		var li1 = document.createElement("li");
		li1.className = "doc";
		var a1 = document.createElement("a");
		a1.innerHTML = "<i></i>シミュレーション";
		a1.href = "https://smaden.enechange.jp/try/input";

		var li2 = document.createElement("li");
		li2.className = "appli";
		var a2 = document.createElement("a");
		a2.innerHTML = "<i></i>お申し込み";
		a2.href = "https://portal.smaden.com/general/sApplication/";

		var li3 = document.createElement("li");
		li3.className = "login";
		var a3 = document.createElement("a");
		a3.innerHTML = "<i></i>ログイン";
		a3.href = "https://smaden.com/loginselect";

		li1.appendChild(a1);
		li2.appendChild(a2);
		li3.appendChild(a3);
		ul1.appendChild(li1);
		ul1.appendChild(li2);
		ul1.appendChild(li3);
		nav1.appendChild(ul1);
		container2.appendChild(nav1);


		var links = [
			["スマ電CO2ゼロについて", "https://smaden.com/co2zero/about"],
			["ご契約の流れ", "https://smaden.com/co2zero/flow"],
			["料金プラン", "https://smaden.com/co2zero/plan"],
			["よくあるご質問", "https://smaden.com/co2zero/faq"]
		];

		var nav2 = document.createElement("nav");
		var ul2 = document.createElement("ul");
		nav2.className = "sub";
		nav2.appendChild(ul2);
		container2.appendChild(nav2);

		for(var i=0; i<links.length; i++) {
			var _li = document.createElement("li");
			var _a = document.createElement("a");
			_a.innerHTML = links[i][0];
			_a.href = links[i][1];
			_li.appendChild(_a);
			ul2.appendChild(_li);
		}
	}
	
	
	

	
	
	function initFooter(){
		var foot = document.createElement("footer");
		foot.id = "foot2021";
		
		var links1 = [
			["スマ電CO2ゼロについて", "https://smaden.com/co2zero/about"],
			["ご契約の流れ", "https://smaden.com/co2zero/flow"],
			["料金プラン", "https://smaden.com/co2zero/plan"],
			["よくあるご質問", "https://smaden.com/co2zero/faq"]
		];

		var nav1 = document.createElement("nav");
		var ul1 = document.createElement("ul");
		nav1.className = "main";
		nav1.appendChild(ul1);
		foot.appendChild(nav1);

		for(var i=0; i<links1.length; i++) {
			var li1 = document.createElement("li");
			var a1 = document.createElement("a");
			a1.innerHTML = links1[i][0];
			a1.href = links1[i][1];
			li1.appendChild(a1);
			ul1.appendChild(li1);
		}
		
		
		
		var links2 = [
			["お申込みフォーム", "https://portal.smaden.com/general/sApplication/"],
			["スマート通電 by スマ電のご案内", "https://smaden.com/partner"],
			["運営会社", "https://smaden.com/info/company.html"],
			["個人情報保護方針", "https://smaden.com/info/privacy.html"],
			["電気供給約款", "https://ferret-one.akamaized.net/files/60ee2c5546f54a2c8c0a32c7/agrement.pdf"],
			["重要事項説明", "https://smaden.com/info/important.html"]
		];

		var nav2 = document.createElement("nav");
		var ul2 = document.createElement("ul");
		nav2.className = "sub";
		nav2.appendChild(ul2);
		foot.appendChild(nav2);

		for(var i=0; i<links2.length; i++) {
			var li2 = document.createElement("li");
			var a2 = document.createElement("a");
			a2.innerHTML = links2[i][0];
			a2.href = links2[i][1];
			li2.appendChild(a2);
			ul2.appendChild(li2);
		}
		
		

		var logoBox = document.createElement("div");
		var a = document.createElement("a");
		var logo = new Image();
		logoBox.className = "logo";
		logo.src = "https://ferret-one.akamaized.net/images/601027c45a4bb91049514267/original.svg";
		
		logoBox.appendChild(a);
		a.appendChild(logo);
		foot.appendChild(logoBox);
		
		var copy = document.createElement("div");
		copy.className = "copyright";
		copy.innerHTML = "&copy;株式会社アイ・グリッド・ソリューションズ";
		
		
		var pagetop = document.createElement("a");
		pagetop.className = "pagetop";
		
		
		foot.appendChild(pagetop);
		foot.appendChild(copy);
		wrap.appendChild(foot);
	}
	
	
	
	
	function initShortcut() {
		var ul1 = document.createElement("ul");
		ul1.className = "shortcut";
		
		var li1 = document.createElement("li");
		li1.className = "doc";
		var a1 = document.createElement("a");
		a1.innerHTML = "<i></i><span>シミュレーション</span>";
		a1.href = "https://smaden.enechange.jp/try/input";
		li1.appendChild(a1);
		ul1.appendChild(li1);
		
		var li2 = document.createElement("li");
		li2.className = "appli";
		var a2 = document.createElement("a");
		a2.innerHTML = "<i></i><span>お申し込み</span>";
		a2.href = "https://portal.smaden.com/general/sApplication/";
		li2.appendChild(a2);
		ul1.appendChild(li2);
		
		var ul2 = $(ul1).clone()[0];
		
		if(document.getElementById("kv")) {
			var pointer = document.getElementById("kv");
			pointer.parentNode.insertBefore(ul1, pointer.nextSibling);
		}
		document.getElementById("foot2021").appendChild(ul2);
	}
	
	
	
	
	
	
	
	
	function initKV() {
		var kv = document.createElement("div");
		kv.id = "kv";
		wrap.insertBefore(kv, pointer);
		
		var kvpc = document.createElement("div");
		var kvpcInner = document.createElement("div");
		kvpc.className = "kv-slide-pc";
		kvpcInner.className = "inner";
		kvpc.appendChild(kvpcInner);
		kv.appendChild(kvpc);
		$(".kv-pc .col img").each(function(){
			var slide = document.createElement("div");
			var img = new Image();
			img.src = this.getAttribute("data-original");
			slide.appendChild(img);
			kvpcInner.appendChild(slide);
		});
		

		var kvsp = document.createElement("div");
		var kvspInner = document.createElement("div");
		kvsp.className = "kv-slide-sp";
		kvspInner.className = "inner";
		kvsp.appendChild(kvspInner);
		kv.appendChild(kvsp);
		$(".kv-sp .col img").each(function(){
			var slide = document.createElement("div");
			var img = new Image();
			img.src = this.getAttribute("data-original");
			slide.appendChild(img);
			kvspInner.appendChild(slide);
		});
	}
	
});

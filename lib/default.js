jsLazyLoad=function(e){function t(t,n){var s,c=e.createElement(t);for(s in n)n.hasOwnProperty(s)&&c.setAttribute(s,n[s]);return c}function n(e){var t,n,s=i[e];s&&(t=s.callback,n=s.urls,n.shift(),u=0,n.length||(t&&t.call(s.context,s.obj),i[e]=null,f[e].length&&c(e)))}function s(){var t=navigator.userAgent;o={async:e.createElement("script").async===!0},(o.webkit=/AppleWebKit\//.test(t))||(o.ie=/MSIE|Trident/.test(t))||(o.opera=/Opera/.test(t))||(o.gecko=/Gecko\//.test(t))||(o.unknown=!0)}function c(c,u,h,g,d){var y,p,b,k,m,v,j=function(){n(c)},w="css"===c,T=[];if(o||s(),u)if(u="string"==typeof u?[u]:u.concat(),w||o.async||o.gecko||o.opera)f[c].push({urls:u,callback:h,obj:g,context:d});else for(y=0,p=u.length;p>y;++y)f[c].push({urls:[u[y]],callback:y===p-1?h:null,obj:g,context:d});if(!i[c]&&(k=i[c]=f[c].shift())){for(l||(l=e.head||e.getElementsByTagName("head")[0]),m=k.urls.concat(),y=0,p=m.length;p>y;++y)v=m[y],w?b=o.gecko?t("style"):t("link",{href:v,rel:"stylesheet"}):(b=t("script",{src:v}),b.async=!1),b.className="jsLazyLoad",b.setAttribute("charset","utf-8"),o.ie&&!w&&"onreadystatechange"in b&&!("draggable"in b)?b.onreadystatechange=function(){/loaded|complete/.test(b.readyState)&&(b.onreadystatechange=null,j())}:w&&(o.gecko||o.webkit)?o.webkit?(k.urls[y]=b.href,r()):(b.innerHTML='@import "'+v+'";',a(b)):b.onload=b.onerror=j,T.push(b);for(y=0,p=T.length;p>y;++y)l.appendChild(T[y])}}function a(e){var t;try{t=!!e.sheet.cssRules}catch(s){return u+=1,void(200>u?setTimeout(function(){a(e)},50):t&&n("css"))}n("css")}function r(){var e,t=i.css;if(t){for(e=h.length;--e>=0;)if(h[e].href===t.urls[0]){n("css");break}u+=1,t&&(200>u?setTimeout(r,50):n("css"))}}var o,l,i={},u=0,f={css:[],js:[]},h=e.styleSheets;return{css:function(e,t,n,s){c("css",e,t,n,s)},js:function(e,t,n,s){c("js",e,t,n,s)}}}(this.document);

var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
var isChrome = !!window.chrome && !isOpera;
var isIE = /*@cc_on!@*/false || !!document.documentMode;

document.documentElement.className = 'js';

function bars() {
	var bars = document.getElementById("bars");
	var navi = document.getElementById("navi");
	if (bars.getAttribute('data-flag') != 1) {
		bars.className+= " clickd";
		bars.setAttribute('data-flag',"1");
		navi.className+= " clickd";
	}
	else {
		bars.className = "bars";
		bars.setAttribute('data-flag',"0");
		navi.className = "";
	}
}

function briefFileDelete(element) {
	$(element).remove();
}

jsLazyLoad.css('https://fonts.googleapis.com/css?family=PT+Sans+Narrow|Ubuntu+Condensed&amp;subset=cyrillic,cyrillic-ext');
jsLazyLoad.js('/lib/pace.min.js', function() {
	jsLazyLoad.css('/lib/pace-theme-minimal.css');
	Pace.on('done', function() {
		document.getElementById("xhr-main-loader").className+= " hdn";
	});
});
document.addEventListener("DOMContentLoaded", function(event) {
	jsLazyLoad.js('/lib/jquery-3.2.1.min.js',function() {
		jsLazyLoad.css('/lib/uikit.core.css',function() {
			jsLazyLoad.js('/lib/uikit.core.js',function() {
				$(function(){
					var progressbar = $("#progressbar"),
					bar         = progressbar.find('.uk-progress-bar'),
					settings    = {
						action: '/', // upload url
						allow : '*.(jpg|jpeg|gif|png|svg|ai|psd|xls|xlsx|pdf|doc|docx)',
						loadstart: function() {
							bar.css("width", "0%").text("0%");
							progressbar.removeClass("uk-hidden");
					    },
						progress: function(percent) {
							percent = Math.ceil(percent);
							bar.css("width", percent+"%").text(percent+"%");
						},
						allcomplete: function(response) {
							bar.css("width", "100%").text("100%");
							setTimeout(function(){
								progressbar.addClass("uk-hidden");
							}, 250);
						}
					};
					var select = UIkit.uploadSelect($("#upload-select"), settings),
					drop   = UIkit.uploadDrop($("#upload-drop"), settings);
				});
			});
		});
		
		jsLazyLoad.js('/lib/jquery.scrollTo.min.js',function() {
			$("[data-scrollto]").click(function() {
				var target = $(this).attr('data-scrollto');
				
				$.scrollTo(target,1000);
			});
		});
		
		jsLazyLoad.css('/lib/default.css');
	});
	
	window.onload = function() {
		jsLazyLoad.css('/lib/fontawesome-all.min.css');
		jsLazyLoad.css('/lib/owl.carousel.min.css',function() {
			jsLazyLoad.css('/lib/owl.theme.default.min.css',function() {
				jsLazyLoad.js('/lib/owl.carousel.min.js',function() {
					$('.feedback-owl').owlCarousel({
						items: 1,
						loop: true,
						autoHeight:	false,
						nav: false,
						autoplay: true,
						autoplayTimeout: 5000,
						autoplayHoverPause:	true,
						dots: true,
						navText: ['&#xf104;','&#xf105;'],
						autoHeight:true
					});
				});
			});
		});
		jsLazyLoad.css('/lib/jquery.fancybox.min.css',function() {
			jsLazyLoad.js('/lib/jquery.fancybox.min.js',function() {
				jsLazyLoad.js('/lib/fancybox.morphing.js',function() {
					$("[data-morphing]").fancyMorph({
						hash: 'brief',
						afterLoad: function() {
							$(".fancybox-morphing").addClass("whited");
							$(".morphing-btn-clone").addClass("whited");
						},
						beforeClose: function() {
							$(".fancybox-morphing").removeClass("whited");
							$(".morphing-btn-clone").removeClass("whited");
						}
					});
				});
			});
		});
		jsLazyLoad.css('/lib/modal.css',function() {
			jsLazyLoad.js('/lib/modal.js');
		});
		jsLazyLoad.js('/lib/lazyload.min.js', function() {
			$.ajaxSetup({
				cache: true
			});
			$("img.lazyload").lazyload();
		});
	}
	
	window.onscroll = function() {
		var scrollTop = window.pageYOffset;
		var header = document.getElementById("header");
		var header_div = document.getElementById("header-div");
		
		if (scrollTop > window.innerHeight) {
			if (header.getAttribute('data-flag') != 1) {
				header.className+= " scrolld";
				header_div.className+= " scrolld";
				header.setAttribute('data-flag',"1");
			}
		}
		else {
			if (header.getAttribute('data-flag') == 1) {
				header.className = "";
				header_div.className = "header-div";
				header.setAttribute('data-flag',"0");
			}
		}
	}
});
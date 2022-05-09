// // event pada saat link di klik
// // https://www.youtube.com/watch?v=a4ONOOvbM24 
// // CARA MEMBUAT WEBSITE SENDIRI DARI NOL SAMPAI ONLINE ( FULL LENGKAP )
// $('.page-scroll').on('click', function(event){

// 	// ambil isi href
// 	var tujuan = $(this).attr('href');
// 	// tangkap element
// 	var elemenTujuan = $(tujuan);

// 	// pindahkan scroll
// 	$('body').animate({
// 		scrollTop: elemenTujuan.offset().top - 50
// 	}, 1250, 'easeInOutExpo');

// 	event.preventDefault();
// });

// // paralax
// $(window).scroll(function(){
// 	var wScroll = $(this).scrollTop();
	
// 	$('.jumbotron img').css({
// 		'transform' : 'translete(0px, '+ wScroll/4 +'%)'
// 	});
// });
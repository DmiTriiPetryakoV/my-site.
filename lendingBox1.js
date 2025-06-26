$(function (){
	var scrollTo = function($node){
		$('html,body').animate({
			scrollTop: $node.offset().top
		},400)
	}
$('#header a').click(function() {
		var nodea = this;
		var $a = $(nodea);
		var linkHash = nodea.hash;
		var $target = $(linkHash);
		scrollTo($target)
	})
})
var scrollTo = function($node){
 $('html, body').stop().animate({
 scrollTop: $node.offset().top
 }, 400);
};
const box = document.getElementById('lending-box')
let svet = document.getElementById('svet');
const header = document.getElementById('header')
const headerA = document.getElementsByClassName('header-a')
const ava = document.getElementById('avatar')
const logo = document.getElementById('logo')
const lendingTwo = document.getElementById('lending-box2')
const card = document.getElementsByClassName('card')
const boxstrong = document.getElementsByClassName('boxstrong')
svet.addEventListener('click', function () {
      this.classList.toggle('active');
        box.classList.toggle('active-box')
        header.classList.toggle('active-header')
		document.body.classList.toggle('active-body')
		ava.classList.toggle('active-ava')
		svet.classList.toggle('active-svet')
		logo.classList.toggle('active-logo')
		lendingTwo.classList.toggle('active-boxTwo')
			for(let b = 0;b < boxstrong.length; b++){
		boxstrong[b].classList.toggle('active-strong')
		}
				for(let x =0;x < card.length; x++){
			card[x].classList.toggle('active-card')
		}
		for (let i = 0; i < headerA.length; i++) {
 headerA[i].classList.toggle('activeA');
 }
})

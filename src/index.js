import $ from 'jquery';
import "./style/style.scss";

const nav = $("nav");


$(document).ready(function(){
    $('a').click(function(){
        const selector = $(this).attr('href');
        const targetEl = $(selector);
        $("html, body").animate({
        scrollTop: targetEl.offset().top}, 500);
        if($(window).width()<900){
            nav.css("display", 'none');
        }
    })
   

    $(".navMobile").click(function(){
        nav.slideToggle();
    })
                    
})
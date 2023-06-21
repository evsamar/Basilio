$(document).ready(function(){

    // Открытие всплывающего окна по клику на кнопку
    $('.card-product').click(function(){
      $('.popup').fadeIn();
    });
    
    // Загрузка HTML-файла по клику на кнопку
    $('.card-product').click(function(){
      $('.popup').load('popup.html');
    });
    
    // Закрытие всплывающего окна по клику на кнопку
    $('.symbol-close').click(function(){
      $('.popup').fadeOut();
    });
  });
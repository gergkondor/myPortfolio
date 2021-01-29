function darkLight() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var headerBar = document.querySelector('header');
    headerBar.classList.toggle("dark-mode");
 }
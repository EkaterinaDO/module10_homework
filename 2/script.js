const button = document.querySelector(".btn");

button.addEventListener("click", () => {

    const windowHeight = window.screen.height;
    const windowWidth = window.screen.width;

    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    alert(`Размер экрана монитора:
   высота - ${windowHeight} 
   ширина - ${windowWidth}.
Размер области просмотра: 
   высота - ${innerHeight} 
   ширина - ${innerWidth}`)
        ;

});
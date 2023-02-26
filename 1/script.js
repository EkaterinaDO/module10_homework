// Задание 1.

// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.

const btn = document.querySelector(".btn");
const wrapperIcon = document.querySelector(".wrapper_icon");

btn.addEventListener("click", () => {

    wrapperIcon.classList.toggle('svg');

});


const mouseOverContainer = document.getElementById('mouseOverContainer');
const mouseOutContainer = document.getElementById('mouseOutContainer');
const onBlurInput = document.getElementById('blurInput');

mouseOverContainer.onmouseover = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    mouseOverContainer.style.backgroundColor = randomColor;
};

mouseOutContainer.onmouseout = () => {
    alert('¡Has salido del cuadro del medio! (onmouseout event)');
}

onBlurInput.onblur = () => {
    alert('¡Se ha perdido el foco del input! (onblur event)');
}
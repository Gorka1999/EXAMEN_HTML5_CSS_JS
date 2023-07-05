function startSlider() {
    const slider = document.querySelector('.slider');
    let position = 0;

    setInterval(() => {
        position -= 20; // Tamaño del slider
        slider.style.transform = `translateX(${position}rem)`;
    }, 3000); // Cambiar el slide cada 3 segundos (3000 ms)
}

startSlider();

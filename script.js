document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const circle = document.getElementById('circle');
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
  })
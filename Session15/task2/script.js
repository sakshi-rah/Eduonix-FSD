const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyPressed = key.textContent;

    document.getElementById("charKey").innerHTML=keyPressed
  });
});

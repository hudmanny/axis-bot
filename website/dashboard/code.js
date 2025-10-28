let keys = [];
document.addEventListener('keydown', e => {
  keys.push(e.key);
  if (keys.join('').includes('back')) {
    window.location.href = '../index.html';
  }
});
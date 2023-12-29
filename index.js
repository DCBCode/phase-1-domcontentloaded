document.addEventListener('DOMContentLoaded', () => {
    console.log('After DOM Loaded');
    const paragraph = document.getElementById('text');
    paragraph.textContent = 'This is really cool!';
  });
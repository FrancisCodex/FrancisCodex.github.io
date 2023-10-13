window.addEventListener('scroll', function() {
    var navbar = document.querySelector('#mainNav');
    var image = document.querySelector('.fade-in');
  
    if (window.scrollY > navbar.offsetTop) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
  
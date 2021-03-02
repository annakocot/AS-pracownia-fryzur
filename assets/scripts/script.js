var gallery = $('.gallery a').simpleLightbox({

  /* options */
});

const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');


hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
});


const scrollToTopButton = document.getElementById('back-top');

const showButton = () => {
  let y = window.scrollY;

  if (y > 0) {
    scrollToTopButton.className = 'show';
  }
  else {
    scrollToTopButton.className = 'hide';
  }
};

window.addEventListener('scroll', showButton);

const scrollUp = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c < 0) {
    window.requestAnimationFrame(scrollUp);
  }
  else {
    window.scrollTo(0, c - c);
  }
};

scrollToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  scrollUp();
});

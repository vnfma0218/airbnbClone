const topHeader = document.querySelector('.top_header');
const topHeaderHeight = topHeader.getBoundingClientRect().height;
const header = document.querySelector('.header');
const activeHeader = document.querySelector('.activeHeader');
const trip_info = document.querySelector('.trip_info');

document.addEventListener('scroll', function () {
  if (window.scrollY > topHeaderHeight) {
    topHeader.style.visibility = 'invisible';
    header.style.display = 'none';
    activeHeader.style.display = 'flex';
    activeHeader.classList.add('ani');
    trip_info.classList.add('fadeOut');
  } else {
    header.style.display = 'flex';
    activeHeader.style.display = 'none';
    activeHeader.style.top = `${topHeaderHeight - 10}px`;
    topHeader.style.display = 'block';
    trip_info.classList.remove('fadeOut');
  }
});

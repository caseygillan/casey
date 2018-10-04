const homePage = document.querySelector('.home-page');
const portfolioPage = document.querySelector('.portfolio-page');
const contactPage = document.querySelector('.contact-page');
const aboutMePage = document.querySelector('.about-me-page')

const contactLink = document.querySelector('.contact');
const portfolioLink = document.querySelector('.portfolio');
const aboutMeLink = document.querySelector('.about-me');
const backLink = document.querySelector('.back');

aboutMeLink.addEventListener('click', function () {
  homePage.style.display = 'none';
  aboutMePage.style.display = 'block';
});

portfolioLink.addEventListener('click', function () {
  homePage.style.display = 'none';
  portfolioPage.style.display = 'block';
});

contactLink.addEventListener('click', function () {
  homePage.style.display = 'none';
  contactPage.style.display = 'block';
});

backLink.addEventListener('click', function () {
  homePage.style.display = 'block';
  contactPage.style.display = 'none';
  portfolioPage.style.display = 'none';
  aboutMePage.style.display = 'none';
});
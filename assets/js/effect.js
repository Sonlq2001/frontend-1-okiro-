const $ = selector => {
    const elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
}

// hamburger
const boxHamburger = $('.header-group__hbs');
const btnHamburger = $('.btn-hbs');

boxHamburger.addEventListener('click', () => {
    boxHamburger.classList.toggle('active');
})

// show model box search
const btnSearch = $('.search-mobile');
const modelBoxSearch = $('.wrap-search');

btnSearch.addEventListener('click', () => {
    modelBoxSearch.classList.toggle('active');
})

window.addEventListener('click', (e) => {
    if(e.target == modelBoxSearch) {
        modelBoxSearch.classList.remove('active');
    }
})

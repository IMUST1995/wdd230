/* const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c4fc425f2bdf0be4e46d3bf001bef301&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=c4fc425f2bdf0be4e46d3bf001bef301&query="'

const main = document.getElementById('main')

getMovier(API_URL)

async function getMovier(url){
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = ''
    movies.forEach(movie => {
        const {title, poster_path} = movie

        const movieElement = document.createElement('div')
        movieElement.classList.add('movie')
        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" loading="lazy">`
        main.appendChild(movieElement)
    });
    
} */

const images = document.querySelectorAll("[data-src]");


function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }
    img.src = src
/*     img.style.filter = 'blur(.2em)' */
}
/* .movie img[data-src] {
    filter: blur(0.2em);
  }
.movie img {
filter: blur(0em);
transition: filter 0.5s;
} */


const options = {
    threshold: 0,

};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target)
        }
    })
}, options)

images.forEach(e =>{
    imgObserver.observe(e)
})
/* function lazyLoading(){
    const imgs = document.querySelectorAll('[data-src]');
console.log(imgs)
function intersection(entries, observer) {
    entries.forEach(entry => {
        consolee.log('intersection', entry.target)
    })
};
//defect valuer =>
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};
//defining observer
const observer = new IntersectionObserver(intersection, options);

img.forEach(e => {
    observer.observe(e)
});
}
lazyLoading() */

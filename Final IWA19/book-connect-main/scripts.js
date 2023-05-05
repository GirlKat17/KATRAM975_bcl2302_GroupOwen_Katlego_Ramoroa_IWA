import { books,authors,BOOKS_PER_PAGE,genres } from "./data.js";
let page = 1;
let range = books.length
// let booksList = matches;
const matches = books
if (!books || !Array.isArray(books)) {
 throw new Error('Source required');
 }
if (!range || range.length < 2) {
      throw new Error('Range must be an array with two numbers');
}
//------ Dark mode and light-----//

const day = {
  dark: '10, 10, 20',
  light: '255, 255, 255',
};
const night = {
  dark: '255, 255, 255',
  light: '10, 10, 20',
};

const overlaymood=document.querySelector('[data-settings-overlay]')
overlaymood.style.display = 'block'
//
//const savebutton= addEventListener(click )
 

function dark (event) {

  event.preventDefault()
  const darkmodeform= document.querySelector('[data-settings-theme')
  const bodymode= document.querySelector('body')


  if (darkmodeform=== "night") {
bodymode.style.setProperty('--color-dark',day.dark);
bodymode.style.setProperty('--color-light', day.light);

overlaymood.style.display=''
  }
  else {
  
  bodymode.style.setProperty('--color-dark',night.dark);
bodymode.style.setProperty('--color-light', night.light);

overlaymood.style.display=''
  }
 }

 const save= document.querySelector("body > dialog:nth-child(5) > div > div > button.overlay__button.overlay__button_primary")
 save.addEventListener('click',dark)

//----------- mode Setting ends --------//






//-------- Diplaying 36 book on opening html page----//


function createPreview({ author, id, image, title }) {
    const preview = document.createElement('div');

    preview.classList.add('preview');
    const kat=/**html*/
    `<div class= "preview__info">
    <img class= "preview__image" src="${image}">
    <h1 class="preview__title">"${title}"</h1>
    <h2 class="preview__author">"${authors[author]}"</h2>
    </div>`
    preview.innerHTML=kat
    return preview

}
let fragment = document.createDocumentFragment()
const extracted = books.slice(0,36)

for (const {author ,title ,image , id} of extracted) {
    //const { author, image, title, id } = extracted[i];
    const preview = createPreview({
      author,
      id,
      image,
      title,
    });
    fragment.appendChild(preview);
  }
  const dataListItems = document.querySelector('[data-list-items]');
    dataListItems.appendChild(fragment);


const dataList= document.querySelector('[data-list-items]');
dataList.appendChild(fragment);


//-------button seacher before pop up---------//



const datasearch =document.querySelector('[data-header-search]')
datasearch.addEventListener('click',()=>{
 const lookup=document.querySelector('[data-search-overlay]')
 lookup.show()
}) 

//-------- Selection of Genres----//

const genrefragement= document.createDocumentFragment();
let elementG=document.createElement('option');
elementG.value = 'any';
elementG.innerText ='All Genres';
genrefragement.appendChild(elementG);

for (const [id, name] of Object.entries(genres)) {
  const elementG = document.createElement('option');
  elementG.value = id;
  elementG.innerText =name;
  genrefragement.appendChild(elementG);
}
const dataSearchGenres = document.querySelector('[data-search-genres]');
dataSearchGenres.appendChild(genrefragement);


//---- selection of Author-------//

const Authorfragement= document.createDocumentFragment();
let elementA=document.createElement('option');
elementA.value = 'any';
elementA.innerText ='All Authors';
Authorfragement.appendChild(elementA);

for (const [id, name] of Object.entries(authors)) {
  const elementA = document.createElement('option');
  elementA.value = id;
  elementA.innerText =name;
  Authorfragement.appendChild(elementA);
}
const dataSearchAuthors = document.querySelector('[data-search-authors]');
dataSearchAuthors.appendChild(Authorfragement);



//--------Search results output-------------- //

const searchform = document.querySelector('[overlay__button overlay__button_primary]');
const AuthorEntries = Object.entries(authors);
const genreEntries = Object.entries(genres);

searchform.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(searchform);
  const filters = Object.fromEntries(formData);
  const result = [];

  // check if the book, title, and genre match
  for (let i = 0; i < matches.length; i++) {
    const book = matches[i];
    const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch = filters.author === 'any' || book.author === filters.author;
    const genreMatch = filters.genre === 'any' || book.genre.includes(filters.genre);

    if (titleMatch && authorMatch && genreMatch) {
      result.push(book);
    }
  }

  const datalistmessage = document.querySelector('[data-list-message]');
  const items = document.querySelector('[list__items]');

  if (result.length < 1) {
    datalistmessage.classList.add('list_message_show');
    datalistmessage.innerHTML = '';
  } else {
    datalistmessage.classList.remove('list_message_show');
    items.innerHTML = '';

    const fragment = document.createDocumentFragment();

    for (const book of result) {
      const { author, image, title, id } = book;
      const element = document.createElement('button');
      element.classList = 'preview';
      element.setAttribute('data_preview', id);
      element.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
          <h3 class="preview__title">${title}</h3>
          <div class="preview__author">${authors[author]}</div>
        </div>
      `;
      fragment.appendChild(element);
    }
    items.appendChild(fragment);

    // assuming that searchOverlay is defined
    searchOverlay.open = false;
  }
});


      


  
//------- Show more button-------//

const moreBooks = document.querySelector('[data-list-button]') // created a variable and called data-list-button from the DOM
  const showMore = page * BOOKS_PER_PAGE; /*  Show more */   //moved it to the line below and removed the = before. removed books and replaced with matches so that it can get total number of books
moreBooks.disabled = !(matches.length - showMore > 0)   //replaced data-list-button  with the variable I just created, replaced [page * BOOKS_PER_PAGE] with showMore on this code block
moreBooks.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining">${matches.length - showMore > 0 ? matches.length - showMore : 0}</span>
`;

 // removed the () on the main and removed [] on page*BOOKS_PER_PAGE and replaced with (). Removed the [] and replaced with ``
moreBooks.addEventListener( 'click', () =>{
    showMore.click = true ;
   moreBooks.focus();


  });
  //Display of the show more button
  const showMoreButton = document.querySelector('[data-list-button]');
  let startIndex = 36;
  let endIndex = 72;
  showMoreButton.addEventListener('click', () => {
    const extracted = books.slice(startIndex, endIndex);
    const fragment = document.createDocumentFragment();
    for (const { author, image, title, id, description, published } of extracted) {
      const element = document.createElement('button');
      element.classList.add('preview');
      element.dataset.id = id;
      element.dataset.title = title;
      element.dataset.description = description;
      element.dataset.image = image;
      element.dataset.subtitle = `${authors[author]} (${new Date(published).getFullYear()})`;
      element.setAttribute('data-preview', id);
      element.innerHTML = /* html */ `
        <div>
          <img class="preview__image" src="${image}" />
        </div>
        <div class="preview__info">
          <h3 class="preview__title">${title}</h3>
          <div class="preview__author">${authors[author]}</div>
        </div>
      `;
      fragment.appendChild(element);
    }
    document.querySelector('[data-list-items]').appendChild(fragment);
    startIndex += 36;
    endIndex += 36;
  });















// genres = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element = 'All Genres'
// genres.appendChild(element)

// for ([id, names]; Object.entries(genres); i++) {
//     document.createElement('option')
//     element.value = value
//     element.innerText = text
//     genres.appendChild(element)
// }

// data-search-genres.appendChild(genres)

// authors = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authors.appendChild(element)

// for ([id, name];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// data-search-authors.appendChild(authors)

// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);
// data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

// data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

// data-list-button.innerHTML = /* html */ [
//     '<span>Show more</span>',
//     '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ]

// data-search-cancel.click() { data-search-overlay.open === false }
// data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }

// data-list-button.click() {
//     document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
//     actions.list.updateRemaining()
//     page = page + 1
// }

// data-header-search.click() {
//     data-search-overlay.open === true ;
//     data-search-title.focus();
// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }

//     if display.length < 1 
//     data-list-message.class.add('list__message_show')
//     else data-list-message.class.remove('list__message_show')
    

//     data-list-items.innerHTML = ''
  
    
//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled = initial > 0

//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open = false
// }

// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay).open === false
// }

// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if active break;
//         const previewId = node?.dataset?.preview
    
//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         } 
//     }
    
//     if !active return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title
    
//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description
// }

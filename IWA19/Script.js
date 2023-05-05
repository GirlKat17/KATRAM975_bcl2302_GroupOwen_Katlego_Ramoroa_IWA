// const matches = books
// const page = 1;

// if (!books && !Array.isArray(books)) 
// throw new Error('Source required') 
// if (!range && range.length < 2) 
// throw new Error('Range must be an array with two numbers')

// day = {
//     dark: '10, 10, 20',
//     light: '255, 255, 255',
// };

// night = {
//     dark: '255, 255, 255',
//     light: '10, 10, 20',
// };

// const fragment = document.createDocumentFragment();

// // Changing the name because its already a block scope
// const pullextract = books.slice(0, 36)

// for ({ author, image, title, id }; pullextract; i++) {
//     const preview = createPreview({
//         author,
//         id,
//         image,
//         title
//     });

//     fragment.appendChild(preview)
// }

// data-list-items.appendChild(fragment)

// const genres = document.createDocumentFragment();
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

// const authors = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authors.appendChild(element)

// for ([id, names];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// data-search-authors.appendChild(authors)

// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

// documentElement.style.setProperty('--color-dark', css[v].dark);
// const lightmood = documentElement.style.setProperty('--color-light', css[v].light);

// data-list-button === "Show more (books.length - BOOKS_PER_PAGE)"

// data-list-button.disabled === !(matches.length - [page * BOOKS_PER_PAGE] > 0)

// data-list-button.innerHTML  /* html */ [
//     '<span>Show more</span>',
//     '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ]

// data-search-cancel.click() 
// { data-search-overlay.open === false }
// data-settings-cancel.click()
//  { querySelect(data-settings-overlay).open === false }
// data-settings-form.submit() 
// { actions.settings.submit }
// data-list-close.click() 
// { data-list-active.open === false }

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
//           const genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { 
//                 if (singleGenre = filters.genre)
//                  {genreMatch === true }}
//             }
//         }

//         if (titleMatch && authorMatch && genreMatch) = (book) =>{

//         }
        
//         result.push(book)
//     }

    
//     if (display.length < 1 ){
//     data-list-message.class.add('list__message_show')
//     }
//     else data-list-message.class.remove('list__message_show')
    

//     data-list-items.innerHTML = ''
//     const fragment = document.createDocumentFragment()
//     const extracted = source.slice(range[0], range[1])

//     for ({ author, image, title, id }; extracted; i++) {
//         const { author: authorId, id, image, title } = props

//         element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[authorId]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }
    
//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     data-list-button.disabled === initial > 0

//     data-list-button.innerHTML  /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open === false
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
    
//     if (!active)
//      return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title
    
//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description
// }
const BOOKS_PER_PAGE = 36;
let page = 1;
let booksList = matches;
if (!booksList || !Array.isArray(booksList)) {
  throw new Error('Source required');
}
if (!range || range.length < 2) {
  throw new Error('Range must be an array with two numbers');
}
const day = {
  dark: '10, 10, 20',
  light: '255, 255, 255',
};
const night = {
  dark: '255, 255, 255',
  light: '10, 10, 20',
};

// const extracted = booksList.slice(0, BOOKS_PER_PAGE);
// const fragment = document.createDocumentFragment();
// function createPreview({ author, id, image, title }) {
//   const preview = document.createElement('div');
//   preview.className = 'preview';
//   const img = document.createElement('img');

//   img.src = image;
//   img.alt = `${title} book cover`;
//   preview.appendChild(img);
//   const titleEl = document.createElement('h2');
//   titleEl.innerText = title;
//   preview.appendChild(titleEl);
//   const authorEl = document.createElement('p');

//   authorEl.innerText = `By ${author}`;
//   preview.appendChild(authorEl);
//   const summaryEl = document.createElement('p');
//   summaryEl.innerText = 'Summary of the book goes here.';
//   preview.appendChild(summaryEl);
//   const dateEl = document.createElement('p');
//   dateEl.innerText = 'Published date goes here.';
//   preview.appendChild(dateEl);
//   return preview;
// }

for (let i = 0; i < extracted.length; i++) {
  const { author, image, title, id } = extracted[i];
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









// let css = {
//   day: {
//     dark: `rgb(${day.dark})`,
//     light: `rgb(${day.light})`,
//   },
//   night: {
//     dark: `rgb(${night.dark})`,
//     light: `rgb(${night.light})`,
//   },
// };
// const documentElement = document.documentElement;

// const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);
// const dataListButton = document.querySelector('#data-list-button');
// const remaining = document.querySelector('.list__remaining');
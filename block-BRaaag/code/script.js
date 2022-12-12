let input = document.querySelector('input[type=text]');
let rootElm = document.querySelector('ul');

let allMovies = [
  {
    name: 'Movie 1',
    watched: false,
  },
  {
    name: 'Movie 2',
    watched: true,
  },
  {
    name: 'Movie 3',
    watched: false,
  },
];
// function elm(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith('data-') || key == 'for') {
//       element.setAttribute(key, attr[key]);
//     } else if (key.startsWith('on')) {
//       let eventType = key.replace('on', '');
//       element.addEventListener(eventType, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child == 'object') {
//       element.append(child);
//     }
//     if (typeof child == 'string') {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });
//   return element;
// }
//add movie
function addMovie(event) {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createUI(allMovies);
  }
}
input.addEventListener('keyup', addMovie);

function deleteMovie(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createUI(allMovies);
}
function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies);
}
// <li>
//           <input type="checkbox" name="status" id="movie">
//           <label for="movie">Movie 1</label>
//           <span>(Remove)</span>
//         </li>
function createUI(movies = []) {
  // rootElm.innerHTML = ''; React does this step itself
  let ui = movies.map((movie, index) => {
    let li = React.createElement(
      'li',
      null,
      React.createElement('input', {
        type: 'checkbox',
        checked: movie.watched,
        id: index,
        onChange: handleChange,
      }),
      React.createElement('label', { htmlFor: index }, movie.name),
      React.createElement(
        'span',
        { 'data-id': index, onClick: deleteMovie },
        'Remove'
      )
    );
    return li;
  });
  ReactDOM.render(ui, rootElm);
}
createUI(allMovies);

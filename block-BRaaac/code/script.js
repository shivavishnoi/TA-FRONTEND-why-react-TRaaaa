let input = document.querySelector('input[type=text]');
let rootElm = document.querySelector('ul');

let allMovies = [
  // {
  //   name: 'Movie 1',
  //   watched: false,
  // },
  // {
  //   name: 'Movie 2',
  //   watched: true,
  // },
  // {
  //   name: 'Movie 3',
  //   watched: false,
  // },
];
function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-') || key == 'for') {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith('on')) {
      let eventType = key.replace('on', '');
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child == 'object') {
      element.append(child);
    }
    if (typeof child == 'string') {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}
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
function createUI(movies = []) {
  rootElm.innerHTML = '';
  movies.forEach((movie, i) => {
    // let li = document.createElement('li');
    // let input = document.createElement('input');
    // input.type = 'checkbox';
    // input.checked = movie.watched;
    // input.id = i;
    // input.addEventListener('change', handleChange);
    // let label = document.createElement('label');
    // label.setAttribute('for', i);
    // label.innerText = movie.name;
    // let span = document.createElement('span');
    // span.innerText = '(Remove)';
    // span.setAttribute('data-id', i);
    // span.addEventListener('click', deleteMovie);
    // li.append(input, label, span);
    // rootElm.append(li);
    let li = elm(
      'li',
      {},
      elm('input', {
        type: 'checkbox',
        checked: movie.watched,
        id: i,
        onclick: handleChange,
      }),
      elm('label', { for: i }, movie.name),
      elm('span', { 'data-id': i, onclick: deleteMovie }, 'Remove')
    );
    rootElm.append(li);
  });
}

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
    let li = document.createElement('li');
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = movie.watched;
    input.id = i;
    input.addEventListener('change', handleChange);
    let label = document.createElement('label');
    label.setAttribute('for', i);
    label.innerText = movie.name;
    let span = document.createElement('span');
    span.innerText = '(Remove)';
    span.setAttribute('data-id', i);
    span.addEventListener('click', deleteMovie);
    li.append(input, label, span);
    rootElm.append(li);
  });
}

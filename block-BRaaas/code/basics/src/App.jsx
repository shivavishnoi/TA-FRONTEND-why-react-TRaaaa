import './App.css';
import PropTypes from 'prop-types';
//1
function handleClick(event) {
  alert('Hello React event');
}
//2
function handleHelp() {
  alert('To learn React use https://reactjs.org');
  alert('React and ReactDOM works together');
  alert('Babel helps in writing JSX');
}
//3
let names = ['Arya', 'John', 'Bran'];
function handleName(name) {
  alert('Hello ' + name);
}
function App() {
  return (
    <>
      <button
        onClick={() => {
          handleClick(event);
        }}
      >
        Click Me
      </button>
      <br />
      <button
        onClick={() => {
          handleHelp();
        }}
      >
        How Can I help You!
      </button>
      <br />
      {names.map((name) => (
        <button
          onClick={() => {
            handleName(name);
          }}
          key={name}
        >
          {name}
        </button>
      ))}
      <br />
      <Class />
      <br />
      <Fruits />
    </>
  );
}
//4
function Class() {
  return names.map((name) => <Button info={name} key={name} />);
}
function Button(props) {
  return (
    <button
      onClick={() => {
        handleName(props.info);
      }}
    >
      {props.info}
    </button>
  );
}
//5
let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];

function Fruits() {
  return fruits.map((fruit) => {
    return <FruitButton {...fruit} key={fruit.id} />;
  });
}

function FruitButton(props) {
  return (
    <button
      onClick={() => {
        handleName(props.value);
      }}
    >
      {props.value}
    </button>
  );
}
FruitButton.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default App;

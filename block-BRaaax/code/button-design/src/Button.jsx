import { buttonSize, buttonType } from './buttonInfo';
function Button(props) {
  function getStyle() {
    var { type = buttonType.PRIMARY, size = buttonSize.MEDIUM } = props;
    return `button button--${type} button--${size}`;
  }
  return (
    <>
      <button
        onClick={props.onClickHandler}
        className={getStyle()}
        disabled={props.disabled}
      >
        {props.label || 'Button'}
      </button>
      <br />
    </>
  );
}

export default Button;

function SingleCard(props) {
  return (
    <div>
      <div
        className="single-color"
        style={{ backgroundColor: props.colorCode }}
      ></div>
      <span>
        {props.colorCode + '____'} {props.uniqueCode}
      </span>
    </div>
  );
}

export default SingleCard;

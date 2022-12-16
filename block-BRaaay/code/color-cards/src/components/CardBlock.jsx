import SingleCard from './SingleCard';

function CardBlock(props) {
  return (
    <div className="card-block">
      <div>{props.color.toUpperCase()}</div>
      <div className="color-shades">
        {props.colorArray.map((code, index) => {
          let uniqueNumber = index == 0 ? 50 : index * 100;
          return (
            <SingleCard colorCode={code} key={code} uniqueCode={uniqueNumber} />
          );
        })}
      </div>
    </div>
  );
}
export default CardBlock;

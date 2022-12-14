import data from '../data';
function Articles() {
  return (
    <div className="articles">
      {data.map((elm, i) => {
        return <Article {...elm} key={i} />;
      })}
    </div>
  );
}

function Article(props) {
  return (
    <div className="article">
      <img src={props.urlToImage} />
      <div>
        <a href={props.url}>
          <h3>{props.title}</h3>
        </a>
        <div className="authorAndDate">
          <span>By- {props.author}, </span>
          <span>Date- {props.publishedAt}</span>
        </div>
        <p>{props.description}</p>
        <p className="content">{props.content}</p>
      </div>
    </div>
  );
}

export default Articles;

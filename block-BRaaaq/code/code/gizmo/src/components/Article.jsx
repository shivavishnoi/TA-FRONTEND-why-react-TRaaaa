import data from '../data';
import PropTypes from 'prop-types';
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
          <span>By- {props.author.toUpperCase()}, </span>
          <span>Date- {props.publishedAt}</span>
        </div>
        <p>{props.description}</p>
        <p className="content">{props.content}</p>
      </div>
    </div>
  );
}

Article.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Articles;

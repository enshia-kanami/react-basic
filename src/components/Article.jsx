const Article  = (props) => {
    return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
     </div>
    );
};

export default Article;
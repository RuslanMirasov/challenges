import "./App.css";

const Article = () => {
  return (
    <article className="article">
      <h2 className="article__title">Hello World</h2>
      <label htmlFor="name">My name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" />
      <a href="https://www.wikipedia.org/" className="article__link">
        Wikipedia
      </a>
    </article>
  );
};

export default function App() {
  return <Article />;
}

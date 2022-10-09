import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <article className="NotFound">
      <h2>404: This is not the page you're looking for</h2>
      <img src="https://i.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif" alt="" />
      <Link to="/">Droids, here!</Link>
    </article>
  );
};

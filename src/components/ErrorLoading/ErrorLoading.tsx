import "./ErrorLoading.css";

const gifs = [
  "https://i.giphy.com/media/1oJLpejP9jEvWQlZj4/giphy.gif",
  "https://i.giphy.com/media/hdvELDjb9rwNa/giphy.gif",
  "https://i.giphy.com/media/3ohuPbyCjHxR9DvEOI/giphy.gif",
  "https://i.giphy.com/media/l1Ksy7xHM9qhumWxa/giphy.gif",
];

type Props = {
  onClick: VoidFunction;
};

export const ErrorLoading: React.FC<Props> = ({ onClick }) => {
  const randomGifId = Math.floor(Math.random() * gifs.length);
  return (
    <article className="ErrorLoading">
      <p>Ups, looks like something went wrong</p>
      <img src={gifs[randomGifId]} />
      <button type="button" onClick={onClick}>
        Try again?
      </button>
    </article>
  );
};

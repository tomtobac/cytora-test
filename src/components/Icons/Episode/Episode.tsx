import "./Episode.css";

type Props = {
  episode: number | string;
};

export const EpisodeIcon: React.FC<Props> = ({ episode }) => {
  return <span className="Episode">{episode}</span>;
};

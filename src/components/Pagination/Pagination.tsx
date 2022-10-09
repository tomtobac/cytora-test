import "./Pagination.css";

type Props = {
  hasNextPage: boolean;
  onNextPage: VoidFunction;
  hasPreviousPage: boolean;
  onPreviousPage: VoidFunction;
};

export const Pagination: React.FC<Props> = ({
  hasNextPage,
  hasPreviousPage,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <section className="Pagination">
      <button
        className="Pagination__button"
        disabled={!hasPreviousPage}
        type="button"
        onClick={onPreviousPage}
      >
        Previous Page
      </button>
      <span className="Pagination__divider">|</span>
      <button
        className="Pagination__button"
        disabled={!hasNextPage}
        type="button"
        onClick={onNextPage}
      >
        Next Page
      </button>
    </section>
  );
};

import "./Pagination.css";

const Pagination = ({ hasNext, hasPrevios, goToPrevPage, goToNextPage }) => {
  return (
    <div className="pagination">
      {hasPrevios && (
        <button
          onClick={() => {
            goToPrevPage("prev");
          }}
        >
          Previous
        </button>
      )}
      {hasNext && (
        <button
          onClick={() => {
            goToPrevPage("next");
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;

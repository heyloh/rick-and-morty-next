export const PaginationButtons = ({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) => {
  return (
    <>
      <div className="pagination-buttons">
        <button onClick={onPrev}>Anterior</button>
        <button onClick={onNext}>Próxima</button>
      </div>

      <style jsx>{`
        .pagination-buttons {
          display: flex;
          gap: 1rem;
          width: 100%;
          align-items: center;
          justify-content: center;

          padding: 2rem 0;
        }

        .pagination-buttons button {
          padding: 0.5rem 1rem;
          border: 2px solid #ccc;
          border-radius: 0.25rem;
          background: transparent;
          color: black;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          font-size: 1.25rem;
          font-weight: 500;
          text-transform: uppercase;
        }

        .pagination-buttons button:hover {
          border-color: black;
        }
      `}</style>
    </>
  );
};

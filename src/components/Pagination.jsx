export const Pagination = ({ setPage }) => {
  return (
    <div className="mt-5 flex flex-row justify-center gap-3">
      <button
        className="flex justify-center items-center bg-orange-300 text-white p-2 rounded"
        onClick={() => setPage(0)}
      >
        1
      </button>
      <button
        className="flex justify-center items-center bg-orange-300 text-white p-2 rounded"
        onClick={() => setPage(1)}
      >
        2
      </button>
      <button
        className="flex justify-center items-center bg-orange-300 text-white p-2 rounded"
        onClick={() => setPage(2)}
      >
        3
      </button>
      <button
        className="flex justify-center items-center bg-orange-300 text-white p-2 rounded"
        onClick={() => setPage(3)}
      >
        4
      </button>
      <button
        className="flex justify-center items-center bg-orange-300 text-white p-2 rounded"
        onClick={() => setPage(4)}
      >
        5
      </button>
    </div>
  )
}

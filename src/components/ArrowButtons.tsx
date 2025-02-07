import { backwardClient, forwardClient } from "../store/angleClientSlice";
import { useAppDispatch } from "../store/hooks";

function ArrowButtons() {
  const dispatch = useAppDispatch();

  return (
    <article className="flex justify-around w-full h-20 mt-8">
      <button
        className="w-5 h-5 rotate-180"
        onClick={() => {
          dispatch(backwardClient());
        }}
      >
        <img src="./arrow-right.png" alt="arrow-left" className="w-full" />
      </button>
      <button
        className="w-5 h-5"
        onClick={() => {
          dispatch(forwardClient());
        }}
      >
        <img src="./arrow-right.png" alt="arrow-left" className="w-full" />
      </button>
    </article>
  );
}

export default ArrowButtons;

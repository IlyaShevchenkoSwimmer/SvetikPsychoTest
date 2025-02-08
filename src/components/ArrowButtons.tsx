import { backwardClient, forwardClient } from "../store/angleClientSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { playState } from "../store/playSlice";

function ArrowButtons() {
  const dispatch = useAppDispatch();
  const play = useAppSelector(playState);

  return (
    <article className="flex justify-around w-full h-20 mt-8">
      <button
        className="w-14 h-14 flex justify-center items-center bg-blue-300 rounded-md rotate-180"
        onClick={() => {
          dispatch(backwardClient());
        }}
        disabled={play}
      >
        <img
          src="./arrow-right.png"
          alt="arrow-left"
          className="w-5"
          style={{ opacity: play ? 0.5 : 1 }}
        />
      </button>
      <button
        className="w-14 h-14 flex justify-center items-center bg-blue-300 rounded-md"
        onClick={() => {
          dispatch(forwardClient());
        }}
        disabled={play}
      >
        <img
          src="./arrow-right.png"
          alt="arrow-left"
          className="w-5"
          style={{ opacity: play ? 0.5 : 1 }}
        />
      </button>
    </article>
  );
}

export default ArrowButtons;

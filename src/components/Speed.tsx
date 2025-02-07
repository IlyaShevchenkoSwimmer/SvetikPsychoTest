import { useAppDispatch, useAppSelector } from "../store/hooks";
import { speedState } from "../store/speedSlice";
import { slower, faster } from "../store/speedSlice";

export default function Speed() {
  const actualSpeed = useAppSelector(speedState);
  const dispatch = useAppDispatch();

  return (
    <article>
      <div className="relative w-[70vw] h-[10px] bg-linear-to-r from-green-500 to-red-500">
        <div
          className="absolute flex justify-center bottom-[-15px] w-0 h-0 border-solid border-transparent border-10 border-b-amber-400"
          style={{ left: `${(actualSpeed - 1) * 10}%` }}
        >
          <div className="relative bottom-[-10px]">{actualSpeed}/10</div>
        </div>
      </div>
      <div className="mt-14 w-full h-8 flex justify-around">
        <button
          className="pl-4 pr-4 rounded-sm bg-linear-to-r from-green-500 to-orange-500"
          onClick={() => {
            dispatch(slower());
          }}
        >
          МЕДЛЕННЕЕ
        </button>
        <button
          className="pl-4 pr-4 rounded-sm bg-linear-to-r from-orange-500 to-red-500"
          onClick={() => {
            dispatch(faster());
          }}
        >
          БЫСТРЕЕ
        </button>
      </div>
    </article>
  );
}

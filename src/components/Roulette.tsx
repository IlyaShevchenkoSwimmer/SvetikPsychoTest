import { useAppSelector } from "../store/hooks";
import { angleState } from "../store/angleSlice";
import { angleClientState } from "../store/angleClientSlice";

function Roulette() {
  const angle = useAppSelector(angleState);
  const angleClient = useAppSelector(angleClientState);

  return (
    <>
      <article className="w-[50vw] h-[50vw] relative">
        <div className="absolute w-full h-full border-15 border-solid  border-black rounded-full"></div>
        <div className="absolute w-full h-full border-15 border-solid  border-transparent border-r-green-600 border-t-green-600 rounded-full rotate-[45deg]"></div>
        <div className="absolute w-full h-full border-15 border-solid  border-transparent border-l-red-600 border-t-red-600 rounded-full rotate-[-45deg]"></div>
        <div className="absolute w-full h-full border-15 border-solid  border-transparent border-t-black rounded-full rotate-[-8deg]"></div>
        <div className="absolute w-full h-full border-15 border-solid  border-transparent border-b-black rounded-full rotate-[8deg]"></div>
        <div
          className="absolute w-full h-full flex justify-center"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="absolute w-[11px] h-[11px] top-[2px] bg-amber-400 rounded-full"></div>
        </div>
        <div
          className="absolute w-full h-full flex justify-center"
          style={{ transform: `rotate(${angleClient}deg)` }}
        >
          <div className="absolute w-0 h-0 top-[-15px] border-10 border-solid border-transparent border-t-amber-400"></div>
        </div>
      </article>
    </>
  );
}

export default Roulette;

import { useEffect } from "react";

import "./App.css";
import ArrowButtons from "./components/arrowButtons";

import Roulette from "./components/roulette";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { forward } from "./store/angleSlice";
import { playing } from "./store/playSlice";
import { playState } from "./store/playSlice";
import { speedState } from "./store/speedSlice";

function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("");
    }, ms)
  );
}

function App() {
  const dispatch = useAppDispatch();
  const play = useAppSelector(playState);
  const speed = useAppSelector(speedState);

  useEffect(() => {
    async function delayer() {
      while (play) {
        await delay(Math.round(100 / speed));
        dispatch(forward());
      }
    }
    delayer();
  }, [play]);

  useEffect(() => {
    function playCallback(event: Event) {
      let isButton: boolean = false;
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        if (button === (event.target as HTMLElement).parentElement) {
          isButton = true;
        }
      });
      if (!isButton) {
        dispatch(playing());
      }
    }
    document.addEventListener("click", playCallback);
  }, []);
  return (
    <main className="flex flex-col justify-center items-center h-svh overflow-hidden">
      <Roulette />
      <ArrowButtons />
    </main>
  );
}

export default App;

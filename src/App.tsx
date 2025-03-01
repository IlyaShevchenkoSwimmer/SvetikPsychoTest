import { useCallback, useEffect } from "react";
import store from "./store";

import "./App.css";
import ArrowButtons from "./components/ArrowButtons";
import Speed from "./components/Speed.tsx";
import Roulette from "./components/Roulette.tsx";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { angleState, forward, setInit } from "./store/angleSlice";
import { failed, playing, setInitSuccess, succeed } from "./store/playSlice";
import { playState } from "./store/playSlice";
import { setSpeed, speedState } from "./store/speedSlice";
import { nextRound, roundState, setModal } from "./store/roundSlice";
import { setInitClient } from "./store/angleClientSlice";
import { setBottom, setTop } from "./store/ballZIndexSlice";
import ThankModal from "./components/ThankModal";
import AgreeForm from "./components/AgreeForm.tsx";

import { addResult, Result, resultsState } from "./store/resultsSlice";
import { agreeFormState } from "./store/agreeFormSlice.ts";

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
  const playerAngle = useAppSelector(angleState);
  const results = useAppSelector(resultsState);
  const agreed = useAppSelector(agreeFormState);
  const round = useAppSelector(roundState);

  useEffect(() => {
    async function delayer() {
      await delay(Math.round(100 / speed));
      dispatch(forward());
    }
    if (play) {
      delayer();
    }
  }, [playerAngle, play]);

  const playCallback = useCallback((event: Event) => {
    let isButton: boolean = false;
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      if (
        button === (event.target as HTMLElement).parentElement ||
        button === (event.target as HTMLElement)
      ) {
        isButton = true;
      }
    });
    if (!isButton) {
      dispatch(playing());
      document.removeEventListener("click", playCallback);
      document.addEventListener("click", stopCallback);
    }
  }, []);

  const stopCallback = useCallback((event: Event) => {
    let isButton: boolean = false;
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      if (
        button === (event.target as HTMLElement).parentElement ||
        button === (event.target as HTMLElement)
      ) {
        isButton = true;
      }
    });
    if (!isButton) {
      dispatch(playing());
      dispatch(setTop());
      const fixedResults = store.getState();
      const resultsForPush: Result = {
        stage: Math.ceil(fixedResults.round.value / 5),
        round:
          fixedResults.round.value % 5 === 0 ? 5 : fixedResults.round.value % 5,
        speed: fixedResults.speed.value,
        expectedAngle: fixedResults.angleClient.value,
        realAngle: fixedResults.angle.value,
        madeCircles: fixedResults.angle.circles,
      };
      dispatch(addResult({ value: resultsForPush }));
      if (
        store.getState().angle.value >= 233 &&
        store.getState().angle.value <= 307
      ) {
        dispatch(failed());
      } else {
        dispatch(succeed());
      }

      document.removeEventListener("click", stopCallback);
      setTimeout(() => {
        dispatch(setInitClient());
        dispatch(setInit());
        dispatch(setInitSuccess());
        dispatch(setBottom());
        dispatch(nextRound());
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (!play && agreed) {
      document.addEventListener("click", playCallback);
    }
  }, [round, agreed]);

  useEffect(() => {
    if (round > 5 && round < 11) {
      dispatch(setSpeed({ value: 8 }));
    }
  }, [round]);

  useEffect(() => {
    if (results.value.length === 15) {
      const person = store.getState().userInfo;
      try {
        fetch("https://svetiktgbotback.onrender.com/addresult", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ person, results: results.value }),
        }).then(() => {
          dispatch(setModal());
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [results.value]);

  return (
    <>
      <AgreeForm />
      <ThankModal />
      <main className="flex flex-col justify-center items-center h-svh overflow-hidden relative">
        <h1 className="mb-8 text-center">
          {Math.ceil(round / 5) === 1
            ? "Тренировка на низкой скорости"
            : Math.ceil(round / 5) === 2
            ? "Тренировка на высокой скорости"
            : "Игра. Самостоятельный выбор скорости"}
          <br />
          Этап {Math.ceil(round / 5)}/3 <br />
          Раунд {round % 5 === 0 ? 5 : round % 5}/5
        </h1>
        <Roulette />
        <ArrowButtons />
        <Speed />
      </main>
    </>
  );
}

export default App;

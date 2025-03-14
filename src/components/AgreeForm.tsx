import { agreed, agreeFormState } from "../store/agreeFormSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addUser } from "../store/userInfoSlice";

export default function AgreeForm() {
  const dispatch = useAppDispatch();
  const agreedState = useAppSelector(agreeFormState);
  return (
    <div
      className="fixed top-0 left-0 w-full h-dvh bg-white flex items-center justify-center"
      style={{
        zIndex: agreedState ? -200 : 200,
        visibility: agreedState ? "hidden" : "visible",
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const firstName = (
            document.getElementById("first-name") as HTMLInputElement
          ).value;
          const lastName = (
            document.getElementById("last-name") as HTMLInputElement
          ).value;
          const birthDate = (
            document.getElementById("birth-date") as HTMLInputElement
          ).value;
          dispatch(
            addUser({
              name: firstName,
              lastname: lastName,
              age: birthDate,
            })
          );
          dispatch(agreed());
        }}
        className="w-[80%] h-100 p-3 flex flex-col gap-2 justify-around bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-lg text-amber-50"
      >
        <input
          type="text"
          id="first-name"
          placeholder="Ваше имя"
          className="rounded-lg bg-cyan-800 p-3 border-2 border-solid border-transparent outline-0 focus:border-2 focus:border-solid focus:border-blue-500 placeholder:text-amber-50"
          required
        />
        <input
          type="text"
          id="last-name"
          placeholder="Ваша фамилия"
          className="rounded-lg bg-cyan-800 p-3 border-2 border-solid border-transparent outline-0 focus:border-2 focus:border-solid focus:border-blue-500 placeholder:text-amber-50"
          required
        />

        <input
          type="text"
          placeholder="Ваш возраст"
          id="birth-date"
          name="birth-date"
          className="rounded-lg bg-cyan-800 p-3 border-2 border-solid border-transparent outline-0 focus:border-2 focus:border-solid focus:border-blue-500 placeholder:text-amber-50"
          required
        />

        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1 accent-blue-500" required />
          <span>
            С видео-инструкцией ознакомлен и даю согласие на участие в
            исследовании
          </span>
        </div>

        <input
          type="submit"
          value="Начать тест"
          className="rounded-lg bg-cyan-800 p-3 border-2 border-solid border-transparent outline-0"
        />
      </form>
    </div>
  );
}

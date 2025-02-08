import { useAppSelector } from "../store/hooks";
import { modalState } from "../store/roundSlice";

export default function ThankModal() {
  const modal = useAppSelector(modalState);
  return (
    <section
      className="absolute flex justify-center items-center top-0 left-0 w-full h-svh bg-white"
      style={{
        zIndex: modal.modalPos,
        visibility: modal.modalVis,
        opacity: modal.modalOp,
      }}
    >
      <h1>Благодарим за участие!</h1>
    </section>
  );
}

import { useState, useEffect } from "react";

function Modal({ children, onClose }: any) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    if (!closing) {
      setClosing(false);
    }
  }, [closing]);

  return (
    <div
      className="dialog-pop-in fixed inset-0 z-50 flex w-full items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <dialog
        className={`relative z-50 w-11/12 rounded-xl bg-none shadow-lg md:w-1/2 ${
          closing ? "popOut" : "popIn"
        }`}
        open
        onClick={(event) => event.stopPropagation()}
        onAnimationEnd={() => closing && onClose()}
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "./styles";


interface LoaderProps {
  selector: string;
}

const Loader = ({ selector }: LoaderProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current
    ? createPortal(
        <Overlay>
         <div className="loader"></div>
        </Overlay>,
        ref.current!
      )
    : null;
};

export default Loader;

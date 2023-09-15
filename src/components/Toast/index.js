import "./styles.css";

import { useEffect } from "react";

export const Toast = ({ text, setToastText }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => setToastText(""), 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, setToastText]);

  return text ? (
    <div className="toast">
      <span>{text}</span>
    </div>
  ) : null;
};

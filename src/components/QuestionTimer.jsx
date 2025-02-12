import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [progress, setProgress] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setProgress((prevProgress) => prevProgress - 10);
    }, 10);
  }, []);

  return <progress id="question-time" max={timeout} value={progress} />;
}

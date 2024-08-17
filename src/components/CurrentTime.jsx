import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="lead">
      Present Day: {time.toLocaleDateString()} , {" "} present Time -{" "}
      {time.toLocaleTimeString()} Hahahahahahahaha!!!!!!!!!!!!
    </p>
  );
};

export default CurrentTime;

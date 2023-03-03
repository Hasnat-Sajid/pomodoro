import React, { useState, useEffect } from "react";

// export default function Timer() {

//     const [timePassed, setTimePassed] = useState(0);

//     const id = setInterval(test, 1000);

//     function test () {
//         setTimePassed(timePassed+1);
//     }

//     clearInterval(id);

//     return(
//         <div>
//             { timePassed }
//         </div>
//     );
// }

interface Props {
  initialTime: number;
}

const Timer: React.FC<Props> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <h1>Time remaining: {time}</h1>
    </div>
  );
};

export default Timer;

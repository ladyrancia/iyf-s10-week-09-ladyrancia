import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-bold mb-6">Timer Component</h2>
      <div className="mb-6">
        <span className="text-5xl font-mono">{seconds}s</span>
      </div>
      <div className="space-x-3 justify-center">
        {!isRunning && (
          <>
            <button 
              onClick={handleStart}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Start
            </button>
            {seconds > 0 && (
              <button 
                onClick={handleReset}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Reset
              </button>
            )}
          </>
        )}
        {isRunning && (
          <>
            <button 
              onClick={handleStop}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Stop
            </button>
            <button 
              onClick={handleReset}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Timer;
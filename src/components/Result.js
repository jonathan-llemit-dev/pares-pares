import React from "react";

export default function Result({onResetPairedCards}) {
  return (
    <div className="result">
      <h2>Game Over</h2>
      <button onClick={() => (onResetPairedCards())}>Play again</button>
    </div>
  );
}

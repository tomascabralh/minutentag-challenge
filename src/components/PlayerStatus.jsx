/**
 * Finish the PlayerStatus component so that it follows the current status of the player.
 * - The status can be either "online" or "away".
 * - When the component first renders, the player should be "online".
 * - The toggleStatus function should change the status variable.
 * - The component should count how many times the user changed their status, using the counter.
 * - When the component first renders, the counter should be 1.
 * - The counter should be updated within useEffect when status changes.
 *
 * For example, after the first render, the div element with id root should look like this:
 *
 *   <div>
 *     <h1>Online</h1>
 *     <h3>1</h3>
 *     <button>Toggle status</button>
 *   </div>
 */

import { useState, useEffect } from "react";

export function PlayerStatus() {
  const [status, setStatus] = useState("online");
  const [counter, setCounter] = useState(0);

  function onToggleStatus() {
    setStatus(status === "online" ? "away" : "online");
  }

  useEffect(() => {
    setCounter(counter + 1);
  }, [status]);

  return (
    <div>
      <h1>{status}</h1>
      <h3>{counter}</h3>
      <button onClick={onToggleStatus}>Toggle status</button>
    </div>
  );
}

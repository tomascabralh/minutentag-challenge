/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const names = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Kakashi",
  "Hinata",
  "Shikamaru",
  "Ino",
  "Choji",
  "Tenten",
  "Neji",
];

const itemsList = names.map((name) => ({
  name,
}));

export function ListItemsForNavigation(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeItemRef = useRef(null);

  useEffect(
    function () {
      if (activeItemRef.current) {
        activeItemRef.current.focus();
      }
    },
    [selectedIndex]
  );

  function handleKeyDown(event) {
    const keyActions = {
      ArrowUp: () => {
        event.preventDefault();
        setSelectedIndex(
          (prevIndex) => (prevIndex - 1 + itemsList.length) % itemsList.length
        );
      },
      ArrowLeft: () => keyActions["ArrowUp"](),
      ArrowDown: () => {
        event.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex + 1) % itemsList.length);
      },
      ArrowRight: () => keyActions["ArrowDown"](),
    };

    const action = keyActions[event.key];

    if (action) {
      action();
    }
  }

  return (
    <ul onKeyDown={handleKeyDown}>
      {itemsList.map((item, index) => (
        <li
          key={index}
          tabIndex={index === selectedIndex ? 0 : -1}
          ref={index === selectedIndex ? activeItemRef : null}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

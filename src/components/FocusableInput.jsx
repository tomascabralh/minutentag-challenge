/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef } from "react";

function Input(props) {
  return <input {...props} />;
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input ref={ref} {...props} />;
});

export function FocusableInput({ focused = false }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused]);

  return <TextInput ref={inputRef} />;
}

import React, { useState } from "react";

const Collapsible = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{buttonText}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;

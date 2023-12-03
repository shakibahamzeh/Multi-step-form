import React, { useState } from "react";
import { createContext } from "react";

export const StepContext = createContext();
const StepContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};

export default StepContextProvider;

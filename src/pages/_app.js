import StepContextProvider from "../lib/context/step/stepContext";
import "../styles/_globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <StepContextProvider>
      <Component {...pageProps} />
    </StepContextProvider>
  );
}

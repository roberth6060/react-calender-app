
import { Suspense } from "react";
import GlobalStyle from "./GlobalStyle";
import Routes from "./routes/Routes";

export default function App() {
  
  return (
   <Suspense fallback={"Loading"}>
      <GlobalStyle/>
      <Routes/>
   </Suspense>
  );
}

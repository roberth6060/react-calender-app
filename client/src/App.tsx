
import { Suspense } from "react";
import GlobalStyle from "./style/GlobalStyle";
import Routes from "./routes/Routes";

export default function App() {
  
  return (
   <Suspense fallback={"Loading"}>
      <GlobalStyle/>
      <Routes/>
   </Suspense>
  );
}

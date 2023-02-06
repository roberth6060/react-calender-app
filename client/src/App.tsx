
import { Suspense } from "react";
import GlobalStyle from "./style/GlobalStyle";
import Routes from "./routes/Routes";
import Spinner from "./components/common/Spinner/Spinner";

export default function App() {
  
  return (
   <Suspense fallback={<Spinner/>}>
      <GlobalStyle/>
      <Routes/>
   </Suspense>
  );
}

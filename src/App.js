import "bootstrap/dist/css/bootstrap.min.css";

import AppRouter from "./routers/AppRouter";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./context/AuthContext";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Toaster position="top-right" />
        <AppRouter />
      </AuthContextProvider>
    </>
  );
}

export default App;

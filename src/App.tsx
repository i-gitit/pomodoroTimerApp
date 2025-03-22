import { RouterProvider } from "react-router-dom";
import router from "./router";
import ThemeToggler from "./components/ThemeToggler";
import SessionProvider from "./context/SessionProvider";

function App() {
  return (
    <>
      <ThemeToggler />
      <div className="h-screen flex justify-center items-center bg-gray-100 pt-15 p-5">
        <SessionProvider>
          <RouterProvider router={router} />
        </SessionProvider>
      </div>
    </>
  );
}

export default App;

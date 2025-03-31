import { RouterProvider } from "react-router-dom";
import router from "./router";
import ThemeToggler from "./components/ThemeToggler";
import SessionProvider from "./context/SessionProvider";

function App() {
  return (
    <>
      {/* <ThemeToggler /> */}
      <div className="h-screen w-screen flex justify-center items-center bg-gray-100 p-2 sm:p-4 md:p-6 lg:p-10 bg-gradient-to-l from-blue-200 to-purple-200">
        <SessionProvider>
          <RouterProvider router={router} />
        </SessionProvider>
      </div>
    </>
  );
}

export default App;

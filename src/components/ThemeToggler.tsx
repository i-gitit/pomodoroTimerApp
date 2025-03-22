import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const ThemeToggler = () => {
  return (
    <>
      {/* <button className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg">
      ☀️🌑
    </button> */}
      <div className="flex space-x-3 fixed top-4 right-10 p-2">
        <Label htmlFor="dark-mode">Dark Mode</Label>
        <Switch id="dark-mode" />
      </div>
    </>
  );
};

export default ThemeToggler;

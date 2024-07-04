import { Theme } from "@/const/theme";
import { ThemeContext } from "@/provider/ThemeProvider";
import { useContext } from "react";

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme;

    switch (theme) {
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      default:
        newTheme = Theme.LIGHT;
    }

    setTheme(newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};

export { useTheme };

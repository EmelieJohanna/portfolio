import { createContext, useContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  userPreferences: {
    theme: "light",
    fontSize: "medium",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          theme: state.userPreferences.theme === "dark" ? "light" : "dark",
        },
      };

    // if (state.userPreferences.theme === "pink") {
    //   return {
    //     ...state,
    //     userPreferences: {
    //       ...state.userPreferences,
    //       theme: "light",
    //     },
    //   };
    // } else {
    //   return {
    //     ...state,
    //     userPreferences: {
    //       ...state.userPreferences,
    //       theme: state.userPreferences.theme !== "dark" ? "dark" : "light",
    //     },
    //   };
    // }
    case "TOGGLE_PINK":
      console.log("Toggling pink mode");
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          theme: state.userPreferences.theme === "pink" ? "light" : "pink",
        },
      };

    case "UPDATE_PREFERENCES":
      console.log("Updating preferences...");
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          ...action.payload,
        },
      };

    case "CHANGE_FONT_SIZE":
      console.log("Updating fontsize...");
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          fontSize: action.payload,
        },
      };
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    console.log("Theme changed: ", state.userPreferences.theme);
    localStorage.setItem("theme", state.userPreferences.theme);
  }, [state.userPreferences.theme]);

  useEffect(() => {
    console.log("Fetching saved theme...");
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch({ type: "TOGGLE_THEME" });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  console.log("Using theme...");
  return useContext(ThemeContext);
}

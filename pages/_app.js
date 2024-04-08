import { useEffect } from "react";
import { ThemeProvider, useTheme } from "@/components/ThemeContext";
import "@/styles/globals.css";
import "@/styles/logo.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    console.log("Theme changed:", state.userPreferences.theme);
    // dark theme läggs på om toggle byts till add
    document.documentElement.classList.toggle(
      "dark",
      state.userPreferences.theme === "dark"
    );

    document.documentElement.classList.toggle(
      "pink",
      state.userPreferences.theme === "pink"
    );
  }, [state.userPreferences.theme]);

  return (
    <div
      className={`min-h-screen bg-background text-text ${
        state.userPreferences.theme === "dark" ? "dark" : ""
      }`}
    >
      <Header />
      <Component {...pageProps} className="bg-background" />
      <Footer />
    </div>
  );
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);

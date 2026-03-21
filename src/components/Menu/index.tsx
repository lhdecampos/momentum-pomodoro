import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import style from "./styles.module.css";
import { useState, useEffect } from "react";

type AvalibleTheme = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvalibleTheme>(() => {
    const historyTheme =
      (localStorage.getItem("theme") as AvalibleTheme) || "dark";
    return historyTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={`${style.menu}`}>
      <a className={`${style.menuLink}`} href="#" aria-label="Ir para a home">
        <HouseIcon />
      </a>

      <a className={`${style.menuLink}`} href="#" aria-label="Historico">
        <HistoryIcon />
      </a>

      <a className={`${style.menuLink}`} href="#" aria-label="Configurações">
        <SettingsIcon />
      </a>

      <a
        className={`${style.menuLink}`}
        href="#"
        aria-label="Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}

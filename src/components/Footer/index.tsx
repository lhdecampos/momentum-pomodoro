import { GithubIcon } from "lucide-react";
import style from "./styles.module.css";

export function Footer() {
  return (
    <footer className={style.footer}>
      <a href="">Entenda como funciona a tecnica pomodoro </a>
      <a href="https://github.com/lhdecampos/momentum-pomodoro" target="_blank">
        Momentun Pomodoro &copy; {new Date().getFullYear()} - GitHub{" "}
        <span>
          <GithubIcon></GithubIcon>
        </span>
      </a>
    </footer>
  );
}

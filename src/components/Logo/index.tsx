import { HourglassIcon } from "lucide-react";
import style from "./styles.module.css";

export function Logo() {
  return (
    <div className={`${style.logo}`}>
      <a className={`${style.logoLink}`} href="#">
        <HourglassIcon />
        <span>Momentum</span>
      </a>
    </div>
  );
}

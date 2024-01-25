import Image from "next/image";
import styles from "./page.module.css";
import SelectionBox from "./selection-box";
import TeamSetup from "./team-setup";
export default function Home() {
  return (
    <main className={styles.description}>
      <div className="lead">Use this tool to see possible matchups,organize your team and more!</div>
      <SelectionBox />
      <TeamSetup />
    </main>
  );
}

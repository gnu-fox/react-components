import Image from "next/image";
import styles from "./page.module.css";

import { Register, Login } from "@/components/Auth";

export default function Home() {
    return (
        <main className={styles.main}>
            <Login />
        </main>
    );
}

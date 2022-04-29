import Link from "next/link";
import styles from "./index.module.css";
function Index() {
  return (
    <div className={styles.index}>
      <h1>NextJS hehe</h1>
      <Link href="/users" passHref>
        <span className={styles.links}>Users</span>
      </Link>
      <br />
      <Link href="/products" passHref>
        <span className={styles.links}>products</span>
      </Link>
    </div>
  );
}

export default Index;

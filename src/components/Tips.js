import { useStores } from "../stores";
import styles from "../styles/Tips.module.css";

export const Tips = ({ children }) => {
  const { UserStore } = useStores();
  return UserStore.currentUser ? null : (
    <div className={styles.tips}>{children}</div>
  );
};

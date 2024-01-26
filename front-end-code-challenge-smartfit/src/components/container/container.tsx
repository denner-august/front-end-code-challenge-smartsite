import styles from "./container.module.scss";
import { Header } from "../header/header";
import { BodyContainer } from "../bodyContanier/bodyContainer";
import { Footer } from "../footer/footer";

export function Container() {
  return (
    <div className={styles.Container}>
      <Header />
      <BodyContainer />
      <Footer />
    </div>
  );
}

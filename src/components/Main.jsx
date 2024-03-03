import Card from "./Card.jsx";
import styles from "./Main.module.css"
function Main() {
    return (
        <div>
        <h1>Списки слов и карточек</h1>
        <Card />
        <div className={styles.space}></div>
        <Card />
        </div>
        );
    }
export default Main;
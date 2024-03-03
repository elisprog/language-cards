import Card from "./Card.jsx";
import styles from "./Main.module.css";
import ListTable from "./LineTable.jsx";
function Main() {
    return (
        <div>
        <h1>Списки слов и карточек</h1>
        <div className={styles.main}>
        <Card />
        <div className={styles.space}></div>
        <Card />
        </div>
        <ListTable />
        </div>
       
        );
    }
export default Main;
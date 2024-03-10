import Card from "./Card.jsx";
import styles from "./Main.module.css";
import ListTable from "./LineTable.jsx";
import Swiping from "./Swiping.jsx";

function Main() {
    return (
        <div>
        <h1>Списки слов и карточек</h1>
        <div className={styles.main}>
        <Card />
        <div className={styles.space}>
      <div className={styles.white}>_________________</div>
        <ListTable />
        <Swiping />
        </div>
        </div>
        </div>
       
        );
    }
export default Main;
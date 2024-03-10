import styles from "./Card.module.css"
import { useState, useEffect } from "react"

function Card (){
   const [clickForward, setClickForward] = useState(false);
    function handleClickForward () {
        setClickForward(!clickForward);
    }
    let items = {word: 'la chica', translation:'девушка'};
    clickForward ? items = {word:'следующее слово', translation: 'следующий перевод'} : items = {word: 'la chica', translation:'девушка'} 

    useEffect(() => {
        alert('вы нажали "вперёд"');
    });

return (
<>
<button className={styles.swipe}>назад</button>
<div className={styles.main}>
    <p className={styles.word}>{items.word}</p>
    <p className={styles.topic}>{items.translation}</p>
</div>
<button onClick={handleClickForward} className={styles.swipe}>вперёд</button>
</>
);
}
export default Card;
import styles from "./Card.module.css"
import { useState } from "react"

function Card (){

    const [showTranslation, setShowTranslation] = useState(false);
    const handleClick = () => {
        setShowTranslation(true)
    }
    let showComment = <button onClick={handleClick}>показать перевод</button>
    if (showTranslation) {
   showComment=<p className={styles.translation} onClick={handleClick}>девушка</p>
} else {
    <button onClick={handleClick}>показать перевод</button>
}

return (
<div className={styles.main}>
    <p className={styles.word}>La chica</p>
{showComment}
<p className={styles.topic}>тема</p>
    </div>
);
}
export default Card;
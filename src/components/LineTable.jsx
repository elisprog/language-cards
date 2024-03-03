import styles from "./LineTable.module.css";
import { useState } from "react"

function LineTable () {
    const handleClick = () => {
        setClick(!click)
        }
    let edit = <button onClick={handleClick}>edit</button>
    const [click, setClick] = useState(true);

if (setClick) {
    let edit =  <button onClick={handleClick}>stop editing</button>
} else {
    let edit =  <button onClick={handleClick}>edit</button>
}

return (
<div className={styles.main}>
<section className={styles.section}>
    <p>La chica</p>
</section>
<section>
    <p>перевод</p>
</section>
<section>
    <p>тема</p>
</section>
{edit}
</div>
);
}

export default LineTable
import styles from "./LineTable.module.css";
import { useState } from "react"

function LineTable () {
    const handleClick = () => {
        setClick(false)
        }

    const [click, setClick] = useState(true);
    let edit = <button onClick={handleClick}>edit</button>

if (!click) {
   edit = <button onClick={handleClick}>stop editing</button>
} else {
    edit = <button onClick={handleClick}>edit</button>
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
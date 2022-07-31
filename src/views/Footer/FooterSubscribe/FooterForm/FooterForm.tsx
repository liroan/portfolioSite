import styles from "../../Footer.module.scss";
import {useState} from "react";
import {toast} from "react-toastify";
import {ALL_FIELDS, UNAVAILABLE_FUNCTION} from "../../../../constants/constants";


const FooterForm = () => {
    const [value, setValue] = useState("");
    const onChangeValue = (e: any) => {
        setValue(e.target.value);
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        if (value.length === 0) toast.error(ALL_FIELDS)
        else toast.warn(UNAVAILABLE_FUNCTION)
    }
    return (
        <form className={styles.footer__subscribe_field} onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChangeValue} placeholder="Email Address"/>
            <button>Submit</button>
        </form>
    )
}
export default FooterForm;
import styles from "../FormPage.module.scss";
import {FC} from "react";
import {FieldValues, UseFormRegister} from "react-hook-form";


interface FormPageFieldInputProps {
    type?: string;
    placeholder: string;
    register: UseFormRegister<FieldValues>;
    name: string;
}

const FormPageFieldInput:FC<FormPageFieldInputProps> = ({ type, placeholder, register, name }) => {
    return (
        <div className={styles.formPage__field}>
            <input type={type}
                   placeholder={placeholder}
                   {...register(name, {
                       required: true
                   })} />
        </div>
    )
}

export default FormPageFieldInput;
import {FieldValues, UseFormRegister} from "react-hook-form";
import {FC} from "react";
import styles from "../FormPage.module.scss";


interface FormPageFieldTextareaProps {
    placeholder: string;
    register: UseFormRegister<FieldValues>;
    name: string;
}

const FormPageFieldTextarea:FC<FormPageFieldTextareaProps> = ({ placeholder, register, name }) => {
    return (
        <div className={styles.formPage__field}>
            <textarea placeholder={placeholder}
                      {...register(name, {
                          required: true
                      })}
            />
        </div>
    )
}

export default FormPageFieldTextarea;
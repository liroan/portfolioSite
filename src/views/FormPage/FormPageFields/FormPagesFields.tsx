import styles from "../FormPage.module.scss";
import FormPageFieldInput from "./FormPageFieldInput";
import FormPageFieldTextarea from "./FormPageFieldTextarea";
import {FieldValues, UseFormRegister} from "react-hook-form";
import {FC} from "react";

interface FormPagesFieldsProps {
    register: UseFormRegister<FieldValues>;
}

const FormPagesFields:FC<FormPagesFieldsProps> = ({ register }) => {
    return (
        <div className={styles.formPage__fields}>
            <FormPageFieldInput name="firstName" placeholder="First Name" register={register} type="text"/>
            <FormPageFieldInput name="lastName" placeholder="Last Name" register={register} type="text"/>
            <FormPageFieldInput name="emailAddress" placeholder="Email Address" register={register} type="email"/>
            <FormPageFieldInput name="phoneNumber" placeholder="Phone Number" register={register} type="text"/>
            <FormPageFieldTextarea name="message" placeholder="Message" register={register} />
        </div>
    )
}

export default FormPagesFields;
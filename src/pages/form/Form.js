import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Error from "../../components/error/Error";

const validationSchema = Yup.object().shape({
    userName: Yup.string()
        .required("Обязательное поле"),
});

class Form extends React.Component{
    render() {
        return(
            <Formik
            initialValues={{
                userName:'',
            }}
            validationSchema={validationSchema}
            >
                {
                    ({
                         values,
                         errors,
                         touched,
                         handleChange,
                         handleBlur,
                         handleSubmit,
                         isSubmitting
                     }) => (
                        <form
                            onSubmit={handleSubmit}
                            name="org_form"
                        >
                                        <input
                                            type="text"
                                            name="userName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                            <p>{errors.userName}</p>
                            <button type="submit">Сохранить</button>
                        </form>
                    )
                }
            </Formik>
        )
    }
}

export default Form;
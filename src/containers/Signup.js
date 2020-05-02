import { withFormik } from "formik";
import Signup from "../components/Auth/Signup/Signup";

export default withFormik({
    mapPropsToValues: () => ({ name: "fxbfbgfbgf" }),
    validate: (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Required";
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: "Signup",
})(Signup);

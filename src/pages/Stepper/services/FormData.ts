import {STEPPER_FORM_DATA_KEY} from "../constants";

class FormData {
    static setData(formData: Object) {
        sessionStorage.setItem(STEPPER_FORM_DATA_KEY, JSON.stringify(formData))
    }

    static getData() {
        const formData = sessionStorage.getItem(STEPPER_FORM_DATA_KEY)
        if(!formData) {
            return []
        }
        return JSON.parse(formData)
    }

    static clearFormData() {
        sessionStorage.removeItem(STEPPER_FORM_DATA_KEY)
    }
}

export default FormData
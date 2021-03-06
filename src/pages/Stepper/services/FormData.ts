import {STEPPER_FORM_DATA_KEY} from "../constants";

class FormData {
    static setData(formData: Object) {
        try {
            sessionStorage.setItem(STEPPER_FORM_DATA_KEY, JSON.stringify(formData))
            console.log(formData + " has installed");
        } catch (e) {
            console.log('Error:', e)
        }
    }

    static getData() {
        try {
            const formData = sessionStorage.getItem(STEPPER_FORM_DATA_KEY)
            if (!formData) {
                return []
            }
            console.log(formData + " has returned");
            return JSON.parse(formData)
        } catch (e) {
            console.log('Error:', e)
        }
    }

    static clearFormData() {
        try {
            sessionStorage.removeItem(STEPPER_FORM_DATA_KEY)
            console.log(`formData has cleared`)
        } catch (e) {
            console.log('Error:', e)
        }
    }
}

export default FormData
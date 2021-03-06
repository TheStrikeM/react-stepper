import React from "react"
import {useHistory, useLocation} from 'react-router-dom'
import {Box, Button, makeStyles, TextField} from "@material-ui/core"
import FormData from '../services/FormData'
import {useFormik} from "formik"
import * as yup from 'yup'
import DefaultForm from "./DefaultForm";

interface Values {
    email: string,
    password: string
}

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password uncorrect')
        .required('Password is required')
})

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        margin: '50px 0',
        padding: '0 30px'
    },
    page: {
        margin: '50px 150px'
    },
})

const SecondStep: React.FC<{ title: string }> = ({title}) => {
    const history = useHistory()
    const location = useLocation()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: React.useCallback(
            (values: Values) => {
                FormData.setData(values)
                history.push({
                    ...location,
                    state: {
                        activeStep: 1
                    },
                })
            }
            , [history, location]),
    });
    const classes = useStyles()

    const fields = [
        {
            name: "email",
            value: formik.values.email,
            error: formik.touched.email && Boolean(formik.errors.email),
            helperText: formik.touched.email && formik.errors.email
        },
        {
            name: "password",
            value: formik.values.password,
            error: formik.touched.password && Boolean(formik.errors.password),
            helperText: formik.touched.password && formik.errors.password
        }
    ]
    return (
        <>
            <DefaultForm formik={formik} title={title} classes={classes} fields={fields} />
        </>
    )
}

export default SecondStep
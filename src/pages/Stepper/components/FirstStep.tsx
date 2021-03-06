import React from "react"
import {useHistory, useLocation} from 'react-router-dom'
import {Button} from "@material-ui/core"
import FormData from '../services/FormData'

const FirstStep: React.FC<{ title: string }> = ({title}) => {
    const history = useHistory()
    const location = useLocation()

    const onRedirect = () => {
        history.push({
            ...location,
            pathname: "/test"
        })
    }
    const onSubmit = React.useCallback(
        (values) => {
            FormData.setData(values)
            history.push({
                ...location,
                state: {
                    activeStep: 1
                },
            })
        }
    , [history, location])

    return (
        <>
            <p>Привет, перейди туда!</p>
            <Button onClick={onRedirect} color="primary">
                Link
            </Button>
        </>
    )
}

export default FirstStep
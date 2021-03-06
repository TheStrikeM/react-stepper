import React from "react"
import {Box, Button, TextField} from "@material-ui/core"

const DefaultForm: React.FC<{ formik: any, title: string, classes: any, fields: any }> = ({formik, title, classes, fields}) => {
    return (
        <form onSubmit={formik.handleSubmit}>
            {fields.map((field: any, index: number) => (
                <TextField
                    key={index}
                    fullWidth
                    id={field.name}
                    name={field.name}
                    label={field.name}
                    value={field.value}
                    onChange={formik.handleChange}
                    error={field.error}
                    helperText={field.helperText}
                />
            ))}
            <Box maxWidth={"xs-1"}>
                <Button className={classes.root} color="primary" variant="contained" type="submit">
                    Submit
                </Button>
            </Box>
        </form>
    )
}

export default DefaultForm
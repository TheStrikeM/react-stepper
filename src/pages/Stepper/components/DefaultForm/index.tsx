import React from "react"
import {Box, Button, TextField} from "@material-ui/core"

const DefaultForm: React.FC<{ formik: any, title: string, classes: any, fields: any }> = ({formik, title, classes, fields}) => {
    return (
        <form onSubmit={formik.handleSubmit}>
            {fields.map((field: any) => (
                <TextField
                    fullWidth
                    id={field}
                    name={field}
                    label={field}
                    value={`${field.toUpperCase()}`}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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
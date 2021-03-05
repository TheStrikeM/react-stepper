import React from 'react';
import {
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel, Grid,
    Radio,
    RadioGroup
} from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    Привет
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    Привет
                </Grid>
            </Grid>
        </div>
    );
}

export default App;

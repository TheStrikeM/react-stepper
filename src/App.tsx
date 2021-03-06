import React from 'react';
import {Container} from "@material-ui/core";
import StepperPage from "./pages/Stepper";

function App() {
    return (
        <div className="App">
            <Container maxWidth={"xs"}>
                <StepperPage />
            </Container>
        </div>
    );
}

export default App;

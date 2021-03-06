import React from 'react';
import {Container} from "@material-ui/core";
import FirstStep from "./pages/Stepper/components/FirstStep";

function App() {
    return (
        <div className="App">
            <Container maxWidth={"xs"}>
                <FirstStep title={"Привет!"} />
            </Container>
        </div>
    );
}

export default App;

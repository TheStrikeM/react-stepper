import React from "react"
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import {useLocation} from "react-router-dom";
import {Step, StepLabel, Stepper} from "@material-ui/core";

const TABS = [
    {
        component: FirstStep,
        title: "First step"
    },
]

interface StateManager {
    state: {
        activeStep: number
    }
}

const StepperPage = () => {

    const { state = { activeStep: 0 } }: StateManager = useLocation()
    const tab = TABS[state.activeStep];

    return (
        <>
            <Stepper activeStep={state.activeStep}>
                {TABS.map(({ title }) => (
                    <Step key={title}>
                        <StepLabel>{title}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {tab && <tab.component title={tab.title} />}
        </>
    )
}

export default StepperPage
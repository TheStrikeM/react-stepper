import React from "react"
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const Tabs = [
    {
        component: FirstStep,
        title: "First step"
    },
    {
        component: SecondStep,
        title: "Second step"
    },
    {
        component: ThirdStep,
        title: "Third step"
    }
]

const StepperPage: React.FC<{  }> = ({}) => {


    return (
        <>
            StepperPage
        </>
    )
}

export default StepperPage
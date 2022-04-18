import React from "react";
import ItJustWorks from "../components/itJustWorks/ItJustWorks";
import Header from "../components/header/Header";
import SuperSolution from "../components/supersolution/Supersolution";

const Page = () => {
    return(
        <>
            <Header />
            <SuperSolution />
            <ItJustWorks /> 
        </>
    )
}

export default Page
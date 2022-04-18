import React from "react";
import CelImage from '../../images-suite/image-hero-portrait.png'
import Fade from 'react-reveal/Fade';
import CelImageMobile from '../../images-suite/image-hero-landscape.webp'
import { ContainerSuperSolution } from "./styledcomponents";
import { SuperTitle } from "./styledcomponents";
import { TextAndOptions } from "./styledcomponents";
import { StyledDescription } from "./styledcomponents";
import { StyledButton } from "./styledcomponents";
import { ImageCellphone } from "./styledcomponents";
import { ImageCellphoneTwo } from "./styledcomponents";
import { InfoSuperSolutionContainer } from "./styledcomponents";
import { InfoSuperSolution } from "./styledcomponents";
import { SpanSolutionIcon } from "./styledcomponents";



const SuperSolution = () => {
    return(
        <Fade left>
            <ContainerSuperSolution>
                        <SuperTitle>
                            A <span>super <SpanSolutionIcon>solution</SpanSolutionIcon></span> for your <span>business.</span>
                        </SuperTitle>
                    <TextAndOptions>
                        <StyledDescription>Our marketing and sales automations help you scale your outreach to get more leads for your company. </StyledDescription>
                        <StyledButton>Request Beta Access</StyledButton>
                    </TextAndOptions>

                    <ImageCellphone src = {CelImage}/>
                    <ImageCellphoneTwo src = {CelImageMobile} /> 

                    <InfoSuperSolutionContainer>
                        <InfoSuperSolution>
                            <h3>2k+</h3>
                            <p>companies</p>
                        </InfoSuperSolution>

                        <InfoSuperSolution>
                            <h3>8</h3>
                            <p>languages</p>
                        </InfoSuperSolution>

                        <InfoSuperSolution>
                            <h3>1.2m</h3>
                            <p>leads</p>
                        </InfoSuperSolution>
                    </InfoSuperSolutionContainer>
            </ContainerSuperSolution>
        </Fade>
    )
}

export default SuperSolution
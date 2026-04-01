import { MainTitle, TitleWrapper, SubTitle } from "../style/style";

interface SectionTitleProps {
    main: string;
    sub: string;
}

export default function SectionTitle ({main, sub}: SectionTitleProps) {
    return(
        <TitleWrapper>
            <SubTitle>{sub}</SubTitle>
            <MainTitle>{main}</MainTitle>
        </TitleWrapper>
    )
}
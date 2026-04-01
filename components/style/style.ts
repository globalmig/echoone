import styled from "styled-components";

export const TitleWrapper = styled.div`
    text-align: center;
`;

export const MainTitle = styled.h2`
    font-family: "NanumMyeongjo-EX";
    margin: 15px 0 25px;

    @media (min-width: 1366px) {
    margin: 15px 0 50px;
    font-size: 2rem;
  }
`;

export const SubTitle = styled.p`
    font-family: "NanumMyeongjo-EX";
    color: #DE2021;

    @media (min-width: 1366px) {
    font-size: 1.2rem;
  }
`;
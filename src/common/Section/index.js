import { Wrapper, Header, Body, Title } from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Wrapper>
);

export default Section;
import React from "react";
import styled from "styled-components";

// TODO setting this as default layout
// https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/?=mdx#default-layouts

const Page = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const Content = styled.div`
display:flex;
flex-direction:column;
max-width:960px;
width:100vw;
padding:20px;

`

const WritingLayout = ({ children, ...rest }) => {
    return (
        <Page {...rest}>
            <Content>
                {children}
            </Content>
        </Page>
    );
};

export default WritingLayout;

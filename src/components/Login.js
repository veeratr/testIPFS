import React from 'react'
import styled from "styled-components"
function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp> GET ALL THERE </SignUp>
                    <Discription> Vestibulum hendrerit sagittis mauris, sit amet rutrum quam dictum eu. Donec et malesuada magna. Suspendisse orci libero, lacinia vitae suscipit at, dignissim sit amet magna. Proin ornare semper aliquam. Morbi tincidunt lorem sit amet libero tincidunt lobortis. Duis iaculis porttitor augue ut aliquam. Aliquam ullamcorpe </Discription>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <BgImg/>
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction: column;
    text-align:center;
    height:100vh;
`;
const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:80px 40px;
    height:100px;
`;

const BgImg= styled.div`
    height:100%;
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    top:0;
    right: 0;
    left:0;
    background-image: url("/images/login-background.jpg");
    position:absolute;
    z-index:-1;
`;

const CTA = styled.div`
    margin-bottom:2vw;
    max-width:650px;
    flex-wrap:wrap;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:0;
    align-items:center;
    text-align:center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const CTALogoOne = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;

`;

const SignUp = styled.a`
    font-weight:bold;
    color:  #f9f9f9;
    background-color:#0063e5;
    margin-bottom:12px;
    width:100%;
    letter-spacing: 1.5px;
    font-size:18px;
    padding:16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color:#0483ee;
    }

`;

const Discription = styled.p`
    font-size:11px;
    margin: 0 0 24px;
    line-height:1.5;
    letter-spacing:1.5px;
`;

const CTALogoTwo = styled.img`
    margin-bottom:20px;
    max-width:600px;
    min-height:1px;
    display:inline-block;
    width:100%;
    vertical-align:bottom;

`;

export default Login

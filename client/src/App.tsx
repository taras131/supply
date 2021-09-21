import React, {FC} from 'react';
import AppRouter from "./components/AppRouter";
import Header from "./components/widget/Header";
import Footer from "./components/widget/Footer";
import styled from 'styled-components'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: gray;
`
const BodyWrapper = styled.div`
  min-height: calc(100vh - 200px);
`
const App: FC = () => {
    return (
        <AppWrapper>
            <Header/>
            <BodyWrapper>
                <AppRouter/>
            </BodyWrapper>
            <Footer/>
        </AppWrapper>
    );
};

export default App;
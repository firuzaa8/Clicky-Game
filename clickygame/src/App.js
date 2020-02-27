import React from "react";
import Column from "./components/Column";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Row from "./components/Row";
import Topfooter from "./components/Topfooter";
import Brian from "./images/brian.jpg";
import Peter from "./images/peter.jpeg";
import Bruce from "./images/bruce.jpeg";
import Chris from "./images/chris.jpg";
import Cleveland from "./images/cleveland.jpg";
import Consuela from "./images/consuela.png";
import Joe from "./images/joe.jpeg";
import Lois from "./images/lois.jpeg";
import Meg from "./images/meg.jpg";
import Mort from "./images/mort.jpg";
import Quagmire from "./images/quagmire.png";
import Stewie from "./images/stewie.jpg";



function App() {
    return (
        <div>
            <Topfooter />
            <Header />
            <Container>
                <Row>    
                        <Column img={Brian}/>
                        <Column img={Peter}/>
                        <Column img={Bruce}/>
                        <Column img={Chris}/>
                </Row>
                <Row>
                        <Column img={Cleveland}/>
                        <Column img={Consuela}/>
                        <Column img={Joe}/>
                        <Column img={Lois}/>
                </Row>
                <Row>
                        <Column img={Meg}/>
                        <Column img={Mort}/>
                        <Column img={Quagmire}/>
                        <Column img={Stewie}/>
                </Row>

            </Container>
            <Footer />

        </div>

    );
}

export default App;
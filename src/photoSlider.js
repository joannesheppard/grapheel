/**
 * Created by Joanne on 26/07/2017.
 */

import React, {Component} from 'react';
import {Popover, Button, OverlayTrigger} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import './photoSlider.css';
import Img from "./Img"

class Title extends React.Component {
    render() {
        return (

            <img src={require("./NASA.jpg")} id="img" title={this.props.title} />

        )
    }
}


export default class Carousel extends Component {
    constructor () {
        super();
        this.state = {
            title: "Welcome",
        }
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div>
                <h2 id="ttl">Caption-IT</h2>
                <Slider ref={c => this.slider = c } {...settings}>

                    <div key={1}>
                        <Img changeTitle={this.changeTitle.bind(this)} title = {this.state.title} />

                    </div>

                    <div key={2}>
                        <img src={require("./AT1.jpg")} id="img1" title="Average Temperature in London" />
                        <Button bsSize="small" onclick="email()" id="bttn"><b>Caption-IT</b></Button>
                    </div>

                    <div key={3}>
                        <Button bsSize="small" onclick="email()" id="bttn"><b>Caption-IT</b></Button>
                        <img src={require("./CE1.jpg")} id="img" title="US Carbon Emission 2015"/>
                    </div>

                    <div key={4}>
                        <img src={require("./Eye1.jpg")} id="img" title="Cross Section of Eye"/>
                        <Button bsSize="small" onclick="email()" id="bttn"><b>Caption-IT</b></Button>
                    </div>

                    <div key={5}>
                        <img src={require("./Graphene.jpg")} id="img" title="Graphene"/>
                        <Button bsSize="small" onclick="email()" id="bttn"><b>Caption-IT</b></Button>
                    </div>

                    <div key={6}>
                        <img src={require("./HeatEngine.jpg")} id="img" title="Heat Engine"/>
                        <Button bsSize="small" onclick="email()" id="bttn"><b>Caption-IT</b></Button>
                    </div>

                    <div key={7}>
                        <img src={require("./NASA.jpg")} id="img" title="Cost Per NASA Mission"/>
                        <Button bsSize="small" onclick="email()" id="bttn"><b>Caption-IT</b></Button>
                    </div>
                    <div key={8}>
                        <img src={require("./Pdecay.jpg")} id="img" title="Feynmann Diagram of Proton Decay"/>
                        <Button bsSize="small" onclick="email()" id="bttn"><b>Caption-IT</b></Button>
                    </div>

                    <div key={9}>
                        <img src={require("./Stirling.jpg")} id="img" title="Stirling Engine"/>
                        <Button bsSize="small" onclick="email()" id="bttn"><b>Caption-IT</b></Button>
                    </div>

                    <div key={10}>
                        <img src={require("./VT1.jpg")} id="img" title="Velocity Time Graph"/>
                        <Button bsSize="small" onclick="email()" id="bttn"><b>Caption-IT</b></Button>
                    </div>

                </Slider>
            </div>
        );
    }
}



ReactDOM.render(React.createElement(Carousel), document.getElementById('slider'));
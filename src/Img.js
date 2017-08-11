/**
 * Created by Joanne on 02/08/2017.
 */
import React from "react";


class Title extends React.Component {
    render() {
        return (

        <img src={require("./NASA.jpg")} id="img" title={this.props.title} />

        )
    }
}


class Header extends React.Component {
    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render () {
        return (
            <div>
                <Title title={this.props.title} />
                <input onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}


export default Header;
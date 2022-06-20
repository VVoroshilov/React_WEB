class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.setState({welcome: "Привет React"});
    }
    render() {
        return <div>
            <p>Имя: {this.props.name}</p>
            <p>Возраст: {this.props.age}</p>
        </div>;
    }
}


ReactDOM.render(
    <Hello name="Владислав" age="19" />,
    document.getElementById("app")

)


class ClickButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Не нажал"};

        this.press = this.press.bind(this);
    }
    press(){
        let className = (this.state.class==="off")?"on":"off";
        let label = (this.state.label === "Не нажал")? "Нажал":"Не нажал";
        this.setState({label: label});
        this.setState({class: className});
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}

ReactDOM.render(
    <ClickButton />,
    document.getElementById("button")
)


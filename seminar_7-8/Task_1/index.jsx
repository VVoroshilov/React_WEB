class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Секунды: {this.state.seconds}
            </div>
        );
    }
}

ReactDOM.render(
    <Timer />,
    document.getElementById("timer")
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

const propsValues = {
    title: "Товары",
    items: [
        "Шариковая ручка 'Parker', чёрная",
        "Лист А4 'Svetocopy', 500 шт.",
        "Молоко 'Домик в деревне', 900 мл.",
        "Мел цветной, 10 шт.",
        "Костюм спортивный, размер L",
        "Стул 'Дипломат'"
    ]
};

class Item extends React.Component {
    render() {
        return <li>{this.props.name}</li>;
    }
}

class SearchPlugin extends React.Component{

    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e){
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <input placeholder="Поиск" onChange={this.onTextChanged} />;
    }
}

class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};

        this.filterList = this.filterList.bind(this);
    }

    filterList(text){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(text.toLowerCase())!== -1;
        });
        this.setState({items: filteredList});
    }

    render() {
        return(
            <div>
                <h2>{this.props.data.title}</h2>
                <SearchPlugin filter={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}

ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("app")
)

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked_by: null};
    this.focusOnTab = this.focusOnTab.bind(this);
    this.getFocus = this.getFocus.bind(this);
  }

  focusOnTab(tab_id){
    this.setState({clicked_by: tab_id})
  }

  getFocus(){
    return this.state.clicked_by;
  }
  render() {
    
    return (
      <div style={{display: "flex", flex:1, flexDirection: "row"}}>
              {
          this.props.data.map(function (item) {
              // return <Tab data={item} focus={focusOnTab} getFocus={getFocus}/>
              return <Tab data={item}/>

          })
      }
      </div>
    );
  }
}

class Tab extends React.Component {

    constructor(props) {
      super(props);
      this.state = { color: "#FFFFFF", 
      clicked: false,
      // focus: this.props.focus,
      // getFocus: this.props.getFocus
    };
    }

  render() {
    return (
      <div style={{flex:1}}>
        <button style={{fontSize: "16px", 
        width:"100%", 
        borderRadius:"5px", 
        borderColor:"#FFFFFF", 
        // background:this.state.clicked == true? this.state.getFocus() == this.props.data.id? "royalblue": this.state.color : this.state.color}
        background:this.state.clicked == true?  "royalblue": this.state.color}
      } 
        onClick={
          () => {
            this.setState({clicked: !this.state.clicked})
            // this.state.focus(this.state.clicked == true? this.props.data.id : null)
          }
        }
        >{this.props.data.picture} {this.props.data.name}</button>

        {this.state.clicked && <TodoApp/>}
      </div>
    );
  }
}

const Data = [
  {name: "Вкладка 1",
  picture: "⏰",
  id: 1},
  {name: "Вкладка 2",
  picture: "⌛",
  id: 2},
  {name: "Вкладка 3",
  picture: "✎",
  id: 3},
  {name: "Вкладка 4",
  picture: "✍",
  id: 4},
  {name: "Вкладка 5",
  picture: "	✅",
  id: 5},
]


ReactDOM.render(
  <TabBar data={Data}/>,
  document.getElementById('root')
  );
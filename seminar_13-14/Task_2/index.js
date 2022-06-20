class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      email:"",
      password:"",
      emailValid: true,
      passwordValid: true,
      formValid:false,
      isLogged:false

    }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  

  // state methods
  validateEmail(email){
    const EmailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return EmailRegex.test(email) && email.length<=255;
  }

  validatePassword(password){
    return password.length >= 6;
  }

  validateForm(){
    this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.email.length > 0 && this.state.password.length > 0})
  }

  onEmailChange(email){
    var validEmail = this.validateEmail(email);
    this.setState({email: email, emailValid: validEmail})
    this.validateForm()
  }

  onPasswordChange(password){
    var validPassword = this.validatePassword(password);
    this.setState({password: password, passwordValid: validPassword})
    this.validateForm()
  }

  handleClick(){
    this.setState({isLogged: !this.state.isLogged})
  }

  render(){
    let buttonText = this.state.isLogged == true ? "Signin": "Login"
    let displayText = this.state.isLogged == true ? "SIGNIN": "LOGIN"
    return (
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        <h2>{displayText}</h2>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));
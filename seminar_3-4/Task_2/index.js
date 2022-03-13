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
        return React.createElement(
            'div',
            null,
            'Вы здесь уже : ',
            this.state.seconds,
            ' сек.'
        );
    }
}

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = { liked:false };
        this.counter = 0;
        this.isliked = false;
    }
    render(){
        if (this.state.liked){
            if(this.isliked){
                this.counter -= 1;
                this.isliked = false;
                return e(
                    'button',
                    { onClick: () => this.setState({ liked:true})},
                    this.counter + '💣'
                );
            }else{
                this.isliked = true;
                this.counter += 1;
                return e(
                    'button',
                    { onClick: () => this.setState({ liked:true})},
                    this.counter + '💣'
                );
            }
        }
        return e(
            'button',
            { onClick: () => this.setState({ liked:true})},
            this.counter + '💣'
        );
    }
}

document.querySelectorAll('.like_button_container')
    .forEach(domContainer => {
        const commentID = domContainer.dataset.commentid;
        ReactDOM.render(
            e(LikeButton,{ commentid: commentID}),
            domContainer
        );
    });

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer'));
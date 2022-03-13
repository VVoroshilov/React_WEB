// import React from "react";
// const e = React.createElement;
//
// class ButtonReact extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {liked : false};
//     }
//     render() {
//         if (this.state.liked){
//             return "You liked this";
//         }
//         return e(
//             "button",
//             {onclick: () => this.setState({liked: true})},
//             "Like"
//         );
//     }
// }
// const domContainer = document.querySelector('#button_react');
// ReactDOM.render(e(ButtonReact), domContainer);
// document.querySelectorAll('.button_react')
//     .forEach(domContainer => {
//         const commentID = parseInt(domContainer.dataset.commnetid, 10);
//         ReactDOM.render(
//             e(ButtonReact, {commentID: commentID}),
//             domContainer
//         );
//     });
//
//
//

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = { liked:false };
    }
    render(){
        if (this.state.liked){
            return 'Видео про рыбу: ' + this.props.commentid;
        }
        return e(
            'button',
            { onClick: () => this.setState({ liked:true})},
            'Spoiler'
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
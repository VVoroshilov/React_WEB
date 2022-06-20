function get_user(user_id) {
    const json_body = {
        "user_id": user_id
    };
    const request_data = JSON.stringify(json_body);
    const request = new Request('https://vvspi203.pythonanywhere.com/user/', {
        method: 'POST',
        body: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(request)
        .then((response) => {
            if(response.ok){
                console.log("ok")
                return response.json()
            }else{
                console.log("not ok")
            }
        })
        .catch((err) => {
            console.error("error")
        })
}


function sign_up(login, password, username, nickname, bio = null) {
    const json_body = {
        "login": login,
        "password": password,
        "username": username,
        "nickname": nickname,
        "bio": bio
    };
    const request_data = JSON.stringify(json_body);
    const request = new Request('https://vvspi203.pythonanywhere.com/signup/', {
        method: 'POST',
        body: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(request)
        .then((response) => {
            if(response.ok){
                console.log("ok")
                return response.json()
            }else{
                console.log("not ok")
            }
        })
        .catch((err) => {
            console.error("error")
        })
}


function login(login, password) {
    const json_body = {
        "login": login,
        "password": password
    };
    const request_data = JSON.stringify(json_body);
    const request = new Request('https://vvspi203.pythonanywhere.com/login/', {
        method: 'POST',
        body: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(request)
        .then((response) => {
            if(response.ok){
                console.log("ok")
                return response.json()
            }else{
                console.log("not ok")
            }
        })
        .catch((err) => {
            console.error("error")
        })
}


function get_chats(user_id, token) {
    const json_body = {
        "user_id": user_id,
        "token": token
    };
    const request_data = JSON.stringify(json_body);
    const request = new Request('https://vvspi203.pythonanywhere.com/chats/get', {
        method: 'POST',
        body: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(request)
        .then((response) => {
            if(response.ok){
                console.log("ok")
                return response.json()
            }else{
                console.log("not ok")
            }
        })
        .catch((err) => {
            console.error("error")
        })
}


function get_messages(user_id, token, chat_id, mes_amount = 50, mes_skip = 0) {
    const json_body = {
        "user_id": user_id,
        "token": token,
        "chat_id": chat_id,
        "mes_amount": mes_amount,
        "mes_skip": mes_skip
    };
    const request_data = JSON.stringify(json_body);
    const request = new Request('https://vvspi203.pythonanywhere.com/message/get', {
        method: 'POST',
        body: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(request)
        .then((response) => {
            if(response.ok){
                console.log("ok")
                return response.json()
            }else{
                console.log("not ok")
            }
        })
        .catch((err) => {
            console.error("error")
        })
}


function send_message(user_id, token, chat_id, receiver_id =null, message_text=null, multimedia=null) {
    if (receiver_id === null){
        const json_body = {
            "user_id": user_id,
            "token": token,
            "chat_id": chat_id,
            "message_text": message_text,
            "multimedia": multimedia
        };
    }else{
        const json_body = {
            "user_id": user_id,
            "token": token,
            "receiver_id": receiver_id,
            "message_text": message_text,
            "multimedia": multimedia
        };
    }

    const request_data = JSON.stringify(json_body);
    const request = new Request('https://vvspi203.pythonanywhere.com/message', {
        method: 'POST',
        body: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(request)
        .then((response) => {
            if(response.ok){
                console.log("ok")
                return response.json()
            }else{
                console.log("not ok")
            }
        })
        .catch((err) => {
            console.error("error")
        })
}


function load_user_pic(user_id, token, picture) {
    const json_body = {
        "user_id": user_id,
        "token": token,
        "picture": picture,
    };
    const request_data = JSON.stringify(json_body);
    const request = new Request('https://vvspi203.pythonanywhere.com/user_pic', {
        method: 'POST',
        body: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(request)
        .then((response) => {
            if(response.ok){
                console.log("ok")
                return response.json()
            }else{
                console.log("not ok")
            }
        })
        .catch((err) => {
            console.error("error")
        })
}


function get_user_pic(user_id) {
    const json_body = {
        "user_id": user_id
    };
    const request_data = JSON.stringify(json_body);
    const request = new Request('https://vvspi203.pythonanywhere.com/user_pic/get', {
        method: 'POST',
        body: request_data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    fetch(request)
        .then(async (response) => {
            if(response.ok){
                let data = await response.json()
                console.log(data)
                return data
            }else{
                console.log("not ok")
            }
        })
        .catch((err) => {
            console.error("error")
        })
}
// function attachEvents() {
//     document.getElementById('submit').addEventListener('click', async () => {
//          const author = document.getElementById('author').value;
//          const content = document.getElementById('content').value;

//          await sendMessage({author, content});

//          document.getElementById('author').value = '';
//          document.getElementById('content').value = '';

//         //  getMessages();
//     });
//       document.getElementById('refresh').addEventListener('click', getMessages);

//    getMessages();
// }

// attachEvents();


// async function getMessages() {
//     const responce = await fetch('http://localhost:3030/jsonstore/messenger');
//     const data = await responce.json();
//     const messages = Object.values(data).map(v => `${v.author}: ${v.content}`).join('\n');
//     document.getElementById('messages').value = messages;
// }

// async function sendMessage(message) {
//     const responce = await fetch('http://localhost:3030/jsonstore/messenger', {
//         method: 'post',
//         headers: {'Content-type': 'application/json'},
//         body: JSON.stringify(message)
//     });

//     const data = await responce.json();
// }

'--------------------------------------------------------------------------------------------------------'

function attachEvents() {
    getMsg();
    let sendBtn = document.querySelector("#submit");
    let refreshBtn = document.querySelector("#refresh");
    sendBtn.addEventListener("click", sendMsg);
    refreshBtn.addEventListener("click", getMsg);
}

attachEvents();

async function getMsg() {
    let response = await fetch(`http://localhost:3030/jsonstore/messenger`);
    let data = await response.json();
    document.querySelector("#messages").value = (Object.values(data)
        .map(o => `${o.author}: ${o.content}`)).join("\n")
}

async function sendMsg() {
    let author = document.querySelector("input[name='author']").value;
    let content = document.querySelector("input[name='content']").value;
    await fetch(`http://localhost:3030/jsonstore/messenger`, { method: "POST", body: JSON.stringify({ author, content }) })
    getMsg();
    document.querySelector("input[name='author']").value = "";
    document.querySelector("input[name='content']").value = "";
}


'---------------------------------------------------------------------------------------------------'


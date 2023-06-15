import { html, render } from '../node_modules/lit-html/lit-html.js'

const main = document.getElementById('main')

async function LOADbooks() {
    let responce = await fetch('http://localhost:3030/jsonstore/collections/books')
    let data = await responce.json()
    let id = Object.keys(data)
    let list = Object.values(data)
    update(list, id)

} LOADbooks()


function update(list) {
    let result = templateFunc(list)
    render(result, main)

    document.getElementById('edit-form').style.display = 'none'
    console.log()

    document.getElementById('submitBtn').addEventListener('click', addBtn)
}


async function addBtn(e) {
    e.preventDefault()

    let title = document.getElementById('add-form-title').value
    let author = document.getElementById('add-form-author').value

    await fetch('http://localhost:3030/jsonstore/collections/books/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'author': author, 'title': title })
    })

    LOADbooks()


    title.value = ''
    author.value = ''
}
function loadBtn() {
    LOADbooks()
}

function editBtn(e) {

    e.preventDefault()

    document.getElementById('edit-form').style.display = 'block'
    document.getElementById('add-form').style.display = 'none'

    let person = e.target.parentNode.parentNode.children[1].textContent
    let title = e.target.parentNode.parentNode.children[0].textContent

    document.getElementById('edit-form-title').value = title
    document.getElementById('edit-form-author').value = person


    document.getElementById('saveBtn').addEventListener('click', SubmitForm)

    async function SubmitForm(e) {
        e.preventDefault()

        let title = document.getElementById('edit-form-title').value
        let author = document.getElementById('edit-form-author').value


        let responce = await fetch('http://localhost:3030/jsonstore/collections/books')
        let data = await responce.json()

        let findID = Object.entries(data).find(x => x[1].author == person)

        await fetch('http://localhost:3030/jsonstore/collections/books/' + findID[0], {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'author': author, 'title': title })
        })

        document.getElementById('edit-form').style.display = 'none'
        document.getElementById('add-form').style.display = 'block'
        LOADbooks()


    }

}



async function deleteBtn(e) {

    let responce = await fetch('http://localhost:3030/jsonstore/collections/books')
    let data = await responce.json()

    let person = e.target.parentNode.parentNode.children[1].textContent
    let findID = Object.entries(data).find(x => x[1].author == person)
    if (findID) {
        await fetch('http://localhost:3030/jsonstore/collections/books/' + findID[0], {
            method: 'DELETE'
        })
    } else {
        e.target.parentNode.parentNode.remove()
    }


    LOADbooks()
}



let secondTemplate = (data) => html`<tr>
    <td>${data.title}</td>
    <td>${data.author}</td>
    <td>
        <button @click=${editBtn}>Edit</button>
        <button @click=${deleteBtn}>Delete</button>
    </td>
</tr>`


let templateFunc = (info) => html`<button @click=${loadBtn} id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody id="tbody-main">
        ${info.map(x => secondTemplate(x))}

    </tbody>
</table>

<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." id="add-form-title">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." id="add-form-author">
    <input type="submit" value="Submit" id="submitBtn">
</form>

<form id="edit-form">

    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." id="edit-form-title">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." id="edit-form-author">
    <input type="submit" value="Save" id="saveBtn">
</form>`
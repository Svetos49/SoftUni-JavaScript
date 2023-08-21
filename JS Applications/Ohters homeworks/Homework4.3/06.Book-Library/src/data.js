export async function getBook(id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id);
    const data = response.json();
    return data;
}

export async function editBook(id, data) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
};

export async function deleteBook(id) {
    await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete'
    })
};
export async function addBook(data) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}
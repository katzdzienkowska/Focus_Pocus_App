const baseURL = 'http://localhost:8080/tasks';

export const getTasks = () => {
    return fetch(baseURL)
        .then(res => res.json());
};

export const postTask = (task) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json());
};

export const deleteTask = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    });
};

export const updateTask = (task) => {
    return fetch(baseURL + task.id, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json());
};
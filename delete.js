// removing tasks
// Adding new Task
document.getElementById('form').addEventListener('submit', async function(event){
    event.preventDefault();

    let task = document.getElementById('tasks').value;
    let date = document.getElementById('date').value;
    let id = document.getElementById('id').value;
    let data = {
        task: task,
        date: date,
        id:id
    };
    console.log({data})

    let result = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=> error.message)
    let output = {result}
    console.log({output})

    let tasks = document.getElementById('succes');
    tasks.innerHTML= 'Task Removed successfully'

})
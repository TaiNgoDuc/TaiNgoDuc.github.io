var uid = localStorage.getItem('uid'); 
var client = localStorage.getItem('client');
var jwt = localStorage.getItem('jwt');



const createTask = async() => {

    const name = document.getElementById('createTaskname').value;
    const description = document.getElementById('createTaskDescription').value;
    const createTaskRequest = await fetch(`https://tasklist-minh.herokuapp.com/task_lists`,{
        method: 'POST',
        headers: {
            'Access-Token' : jwt,
            'UID' : uid,
            'Client' : client,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name, description
        })
    });
    // fetchTasklist();
    // refreshTasks();
}


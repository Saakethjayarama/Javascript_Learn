//AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] = 'saaketh'
// GET REQUEST
function getTodos() {
  console.log('GET Request');

  //Method 1

  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   params: {
  //     _limit: 5
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));
  

  //Method 2
  
  axios
    .get('https://jsonplaceholder.typicode.com/todos', {params: { _limit: 5 }, timeout: 5000})
    .then(res => showOutput(res))
    .catch(err => console.error(err))

  //Method 3

  // axios('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err))
  //Defaults Get

  // All three methods are applicable for all the requests


}

// POST REQUEST
function addTodo() {
  console.log('POST Request');

  //Method 1

  // axios({
  //   method: 'post',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   data: {
  //     title: 'New Todo',
  //     completed:false
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));

  axios
    .post('https://jsonplaceholder.typicode.com/todos', 
    {
      title: 'New Todo',
      completed: false
    })
    .then( res => showOutput(res))
    .catch(err => console.error(err))
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
  //PUT request means the chunk gets replaced
  //PATCH replaces part of it
  axios
    .put('https://jsonplaceholder.typicode.com/todos/'+ 1,
        {
          title: "Updated ToDo",
          completed: true
        }
    )
    .then(res => showOutput(res))
    .catch(err => console.error(err))
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');

  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err))
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');

  axios
    .all([
      axios.get('https://jsonplaceholder.typicode.com/todos'),
      axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
    .then(res => {
      console.log(res[0]);
      console.log(res[1])
      showOutput(res[1]);
    })
    // .then(axios.spread((todos, posts) => showOutput(posts))) Alternate way
    .catch(err => console.error(err))
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'QsiWiljuop'
    }
  }
  axios
    .post('https://jsonplaceholder.typicode.com/todos',
    {
      title: "EAT",
      completed: false
    },
    config)
    .then(res => showOutput(res))
    .catch(err => console.error(err));

}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');

  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title:"code",
      complete: true
    },
    transformResponse: axios.defaults.transformResponse.concat(data =>{
      data.title= data.title.toUpperCase();
    }) 
  }

  axios(options).then(res => showOutput(res)).catch(err => console.error(err));
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
  axios
    .get('https://jsonplaceholder.typicode.com/todoss', {params: { _limit: 5 },
      validateStatus: function(status){
          return status > 500; //Return only if the status is greater than or equal to 500
      }
    })
    .then(res => showOutput(res))
    .catch(err => {
      if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if(err.response.status === 404){
          alert('Page not found');
        }
      }else if(err.request){
        //Request is made but no reponse
        console.error(err.request);
      }else {
        console.log(err.message);
      }
    })

}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
  const source = axios.CancelToken.source();

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      }
    });

    if(true){
      source.cancel('Request Canceled!');
    }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config => {
  console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
  return config;
}, error => {
  return Promise.reject(error);
} )
// AXIOS INSTANCES
 const axiosInstance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
 })

 axiosInstance.get('/todos').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);

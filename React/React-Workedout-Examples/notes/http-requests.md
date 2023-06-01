# http requests

- HTTP stands for Hypertext Transfer Protocol
- It is used to structure requests and responses over the internet.

# axios

- Axios is a Javascript library used to make _asynchronous_ HTTP requests.

## installation

```
npm install axios
```

- example

```
# get request

axios.get(url)
    .then(res => {
        const data = res.data;
    })
    .catch(err => {
        console.error(err);
    })

# post request

axios.post(url, data)
    .then(res => {
        const data = res.data;
    })
    .catch(err => {
        console.error(err);
    })
```

# fetch api

- Fetch API is also a javascript library used ot make _asynchronous_ HTTP requests.

- example

```
# get request

fetch(url)
.then(res => res.json())
.then(data => {
    // do something with data
})
.catch(err => {
    console.error(err);
})

# post request

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => {
    // do something with data
})
.catch(err => {
    console.error(err);
})
```

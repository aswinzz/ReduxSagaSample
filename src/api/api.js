
export const getAllUsers = () =>{
    console.log("GET ALL USERS API CALL");
    const url = 'http://localhost:8080/api/all';
    return fetch(url, {
        method: 'get',
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
    })
    .then(response => response.json())
    .then(data =>{
      // console.log(data);
      return data;
    }
    )
}

export const getUser = (id) => {
  console.log("GET ALL USERS API CALL");
    const url = `http://localhost:8080/api/users/${id}`;
    return fetch(url, {
        method: 'get',
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
    })
    .then(response => response.json())
    .then(data =>{
      // console.log(data);
      return data;
    }
    )
}
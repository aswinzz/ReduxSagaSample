
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
      if(data.status==500){
        throw "Something Went Wrong";
      }
      // console.log(data);
      return data;
    }
    )
}

export const getUser = (id) => {
  console.log("GET USER API CALL");
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
      if(data.status==500){
        throw "User Not Found";
      }
      // console.log(data);
      return data;
    }
    )
}

export const addUser = (payload) => {
  console.log("ADD USER API CALL WITH PAYLOAD ",payload);
  const url = `http://localhost:8080/api/add`;
  return fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data =>{
    if(data.status==500){
      throw "User Not Added";
    }
    // console.log(data);
    return data;
  }
  )
}

export const deleteUser = (id) => {
  console.log("DELETE USERS API CALL");
    const url = `http://localhost:8080/api/users/${id}`;
    return fetch(url, {
        method: 'delete',
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
    })
    .then(response => response.json())
    .then(data =>{
      // console.log("DATA",data);
      if(data.status==500){
        throw "User Not Found";
      }
      return data;
    }
    )
}
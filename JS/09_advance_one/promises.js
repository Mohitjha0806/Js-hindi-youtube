const promisesOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
      console.log("Async task is complete");
      resolve();
    }, 1000);
  });
  
  promisesOne.then(function () {
    console.log("Promise Consumed");
  });
  
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async task two");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("Async 2 resolved");
  });
  
  const promisesThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ username: "chai", email: "chai@example.com" });
    }, 1000);
  });
  
  promisesThree.then(function (user) {
    console.log(user);
  });
  
  const promisesFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({ username: "Mohit", password: "123" });
      } else {
        reject("ERROR : Some went wrong");
      }
    }, 1000);
  });
  
  promisesFour
    .then((user) => {
      console.log(user);
      return user.username;
    })
    .then((username) => {
      console.log(username);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));
  
  const promisesFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({ username: "JavaScript", password: "123456" });
      } else {
        reject("ERROR : JS went wrong");
      }
    }, 1000);
  });
  
  async function consumePromiseFive() {
    try {
      const response = await promisesFive;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  consumePromiseFive();
  
  async function getAllUsers(){
    try {
      const response =  await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("E: ", error);
    }
  }
  
  getAllUsers()
  
  fetch("https://api.github.com/users/mohitjha0806")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
  
// new Promise(function (resolve, reject) {
//   console.log("some task");
//   let data = "naiyer09@gmail.com";
//   resolve(data);
// }).then(function (data) {
//   console.log("data received : " + data);
// });

//........................Passing data through Object....................................................

new Promise(function (resolve, reject) {
  resolve({
    username: "naiyer",
    email: "naiyer@gmail.com",
    address: "Bengaluru",
  });
}).then(function (user) {
  console.log("Received user info:");
  console.log(user);
  console.log("Username : " + user.username);
  console.log("Email : " + user.email);
  console.log("Address : " + user.address);
});

//..................................Promise Chaining.....................................................
new Promise(function (resolve, reject) {
  console.log("Payment is under process......");
  resolve(1599);
})
  .then(function (amt) {
    console.log("payment received: " + amt);

    return new Promise(function (resolve, reject) {
      console.log("delivery under process......");
      resolve("shirt");
    });
  })
  .then(function (prod) {
    console.log("product received: " + prod);
  });

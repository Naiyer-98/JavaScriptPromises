let pr = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Some async task");

    let task = true;
    if (task == false) {
      resolve();
    } else {
      reject();
    }
  }, 3000);
});

pr.then(function () {
  console.log("task success: promise was completed");
})
  .catch(function () {
    console.log("task failure : promise was rejected");
  })
  .finally(function () {
    console.log("task was attempted");
  });

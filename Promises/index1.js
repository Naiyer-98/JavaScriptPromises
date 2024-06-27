let pr = new Promise(function (resolve, reject) {        //resolve ->execute through   .then()
                                                        //reject ->execute through   .catch()
 setTimeout(function () {
    console.log("Some async task");

    let task = true;
    if (task == true) {
      resolve();
    } else {
      reject();
    }
  });
}, 3000);

pr.then(function () {
  console.log("task successfully: promise  was completed");
})
  .catch(function () {
    console.log("task failure : promise was rejected");
  })
  .finally(function () {
    console.log("task was attempted");
  });

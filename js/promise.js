// 콜백지옥 해결
// 1) promise
// 2) async, await

// promise 상태
// 대기(pending), Fulfilled(이행), Rejected(실패)
// new Promise(); 대기

// new Promise((resolve, reject) => {
// 이행(비동기 처리가 완료되어 프로미스가 값을 반환해준 상태)
//   resolve();

// 실패 : 비동기 처리 실패
//   reject(new Error("error"));
// });

function test() {
  const p1 = new Promise((resolve, reject) => {
    console.log("hello");
    setTimeout(() => {
      resolve(console.log("2초지남"));
    }, 2000);
  })
    .then(() => console.log("bye"))
    .catch((res) => console.log("error" + res));

  console.log("hello again");

  console.log(p1);
}

test();

function getData1(callbackFunc) {
  return new Promise((resolve, reject) => {
    $.get("https://jsonplaceholder.typicode.com/todos/1", function (res) {
      if (res) {
        resolve(res);
      }
      reject(new Error("error"));
    });
  });
}

getData1()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

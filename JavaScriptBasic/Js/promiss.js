const myPromise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});

myPromise
    .then((message) => {
        console.log(message); // จัดการผลลัพธ์ที่สำเร็จ
    })
    .catch((error) => {
        console.error(error); // จัดการข้อผิดพลาด
    });
// ฟังกช์ นั ทีEจะถูกเรียกใชซ้ Cาํ
function myIntervalFunction() {
    console.log("This is an interval function"); }
    // เรียกใชฟ้ ังกช์ นั setInterval() พร้อมกบั ส่งฟังกช์ นั myIntervalFunction และระยะเวลา2000 มิลลิวนิ าที(2 วนิ าที) 
    
    const intervalID = setInterval(myIntervalFunction, 2000);
    // ตวั อยา่ งการหยดุ interval หลงั จาก10 วนิ าที 
    setTimeout(() => {
    clearInterval(intervalID);
    console.log("Interval stopped"); }, 10000);
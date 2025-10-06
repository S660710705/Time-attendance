// สร้างวัตถุ XMLHttpRequest
var xhttp = new XMLHttpRequest();

// กำหนดฟังก์ชัน Callback ที่จะทำงานเมื่อได้รับการตอบกลับ
xhttp.onload = function() {
  if (this.status == 200) {
    // อัปเดตเนื้อหาของหน้าเว็บหรือจัดการข้อมูลที่ได้รับ
    document.getElementById("demo").innerHTML = this.responseText;
  }
};

// เปิดวัตถุ XMLHttpRequest และระบุวิธีการ (GET) และ URL ที่ต้องการร้องขอ
xhttp.open("GET", "ajax_info.txt", true);

// ส่งคำขอไปยังเซิร์ฟเวอร์
xhttp.send();
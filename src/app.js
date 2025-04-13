require('dotenv').config(); 
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;




app.use(cors());
app.use(express.json());


app.get("/api/test", (req,  res)=> { 
 res.send("Đoạn Code Đã Chạy Thành Công Chúc Mừng");
});



app.listen(5000, () => {
    console.log(`Sever Đang Chạy Trên Port ${port}`);
  });

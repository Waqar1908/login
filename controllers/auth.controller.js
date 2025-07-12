const db = require("../config/db");

exports.login=(req,res)=>{
    const{ email,password}=req.body
    const query="select * from login where email=? and pass_word=?";

    db.query(query,[email,password],(err,results)=>{
        if (err) {
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        if (results.length > 0) {
            const user = results[0];
            res.json({
              success: true,
              message: 'Login successful',
              user: { id: user.id, email: user.email }
            });
          } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
          }
    });

};

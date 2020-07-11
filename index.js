
const fs = require('fs');
const csvsync = require('csvsync');

//mailer;


const nodemailer = require('nodemailer') ;

let transporter = nodemailer.createTransport({
  service:"gmail",
  pool: true,
  maxConnections:1,
  maxMessages:100,
  rateLimit:1,
  auth:{
    user:'XXXXXXXXXX@gmail.com',
    pass:'XXXXXXXXXX'
  }
});



const mailCollege=(college, email,i)=>{
  let mailOptions={
    from:'XXXXXXXXXX@gmail.com',
    to: email,
    subject: "Request from a prospective freshman",
    text: 
    `Dear ${college},\n
    I’m xxxxxx! I have recently finished my XXXXXXXXXX in XXXXXXXXXX atXXXXXXXXXX and I hope to further my studies in the US. 
    I’m very keen on applying to ${college} as it looks like just the right community I want to be a part of. 

    While I am still considering my options, I would highly appreciate any sort of college materials you could send me to help guide my decision.
    Brochures, t-shirts, caps, I'd appreciate anything you would be willing to send my way! 
    
    My address is:
    XXXXXXXXXX
    
    If all fares well, I hope to be a part of the community at ${college} starting next fall!

    Sincerely, 
    XXXXXXXXXX, 
    Prospective Freshman`
  }

  transporter.sendMail(mailOptions,function(err, info){
    if(err){
      console.log(err)
    }else{

      console.log(`[${i}]OK: ${college} (${email})`)
      console.log(info.response)
    }
    
  })
}



// parser
// transporter.close()
var csv = fs.readFileSync('emails.csv');
var data = csvsync.parse(csv);


for (let i = 1704; i<=1717;i++){
 setTimeout(function(){mailCollege(data[i][0],data[i][1],i)},1200);
}

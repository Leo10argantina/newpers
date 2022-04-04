function sendMail(params){
    let msg={
        from_name:document.getElementById("name").value,
        from_email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,

    };
    emailjs.send("service_qh8lyxk","template_wkm6xby",msg).then((res)=>{
        alert("Your message has been sent.Thank you!");

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("subject").value="";
    document.getElementById("message").value="";
    })
    
    


}
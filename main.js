    let input=document.querySelector(".cont input")
    let valid=document.querySelector(".valid")
    let btn=document.querySelector(".submit")
    let sec=document.querySelector(".cont2")
    let par=document.querySelector(".cont2 .text")
    let first=document.querySelector(".cont")
    let contt=null
    const emailPattern = /\w+@(\w+|\w*\d*).com/
    btn.addEventListener("click",function(){
        contt=input.value
        if(emailPattern.test(contt)){
            par.textContent=` A confirmation email has been sent to ${contt}. 
            Please open it and click the button inside to confirm your subscription.`
            first.style.display="none"
            sec.style.display="block"
        }
        else{
            valid.textContent="valid email required"
            valid.style.color="red"
        }
        
    })
    
    

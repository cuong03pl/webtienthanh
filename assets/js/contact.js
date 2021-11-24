

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const requestBtn = $('.request-btn')
const retypeBtn = $('.retype-btn')
const inputs = $$('input')
    
   
// kiem tra xem phai gmail khong
function formValidate(){
    const email = $('input[name="email"]')
    const name = $('input[name="name"]')
    const phone = $('input[name="phone"]')
    const address = $('input[name="address"]')
    const emailCheck = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    
    if(email.value === ''|| name.value === '' || phone.value === '' || address.value === '' ) {
        alert('Vui lòng nhập đầy đủ thông tin trong các ô có dấu * trước khi gửi liên hệ')
    }
    else {
        if (emailCheck.test(email.value)) {  } 
        else {
            alert('Bạn đã nhập email chưa chính xác, vui lòng nhập lại email' );
            
        }  
    }
}

// nhap lai tat ca
function reType(){
    inputs.forEach((input) =>{
        input.value = null;
    })
}

// xu ly yeu cau
function handleRequest(){
    requestBtn.onclick = () => {
        formValidate()
    }
    retypeBtn.onclick = () =>{
        reType()
    }

}
handleRequest()

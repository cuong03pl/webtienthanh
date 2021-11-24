const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const plusBtn = $('.plus-btn')
const minusBtn = $('.minus-btn')
const companyHistorys = $$('.company-history-text')
const app = {
    handleZoom(){
     let fontSizeCurrent = 16;
        plusBtn.onclick = () => {
            fontSizeCurrent += 1;
             companyHistorys.forEach((companyHistory) => {
                companyHistory.style.fontSize = fontSizeCurrent + 'px'
            })
        }
        minusBtn.onclick = () => {
            fontSizeCurrent -= 1;
            companyHistorys.forEach((companyHistory) => {
                companyHistory.style.fontSize = fontSizeCurrent + 'px'
            })
        }

       
    },
    
}
app.handleZoom()




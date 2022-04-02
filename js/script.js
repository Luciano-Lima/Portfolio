const textEl = document.querySelector('.hero__heading')
const text = 'Making Things Happen'

let index = 1

const writeText = () => {
    textEl.innerHTML = text.slice(0, index)
    index++
    if(index > text.length){
        return 0
    }
    setTimeout(writeText, 200)
}
writeText()
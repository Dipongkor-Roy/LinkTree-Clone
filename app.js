const shareButtons=document.querySelectorAll('.tile-btn')
console.log(shareButtons)


async function copyText(e){
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " +link)
    }catch(err){
        console.error(err)
    }
} 

shareButtons.forEach(shareButtons =>
     shareButtons('click',copyText))
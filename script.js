const expandableButtons = document.querySelectorAll('[data-expandable-Button]')
const expandableElements = document.querySelectorAll("[data-expandable]")



checkForOverflow()
expandableButtons.forEach(expandableButton =>{
    const containerExpandable = expandableButton.closest('[data-expandable]')
    expandableButton.addEventListener('click' , ()=>{
        containerExpandable.classList.toggle('expanded')
        setExpandButtonText(expandableButton)
    })
    setExpandButtonText(expandableButton)
})

function setExpandButtonText(button){
    const containerExpandable = button.closest('[data-expandable]')
    const expanded = containerExpandable.classList.contains("expanded")
    button.innerText = expanded ? "Read Less" : "Read More"
}

function checkForOverflow() {
    expandableElements.forEach(expandableElement => {
    if (expandableElement.classList.contains("expanded")) return
    const expandableText = expandableElement.querySelector("[data-expandable-text]")
    const overflowing = expandableText.scrollHeight > expandableText.clientHeight
    expandableElement.dataset.overflow = overflowing
    })
}

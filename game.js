document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".main_container");

  for (let i = 0; i < 30; i++) {
    const div = document.createElement("div");
    // div.textContent = `hi`;
    div.classList.add('word');
    div.tabIndex='0';
    container.appendChild(div);
  }
});
document.addEventListener('keydown',(e)=>{
    const focusSection=document.activeElement;
    if(focusSection && focusSection.classList.contains('word') && e.key.length===1){
        focusSection.textContent=e.key;

        let nextSection=focusSection.nextSibling;
        while(nextSection && !nextSection.classList.contains(word)){
            nextSection=nextSection.nextSibling;

        }
        if(nextSection){
            nextSection.focus();
        }


    }

})

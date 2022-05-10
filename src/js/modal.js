(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    
   
    

    modal: document.querySelector("[data-modal]"),
    burger: document.querySelector("#but1"),
    noscroll: document.querySelector("#body1"),
    buyBtn: document.querySelector("#but2"),
    
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.burger.classList.toggle("is");
    refs.noscroll.classList.toggle("is");
    refs.buyBtn.classList.toggle("is");
    
    
  }
})();


(() => {
  const scroll = {
    onhide: document.querySelector("#li1"),
    // nohide: document.querySelector("#body1"),
    
    active: document.querySelector("[data-modal]"),
    delis: document.querySelector("#body1"),
    lookbtn:document.querySelector("#but2"),
   
    
  };

  
  scroll.onhide.addEventListener("click",toggleModal );
  
  function toggleModal() {
    
    scroll.active.classList.toggle("is-hidden");
    scroll.delis.classList.toggle("is");
    scroll.lookbtn.classList.toggle("is");
  }
})();



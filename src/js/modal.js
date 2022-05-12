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
    onhide2: document.querySelector("#li2"),
    onhide3: document.querySelector("#li3"),
    onhide4: document.querySelector("#li4"),
    // nohide: document.querySelector("#body1"),
    
    active: document.querySelector("[data-modal]"),
    delis: document.querySelector("#body1"),
    lookbtn:document.querySelector("#but2"),
   
    
  };

  
  scroll.onhide.addEventListener("click", toggleModal);
  scroll.onhide2.addEventListener("click", toggleModal);
  scroll.onhide3.addEventListener("click", toggleModal);
  scroll.onhide4.addEventListener("click",toggleModal );
  
  function toggleModal() {
    
    scroll.active.classList.toggle("is-hidden");
    scroll.delis.classList.toggle("is");
    scroll.lookbtn.classList.toggle("is");
  }
})();


//contacts
 (() => {
   const contact = {
    // btn for open
    btnMap: document.querySelector("#map"),
    
    
    //btn for closes
     btnConClose: document.querySelector("#svgCon"),
    // location change class
     location: document.querySelector("#con1"),
     bodyNoClick: document.querySelector("#body1"),
    backDrop: document.querySelector("#drop"),
     
   };

  
  contact.btnMap.addEventListener("click", toggleModal);
  
   contact.btnConClose.addEventListener('click', toggleModal);
  // scroll.onhide4.addEventListener("click",toggleModal );
  
  function toggleModal() {
    
    contact.location.classList.toggle("active");
    contact.bodyNoClick.classList.toggle("no-click");
    contact.bodyNoClick.classList.toggle("is");
    contact.backDrop.classList.toggle("is-hide");
  }
})();

//contacts
 (() => {
   const contact = {
    // btn for open
    btnFran: document.querySelector("#fran"),
    
    //btn for closes
     btnConClose: document.querySelector("#svgcon--two"),
    // location change class
     bodyNoClick: document.querySelector("#body1"),
     franchise: document.querySelector("#location"),
     backDrop: document.querySelector("#drop"),
     bodyNoClick: document.querySelector("#body1"),
   };

  
  
  contact.btnFran.addEventListener("click", toggleModal);
   contact.btnConClose.addEventListener('click', toggleModal);
  // scroll.onhide4.addEventListener("click",toggleModal );
  
   function toggleModal() {
    
    contact.bodyNoClick.classList.toggle("no-click");
    contact.franchise.classList.toggle("active");
    contact.backDrop.classList.toggle("is-hide");
    contact.bodyNoClick.classList.toggle("is");
    // contact.lookbtn.classList.toggle("is");
  }
})();
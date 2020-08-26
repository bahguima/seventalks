
let ja_passou = "0";
function onMouseOut(event) {

    if ( ja_passou = "0" &&
      event.clientY < 50 &&
      event.relatedTarget == null &&
      event.target.nodeName.toLowerCase() !== 'select') {
      // Tira o evento
      document.removeEventListener("mouseout", onMouseOut);
  
      // Mostra o pop up
      document.getElementById("popup").style.display = "block";
      ja_passou="1";

    }
  }
  
  document.addEventListener("mouseout", onMouseOut);
 
  const exit = e => {
    if (e.target.className === 'close') {
      document.getElementById("popup").style.display = "none";
    }
};

document.querySelector('.popup__wrapper').addEventListener('click', exit);


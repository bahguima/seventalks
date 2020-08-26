function onMouseOut(event) {

    if (
      event.clientY < 50 &&
      event.relatedTarget == null &&
      event.target.nodeName.toLowerCase() !== 'select') {
      // Tira o evento
      document.removeEventListener("mouseout", onMouseOut);
  
      // Mostra o pop up
      document.getElementById("popup").style.display = "block";
    }
  }
  
  document.addEventListener("mouseout", onMouseOut);


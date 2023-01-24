function enableDragAndDrop() {
    let images = document.querySelectorAll('.draggable');
    images.forEach(image => {
      image.addEventListener('dragstart', dragStart);
      image.addEventListener('dragend', dragEnd);       /* aktiviert das Drag-and-Drop-Verhalten für Bilder (die mit der Klasse "draggable" markiert sind)
                                                         und Slots (die mit der Klasse "slot" markiert sind) */
    });
    
    let slots = document.querySelectorAll('.slot');
    slots.forEach(slot => {
      slot.addEventListener('dragover', dragOver);
      slot.addEventListener('dragenter', dragEnter);
      slot.addEventListener('dragleave', dragLeave);
      slot.addEventListener('drop', dragDrop);
    });
  }

  let originalSibling;
  function dragStart() {                               /* dragStart() wird aufgerufen, wenn ein Benutzer mit der 
                                                      Maus auf ein Bild klickt und es ziehen will. */
    this.classList.add('dragging');
    originalSibling = this.nextSibling;
  }
  
  function dragEnd() {                                 /* dragEnd() wird aufgerufen, wenn ein Benutzer die Maustaste loslässt,
                                                       um das Ziehen des Bilds zu beenden. Es entfernt die Klasse "dragging" */
 this.classList.remove('dragging');
  }                                                   
  
  function dragOver(e) {                                /* Die Funktion dragOver(e) wird aufgerufen, wenn ein Benutzer ein Bild über einen Slot zieht */
    e.preventDefault();
  }
  
  function dragEnter(e) {                               
    e.preventDefault();
    this.classList.add('drag-over');
  }                                                     /* dragEnter(e) wird aufgerufen, wenn ein Benutzer ein Bild in den Bereich eines Slots bewegt */
  
  function dragLeave() {
    this.classList.remove('drag-over');
  }                                                      /* dragLeave() wird aufgerufen, wenn ein Benutzer ein Bild außerhalb des Bereichs eines Slots bewegt. */
  
 

  function dragDrop() {
    this.classList.remove('drag-over');
    let currentDraggable = document.querySelector('.dragging');
    let currentSlot = currentDraggable.parentNode;
    let targetSlot = this;
    currentSlot.appendChild(targetSlot.firstElementChild);
    targetSlot.appendChild(currentDraggable);
}
                                                        /* dragDrop() wird aufgerufen, wenn ein Benutzer das Bild loslässt, während es sich über einem Slot befindet. */
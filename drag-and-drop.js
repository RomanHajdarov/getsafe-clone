function enableDragAndDrop() {
    let images = document.querySelectorAll('.draggable');
    images.forEach(image => {
      image.addEventListener('dragstart', dragStart);
      image.addEventListener('dragend', dragEnd);
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
  function dragStart() {
    this.classList.add('dragging');
    originalSibling = this.nextSibling;
  }
  
  function dragEnd() {
    this.classList.remove('dragging');
  }
  
  function dragOver(e) {
    e.preventDefault();
  }
  
  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
  }
  
  function dragLeave() {
    this.classList.remove('drag-over');
  }
  
 

  function dragDrop() {
    this.classList.remove('drag-over');
    let currentDraggable = document.querySelector('.dragging');
    let currentSlot = currentDraggable.parentNode;
    let targetSlot = this;
    currentSlot.appendChild(targetSlot.firstElementChild);
    targetSlot.appendChild(currentDraggable);
}

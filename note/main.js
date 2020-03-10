(function () {
    let draggedEl,
        onDragStart,
        onDrag,
        onDragEnd,
        getNoteObject,
        grabPointY,
        grabPointX,
        createNote,
        addNoteBtnEl,
        onAddNoteBtnClick,
        saveNote,
        deleteNote,
        loadNotes,
        init,
        testLocalStorage;
    
    onDragStart = function (ev) {
      var boundingClientRect;
      if (ev.target.className.indexOf('bar') === -1) {
        return;
      }
      
      draggedEl = this;
      
      boundingClientRect = draggedEl.getBoundingClientRect();
      
      grabPointY = boundingClientRect.top - ev.clientY;
      grabPointX = boundingClientRect.left - ev.clientX;
    };
    
    onDrag = function (ev) {
      if (!draggedEl) {
        return;
      }
      
      var posX = ev.clientX + grabPointX,
          posY = ev.clientY + grabPointY;
      
      if (posX < 0) {
        posX = 0;
      }
      
      if (posY < 60) {
        posY = 60;
      }
      
      draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
    };
    
    onDragEnd = function () { 
      draggedEl = null;
      grabPointX = null;
      grabPointY = null;
    };
    
    getNoteObject = function (el) {
      let textarea = el.querySelector('textarea');
      return {
        transformCSSValue: el.style.transform,
        content: textarea.value,
        id: el.id,
        textarea: {
          width: textarea.style.width,
          height: textarea.style.height,
        }
      };
    };
    
    onAddNoteBtnClick = function () {
      createNote();
    };
    
    createNote = function (options) {
      let stickerEl = document.createElement('div'),
          barEl = document.createElement('div'),
          saveBtnEl = document.createElement('button'),
          deleteBtnEl = document.createElement('button'),
          textareaEl = document.createElement('textarea'),
          area = 600,
          noteConfig = options || {
            transformCSSValue: "translateX(" + Math.random() * area + "px) translateY(" + Math.random() * area + "px)",
            content: '',
            id: "sticker_" + new Date().getTime(),
          },
          onSave,
          onDelete;
      
      if (noteConfig.textarea) {
        textareaEl.style.width = noteConfig.textarea.width;
        textareaEl.style.height = noteConfig.textarea.height;
        textareaEl.style.resize = 'none';
      }
      
      onSave = function () {
        saveNote(
          getNoteObject(stickerEl)
        );
      };
  
      onDelete = function () {
        deleteNote(
          getNoteObject(stickerEl)
        );
  
        document.body.removeChild(stickerEl);
      };
      
      stickerEl.style.transform = noteConfig.transformCSSValue; 
      stickerEl.id = noteConfig.id;
      textareaEl.value = noteConfig.content;
      
      saveBtnEl.classList.add('saveButton');
      saveBtnEl.addEventListener('click', onSave, false);
      
      deleteBtnEl.classList.add('deleteButton');
      deleteBtnEl.addEventListener('click', onDelete, false);
      
      barEl.classList.add('bar');
      stickerEl.classList.add('sticker');
      
      barEl.appendChild(saveBtnEl);
      barEl.appendChild(deleteBtnEl);
      
      stickerEl.appendChild(barEl);
      stickerEl.appendChild(textareaEl); 
      
      stickerEl.addEventListener('mousedown', onDragStart, false);
      
      document.body.appendChild(stickerEl);
    };
    
    testLocalStorage = function () {
      let storage = 'storage';
      try {
        localStorage.setItem(storage, storage);
        localStorage.removeItem(storage);
        return true;
      } catch (e) {
        return false;
      }
    };
    
    init = function () {
      
      if (!testLocalStorage) {
        let message = "Cannot use LocalStorage";
        saveNote = function () {
          console.warn(message);
        };
        
        deleteNote = function () {
          console.warn(message);
        };
      } else {
        saveNote = function (note) {
          localStorage.setItem(note.id, JSON.stringify(note));
        };
  
        deleteNote = function (note) {
          localStorage.removeItem(note.id);
        };
  
        loadNotes = function () {
          for(let i = 0; i < localStorage.length; i++) {
            let noteObject = JSON.parse(
              localStorage.getItem(
                localStorage.key(i)
              )
            );
            createNote(noteObject);
          };
        };
            loadNotes();
        }
        addNoteBtnEl = document.querySelector('.addNoteBtn');
        addNoteBtnEl.addEventListener('click', onAddNoteBtnClick, false);
        document.addEventListener('mousemove', onDrag, false);
        document.addEventListener('mouseup', onDragEnd, false);
    };

    init();

})();

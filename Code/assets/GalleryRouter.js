module.exports = {
  buttons: [],

  selected: 0,

  initBtn(list) {
    this.list = list;

    for (let i = 0; i < list.children.length; i++) {
      this.list.children[i].children[0].addEventListener("click", this.visual.bind(this));

      this.list.children[i].children[0].children[1].style.opacity = 0;

      this.buttons.push(this.list.children[i].children[0]);  
    };

    this.selected = this.list.children[0].children[0].children[1];
    this.selected.style.animation = "visual 1s";
    this.selected.addEventListener("animationend", this.saveVisual.bind(this));
  },

  visual(elem) {
    var btnCurrent;

    console.log(this.selected);
    
    this.hide(this.selected);

    for (let i = 0; i < this.list.children.length; i++) {
      if(this.list.children[i].children[0] === elem.target.parentElement) {
        btnCurrent = this.list.children[i].children[0];
        break;
      }
    }

    this.selected = btnCurrent.children[1];

    btnCurrent.children[1].style.animation = "visual 1s";

    btnCurrent.children[1].addEventListener("animationend", this.saveVisual.bind(this));
  },

  saveVisual(elem) {
    elem.target.style.opacity = 1;
    elem.target.style.animation = "";    
  },

  hide(elem) {
    elem.style.animation = "hide 1s";

    elem.addEventListener("animationend", this.saveHide.bind(this));
  },

  saveHide(elem) {
    elem.target.style.opacity = 0;
    elem.target.style.animation = "";
  }
}
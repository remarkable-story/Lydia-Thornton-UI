class tabLink {
    constructor(element) {
      this.element = element;
      this.tabData = this.element.dataset.tab;
      if (this.tabData === 'All') {
        this.cards = document.querySelectorAll('.card');
      } else {
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`)
      }
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
      this.element.addEventListener('click', (event) => this.selectTab(event))
    }
    
    selectTab() {
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => tab.classList.remove('active-tab'));
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => card.style.display = 'none');
      this.element.classList.add('active-tab');
      this.cards.forEach(card => card.selectCard(this.TabCard));
      
    }
  }
  
  class TabCard {
    constructor(cardElement) {
      this.cardElement = cardElement;
    }
    selectCard() {
      this.cardElement.style.display = "flex"
      this.cardElement.style.flexDirection = "column"
    }
  }
  
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => new tabLink(tab));


/*

  function initializeViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("tableauViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/shared/D8M3XWXBG?:display_count=yes";
    // An object that contains options specifying how to embed the viz
    var options = {
      width: '600px',
      height: '600px',
      hideTabs: true,
      hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
  }
  
  */
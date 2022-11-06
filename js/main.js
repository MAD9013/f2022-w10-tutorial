function init() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#nav');
  const clicktoclose = document.querySelector('.click-to-close');
  const toTop = document.querySelector('.to-top');

  function toggleNav(e) {
    e.preventDefault();
    navToggle.classList.toggle('open');
    nav.classList.toggle('open');
    clicktoclose.classList.toggle('open');
  }

  navToggle && navToggle.addEventListener('click', toggleNav);
  clicktoclose && clicktoclose.addEventListener('click', toggleNav);


  if (toTop) {
    function handleToTop() {
      if (window.scrollY > 50) {
        toTop.classList.add('visible');
      } else {
        toTop.classList.remove('visible');
      }
    }
  
    handleToTop();
  
    toTop && window.addEventListener('scroll', handleToTop);
  }


  /*
  *   This content is licensed according to the W3C Software License at
  *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
  *
  *   Simple accordion pattern example
  */

  'use strict';

  class Accordion {
    constructor(domNode) {
      this.rootEl = domNode;
      this.buttonEl = this.rootEl.querySelector('button[aria-expanded]');

      const controlsId = this.buttonEl.getAttribute('aria-controls');
      this.contentEl = document.getElementById(controlsId);

      this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';

      // add event listeners
      this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
    }

    onButtonClick() {
      this.toggle(!this.open);
    }

    toggle(open) {
      // don't do anything if the open state doesn't change
      if (open === this.open) {
        return;
      }

      // update the internal state
      this.open = open;

      // handle DOM updates
      this.buttonEl.setAttribute('aria-expanded', `${open}`);
      if (open) {
        this.contentEl.removeAttribute('hidden');
      } else {
        this.contentEl.setAttribute('hidden', '');
      }
    }

    // Add public open and close methods for convenience
    open() {
      this.toggle(true);
    }

    close() {
      this.toggle(false);
    }
  }

  // init accordions
  const accordions = document.querySelectorAll('.accordion h3');
  accordions.forEach((accordionEl) => {
    new Accordion(accordionEl);
  });


}

document.addEventListener('DOMContentLoaded', init);
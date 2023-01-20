(() => {
  
  hljs.highlightAll();

  const ajustarAnoAtual = () => {
    const areas = document.querySelectorAll("[data-ano-atual]");
    const dataAtual = new Date();
    areas.forEach(area => {
      area.textContent = `${dataAtual.getFullYear()}`;
    })
  }
  
  const controlarModal = () => {
    const botaoModal = document.querySelectorAll('[data-direito-autorais]');
    botaoModal.forEach(botao => {
      botao.addEventListener('click', (evento) => {
        const modal = document.querySelector('[data-modal]');
        modal.showModal();
        
        const btnFecha = modal.querySelector('[data-modal-fecha]');
        btnFecha.addEventListener('click', () => {
          modal.close();
        })
      })
    });
  }
  
  const botaoRecarregar = document.querySelectorAll('[data-recarrega-pagina]');
  botaoRecarregar.forEach(botao => {
    botao.addEventListener('click', () => {
      window.location.reload();
    })
  })
    
  window.addEventListener("load", function () {
    const overlay2 = document.querySelector(".overlay-2");
    overlay2.style.display = "none";

    ajustarAnoAtual();
    controlarModal();
  })

})();
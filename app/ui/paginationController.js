class PaginationController {
  constructor(btnLeft, btnRight, inputPage, labelPage) {
    this.btnLeft = btnLeft;
    this.btnRight = btnRight;
    this.inputPage = inputPage;
    this.labelPage = labelPage;
  }

  updatePagination(results) {
    this.btnLeft.innerHTML = results.info.prev
      ? `<button id="prev" class="col-4 btn btn-rm prev btn-sm-height" data-url=${results.info.prev}>Anterior</button>`
      : "";
    this.btnRight.innerHTML = results.info.next
      ? `<button id="next" class="col-4 btn btn-rm prev btn-sm-height" data-url=${results.info.next}>Siguiente</button>`
      : "";

    this.updatePageCounter(results);
  }

  updatePageCounter(results) {
    if (results.info.next) {
      const url = results.info.next;
      const posiPage = url.indexOf("page=");
      const numerPageSlice = url.slice(posiPage + 5);
      const page = numerPageSlice.split("&")[0] - 1;

      this.inputPage.value = page;
      this.labelPage.innerHTML = `de ${results.info.pages}`;
    } else if (!results.info.next && results.info.prev) {
      const url = results.info.prev;
      const posiPage = url.indexOf("page=");
      const numerPageSlice = url.slice(posiPage + 5);
      const page = parseInt(numerPageSlice.split("&")[0]) + 1;

      this.inputPage.value = page;
      this.labelPage.innerHTML = `de ${results.info.pages}`;
    } else {
      this.inputPage.value = 1;
      this.labelPage.innerHTML = `de 1`;
    }
  }

  hideOnError() {
    // Clear pagination buttons
    this.btnLeft.innerHTML = "";
    this.btnRight.innerHTML = "";

    // Reset page counter to 1/1
    this.inputPage.value = 1;
    this.labelPage.innerHTML = "de 1";
  }
}

export default PaginationController;

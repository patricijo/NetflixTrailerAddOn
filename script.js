const icon =
  '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" style="margin: -6px;height: 30px;"><rect x="48" y="96" width="416" height="320" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="128" y="96" width="256" height="160" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="128" y="256" width="256" height="160" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect></svg>';

const tooltip = '<div class="NF-trailer-tooltip">Trailer</div>';

////////////////////////
//// OBSERVER
////////////////////////

var focusTrapObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length) {
      if (mutation.addedNodes[0].classList.contains("mini-modal")) {
        addButtonToPreview();
      }

      if (mutation.addedNodes[0].classList.contains("detail-modal")) {
        addButtonToDetail();
      }
    }
  });
});

var focusTrapWrapper = document.querySelector('[dir="ltr"]');

focusTrapObserver.observe(focusTrapWrapper, {
  childList: true,
  subtree: true,
});

////////////////////////
//// ADD TO PREVIEW
////////////////////////

const addButtonToPreview = () => {
  var item = document.querySelector(".focus-trap-wrapper");

  var title = item
    .querySelector("img.previewModal--boxart")
    .getAttribute("alt");

  var url =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(title) +
    "%20trailer";

  var trailerBtn = `<button onClick="window.open('${url}', '_blank')" class="trailer-button color-supplementary round ltr-1knzl35">${
    icon + tooltip
  }</button>`;

  item
    .querySelector(".primary-button")
    .insertAdjacentHTML("afterend", trailerBtn);

  //adding the button when the modal-mini transforms to modal-detail
  /*   item.querySelector(".mini-modal-container").onclick = function () {
    setTimeout(function () {
      addButtonToDetail();
    }, 500);
  }; */
};

////////////////////////
//// ADD TO DETAIL
////////////////////////

const addButtonToDetail = () => {
  if (document.querySelector(".about-header")) {
    var item = document.querySelector(".focus-trap-wrapper");

    var title = item
      .querySelector(".about-header")
      .querySelector("strong").innerHTML;

    var url =
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(title) +
      "%20trailer";

    var trailerBtn = `<button onClick="window.open('${url}', '_blank')" class="trailer-button color-supplementary round ltr-1knzl35">${
      icon + tooltip
    }</button>`;

    item
      .querySelector(".primary-button")
      .insertAdjacentHTML("afterend", trailerBtn);
  }
};

// add button on page load

if (document.querySelector(".focus-trap-wrapper")) {
  addButtonToDetail(document.querySelector(".focus-trap-wrapper"));
}

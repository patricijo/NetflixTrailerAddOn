$(".about-header").each(function () {
  const title = encodeURIComponent($(this).find("strong").text());

  const YTurl =
    "https://www.youtube.com/results?search_query=" + title + "%20trailer";

  const icon =
    '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" style="margin: -6px;;height: 30px;"><rect x="48" y="96" width="416" height="320" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="384" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="336" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="256" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="176" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="48" y="96" width="80" height="80" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="128" y="96" width="256" height="160" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="128" y="256" width="256" height="160" rx="28" ry="28" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect></svg>';

  const tooltip = '<div class="NF-trailer-tooltip">Trailer</div>';

  const trailerBtn = `<a href="${YTurl}" target="_blank"><button class="trailer-button color-supplementary round ltr-1knzl35">${
    icon + tooltip
  }</button></a>`;

  $(".buttonControls--container").append(trailerBtn);
});

function removeJableAds() {
  const adDivs = document.querySelectorAll('div.exo-native-widget-outer-container');

  adDivs.forEach((adDiv) => {
    const parentDiv = adDiv.closest('div.col-6.col-sm-4.col-xl-3');
    if (parentDiv) {
      parentDiv.style.display = 'none';
    }
  });
}

// Run the function initially and set an interval to keep checking for new ads
removeJableAds();
setInterval(removeJableAds, 1000);

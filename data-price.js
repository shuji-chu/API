 cat in allApis) {
    allApis[cat].forEach(api => {
      if (priceMap.hasOwnProperty(api.id)) {
        api.price = priceMap[api.id];
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', applyPrice);
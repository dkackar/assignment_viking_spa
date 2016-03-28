vikingStore.filter('categoryFilter', function () {
  return function(items,category) {
    var filtered = [];    
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      console.log("Category " + item.category  + " , " + category);
      console.log("Category " + item.category == category);
      if (item.category == category ) {
        filtered.push(item);
      }
    }
    console.log("Filtered " + filtered);
    return filtered;
  };
});
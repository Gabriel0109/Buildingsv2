// Cache selectors
var mainHeader = $(".main-header"),
    mainHeaderHeight = mainHeader.outerHeight()+15,
    // All list items
    menuList = mainHeader.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuList.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    console.log(menuList);
// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+mainHeaderHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuList
     .parent().removeClass("active")
     .end().filter("[href='#"+id+"']").parent().addClass("active");
});
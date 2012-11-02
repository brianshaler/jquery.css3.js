(function($){
  $.fn.css3 = function (prop, val) {
    var props;
    var prefixen = ["-webkit-", "-moz-", "-o-", ""];
    
    if (typeof prop === "object") {
      props = prop;
    } else {
      props = {};
      props[prop] = val;
    }
    
    return this.each(function () {
      var newProps = {};
      $.each(props, function (key, val) {
        $.each(prefixen, function (index, prefix) {
          newProps[prefix+key] = val.replace(/\{prefix\}/g, prefix);
        });
      });
      $(this).css(newProps);
    });
  };
})(jQuery);
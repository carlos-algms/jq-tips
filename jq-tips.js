/* ver 0.1.0
 * 2014-07-12
 * by: Carlos A. Gomes
 */
(function($) {
  var cacheElms = [];
  var nTips = 0;
  var $body;

  $.fn.jqTips = function(params) {
    var options;
    $body = $body || $('body');

    var defaults = {
      delay: 100
    };

    options = $.extend(true, defaults, params);

    function getElm(obj) {
      var ret = false;
      var id = obj.attr("id");

      try {
        ret = cacheElms[id];
      } catch (e) {
      }

      if (!ret) {
        ret = $("<div />");
        ret.fadeTo(0);

        ret.attr("id", ("wigamTips_filho_" + id));
        ret.addClass("wigamTips_tip");
        ret.append($("<div />").addClass("texto"));

        ret.append($("<img />").attr("src", "/assets/js/plugins/wigamTips/ponta_baixo.png").addClass("ponta"));

        $body.append(ret);

        var title = obj.attr("title");
        obj.attr("title", "");
        ret.find(".texto").html(title);

        cacheElms[id] = ret;
      }

      return ret;
    }

    var HoverIn = function() {
      var obj = $(this);
      var posPai = obj.offset();
      var toolTip = getElm(obj);

      var Css = {
        top: (posPai.top - toolTip.height() - 10)
        , left: (posPai.left - (toolTip.width() * 0.5) + (obj.width() / 2))
        , display: "block"
      };

      toolTip.css(Css);


      toolTip.animate(
        {
          opacity: 1
        }, {
        duration: options.delay
        , queue: false
      });
    };

    var HoverOut = function() {
      var toolTip = getElm($(this));

      toolTip.clearQueue().attr("style", "").animate(
        {
          opacity: 0
        }, 100,
        function()
        {
          toolTip.css({
            display: "none"
            , top: "-10000px"
            , left: "-10000px"
          });

        });
    };

    var Handdler = function() {
      var obj = $(this);

      var id = obj.attr("id");

      if (!id)
      {
        nTips += 1;

        id = "wgToolTips_pai_" + (nTips);
        obj.attr("id", id);
      }

      obj.hover(HoverIn, HoverOut);

    };

    return this.each(Handdler);
  };

})(jQuery);


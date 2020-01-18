$(document).ready(function() { 
     $('pre').addClass('prettyprint linenums').attr('style', 'overflow:auto;');
     prettyPrint();

	  $(".diagram_sequence").sequenceDiagram({theme: 'simple'});
      var size = $(".diagram_flow").size();
      for (var i = 0; i < size; i ++) {
          var node = $(".diagram_flow").get(i);
          var textContent = node.textContent;
          node.textContent = null;
          node.id = "canvas" + i;
          $("#" + node.id).css("visibility","visible");
          var chart = flowchart.parse(textContent);
          chart.drawSVG(node.id,{
            'line-width': 1.5,
          });
      }

      wrapImageWithFancyBox();
}); 

    //copy from http://tianma.space/post/2208308547/index.html

/**
 * Wrap images with fancybox support.
 */
function wrapImageWithFancyBox() {
    $('img').not('.sidebar-image img').not('#author-avatar img').not(".mdl-menu img").each(function() {

        var $image = $(this);
        var imageCaption = $image.attr('alt');
        var $imageWrapLink = $image.parent('a');

        if ($imageWrapLink.size() < 1) {
            var src = this.getAttribute('src');
            var idx = src.lastIndexOf('?');
            if (idx != -1) {
                src = src.substring(0, idx);
            }
            $imageWrapLink = $image.wrap('<a href="' + src + '"></a>').parent('a');
        }

        $imageWrapLink.attr('data-fancybox', 'images');
        if (imageCaption) {
            $imageWrapLink.attr('data-caption', imageCaption);
        }

    });

    $().fancybox({
        selector : '[data-fancybox="images"]',
        hash : false,
        loop : false,
        
    });
}


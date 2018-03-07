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
}); 


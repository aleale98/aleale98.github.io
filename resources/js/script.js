$(document).ready(function(){
    const beforeMex = "Seguimi su instagram!";
    const afterMex = "Divertiti con le mie creazioni!";
    $(".container").hide();
    $("#instagram").hide();
    $("#ig").hide();
    $(".btn-21").click(function(){
        $(".btn-21").fadeOut(1000).promise().done(function(){
            $(".container").fadeIn(1000);
            $("#instagram").fadeIn(1000);
            $("#ig").show();
        });
    });
    $("#instagram").click(function(){
        if ($("#instagram").text() == beforeMex){
          // *** State Change: To Following ***      
          // We want the button to squish (or shrink) by 10px as a reaction to the click and for it to last 100ms    
          $("#instagram").animate({ width: '-=10px' }, 100, 'easeInCubic', function () {});
          
          // then now we want the button to expand out to it's full state
          // The left translation is to keep the button centred with it's longer width
          $("#instagram").animate({ width: '+=45px', left: '-=15px' }, 600, 'easeInOutBack', function () { 
            $("#instagram").css("color", "#fff");
            $("#instagram").text(afterMex);
    
            // Animate the background transition from white to green. Using JQuery Color
            $("#instagram").animate({
              backgroundColor: "#2EB82E",
              borderColor: "#2EB82E"
            }, 1000 );
          });
        }else{
          
          // *** State Change: Unfollow ***     
          // Change the button back to it's original state
          $("#instagram").animate({ width: '-=25px', left: '+=15px' }, 600, 'easeInOutBack', function () { 
            $("#instagram").text(beforeMex);
            $("#instagram").css("color", "#3399FF");
            $("#instagram").css("background-color", "#ffffff");
            $("#instagram").css("border-color", "#3399FF");
          });
        }
      }); 
});
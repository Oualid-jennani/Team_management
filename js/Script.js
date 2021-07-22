$(document).ready(function(){

    $('.contain').hover(function(){
        $('.hider').slideUp(1000);
        $('.info').fadeOut(500).css({left: '-15%'});;
    });
    $('.Main').hover(function(){
        $('.hider').slideDown(500);
        $('.info').fadeIn(500).css({left: '15%'});
    });

    for(var j = 0 ; j <= all_div-1 ; j++){
        $('.UL1').append('<li></li>');
    }

    $('.UL1 li').eq(all_div-1).animate( {height:'50px',opacity:'1'},1000);
    $('.UL1 li').not($('.UL1 li').eq(all_div-1)).animate( {height:'20px',opacity:'0.6'},1000);
    
    $('.BTN1').click(function(){
        pres();
    });
    $('.BTN2').click(function(){
        suiv();
    });
    
    $('.UL1 li').click(function(){
        i=$(this).index()-1;
        suiv();     
    });
    setInterval(suiv,10000);
    /**********************************************************************/

    ChangePos();
    var tp = 0;

    $('#listJ div').css({'position':'absolute'})
    setInterval(function(){
        tp = 0;
        $('#listJ div').each(function(){
            if($(this).css('right')>'0px'){
                $(this).css({'backgroundColor':'grey','left':'0px','top':''+tp+'px','position':'absolute','width':'200px','border': '2px solid black'})
                $(this).children('span').children().css({'top':'0','left':'5px'})
                $(this).children('.avence').css({'right':'10px'})
                tp = tp +50;
            }else{
                $(this).css({'backgroundColor':'transparent','width':'150px','border':'none'})
                $(this).children('span').children().css({'top':'-40px','left':'34px'})
                $(this).children('.avence').css({'right':'50px'})
            }
            
            if($(this).css('bottom')>'270px' && $(this).css('bottom')<'300px' && $(this).css('left')>'400px' && $(this).css('left')<'620px'){
                $(this).children('.pos').html("GK").css({'color':'#FF8000'})
            }else if($(this).css('bottom')>'270px' && $(this).css('bottom')<'490px' && $(this).css('left')<'340px'&& $(this).css('left')>'160px'){
                $(this).children('.pos').html("LB").css({'color':'aqua'})
            }else if($(this).css('bottom')>'270px' && $(this).css('bottom')<'490px' && $(this).css('left')>'675px'&& $(this).css('left')>'160px'){
                $(this).children('.pos').html("RB").css({'color':'aqua'})
            }else if($(this).css('bottom')>'270px' && $(this).css('bottom')<'475px' && $(this).css('left')>'340px' && $(this).css('left')<'675px'){
                $(this).children('.pos').html("CB").css({'color':'aqua'})
            }else if($(this).css('bottom')>'475px' && $(this).css('bottom')<'615px' && $(this).css('left')>'340px' && $(this).css('left')<'675px'){
                $(this).children('.pos').html("MDF").css({'color':'chartreuse'})
            }else if($(this).css('bottom')>'615px' && $(this).css('bottom')<'890px' && $(this).css('left')>'340px' && $(this).css('left')<'675px'){
                $(this).children('.pos').html("MO").css({'color':'chartreuse'})
            }else if($(this).css('bottom')>'490px' && $(this).css('bottom')<'890px' && $(this).css('left')<'340px' && $(this).css('left')>'160px'){
                $(this).children('.pos').html("MLG").css({'color':'chartreuse'})
            }else if($(this).css('bottom')>'490px' && $(this).css('bottom')<'890px' && $(this).css('left')>'675px'&& $(this).css('left')>'160px'){
                $(this).children('.pos').html("MLD").css({'color':'chartreuse'})
            }else if($(this).css('bottom')>'890px' && $(this).css('left')<'340px' && $(this).css('left')>'160px'&& $(this).css('left')>'160px'){
                $(this).children('.pos').html("AIG").css({'color':'red'})
            }else if($(this).css('bottom')>'890px' && $(this).css('left')>'340px' && $(this).css('left')>'675px'&& $(this).css('left')>'160px'){
                $(this).children('.pos').html("AID").css({'color':'red'})
            }else if($(this).css('bottom')>'890px' && $(this).css('left')>'340px' && $(this).css('left')<'675px'&& $(this).css('left')>'160px'){
                $(this).children('.pos').html("AC").css({'color':'red'})
            }else{
                $(this).children('.pos').html("---").css({'color':'red'})
            }
        })
    },0)
    
    /**********************************************************************/
    $('#md').click(function(){
        $('#UL0').slideToggle().css({'display':'block'});

        $('input[name="search"]').slideToggle().css({'display':'block'});
    })
    $(window).on('resize', function(){
          if ($(this).width() <970) {
              $('#md').css({'display':'inline'})
              
              $('#UL0').css({'display':'none','float':'none'})
              $('#UL0 li').css({'float':'none'})
              $('input[name="search"]').css({'display':'none','float':'none','width':'97%'})
          }else{
              $('#md').css({'display':'none'})
              
              $('#UL0').css({'display':'inline','float':'right'})
              $('#UL0 li').css({'float':'left'})
              $('input[name="search"]').css({'display':'inline-block','float':'right','width':'195px'})
          }
    });

    /**********************************************************************/
    
    $('#ADD').click(function(){
        $('.AJT_MDF').slideToggle().css({'display':'block'});
    })
    $('#listJ div').click(function(){
        $(this).children('.name').css({'color':'yellow'});
        $('#listJ div').not($(this)).children('.name').css({'color':'white'});
    })
     $('#AN').click(function(){
        $('.AJT_MDF').slideToggle().css({'display':'none'});
    })
    Add();
    drop();
    //Modifier();
});


/**********************************************************************/







window.onload = function() {
    $(document).ready(function(){
        if ($(window).width() <970) {
              $('#md').css({'display':'inline'});
              $('#UL0').css({'display':'none','float':'none'});
              $('#UL0 li').css({'float':'none'});
              $('input[name="search"]').css({'display':'none','float':'none','width':'97%'});
          }else{
              $('#md').css({'display':'none'});
              $('#UL0').css({'display':'inline-block','float':'right'});
              $('#UL0 li').css({'float':'left'});
              $('input[name="search"]').css({'display':'inline-block','float':'right','width':'195px'});
          }
     });
}
/**********************************************************************/

var all_div = $(".Slider div").length;
var i =all_div-1;

function pres(){
    $(document).ready(function(){
       if(i<=0){
            i=all_div-1;
        }
        else{i--;}
        $('.Slider div').eq(i).animate( {width:'100%',height:'100%',opacity:'1',left:'0px',top:'0%'});
        $('.Slider div').not($('.Slider div').eq(i)).animate( {width:'0%',height:'0%',opacity:'0.5',left:'50%',top:'50%'});
        $('.UL1 li').eq(i).animate( {height:'50px',opacity:'1'},1000);
        $('.UL1 li').not($('.UL1 li').eq(i)).animate( {height:'20px',opacity:'0.6'},1000);
    });
}

function suiv(){
    $(document).ready(function(){
        if(i>=(all_div-1)){
            i=0;
        }
        else{i++;}
        $('.Slider div').eq(i).animate( {width:'100%',height:'100%',opacity:'1',left:'0px',top:'0%'});
        $('.Slider div').not($('.Slider div').eq(i)).animate( {width:'0%',height:'0%',opacity:'0.5',left:'50%',top:'50%'});
        $('.UL1 li').eq(i).animate( {height:'50px',opacity:'1'},1000);
        $('.UL1 li').not($('.UL1 li').eq(i)).animate( {height:'20px',opacity:'0.6'},1000);
    });
    
}

/************************************************************/
var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('FT');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};
/************************************************************/
 function Add(){
    $(document).ready(function(){
        
        $('#OK').click(function(){

            var url = $('#FT').attr("src");
            console.log($('#FT').attr("src"));
            if(url == undefined){
                url = "Joeur/1.png";
            }

            if($('.nom').val() != "" && $('.Age').val() != "" && $('.AV').val() != "" && $('.Long').val() != "" ){
                $('#listJ').append('<div><span><span style="background-image: url('+url+')"></span></span><p class="name">'+$('.nom').val()+'</p><p class="avence">'+$('.AV').val()+'</p><p class="pos">--</p></div>');
                $('.AJT_MDF').slideToggle().css({'display':'none'});
                ChangePos();
                drop();
                $('.nom').val("");$('.Age').val("");$('.AV').val("");$('.Long').val("");

            }
            else{
                alert('L\'information est incomplète');
            }
        });
        
    });    
}

 function drop(){
    $(document).ready(function(){

        $('#listJ div').mousedown(function(){
            var rem = $(this);
            $('#DEL').mouseenter(function(){
                $(this).css({'backgroundColor':'red'})
                rem.remove();
            })
        });
        $('#DEL').mouseleave(function(){
            $(this).css({'backgroundColor':'yellow'})
        })
    });    
}

function ChangePos(){
    $(document).ready(function(){
        $('#listJ div').draggable({revert:'invalid'});
        $('#stad div').draggable({revert:'invalid'});
  
        $('#listJ').droppable({
            drop:function(event,ui){
                accept: '#stad div'
            }
        })
        $('#stad').droppable({
            drop:function(event,ui){
                accept: '#listJ div'
            }
        })
    });  
}

/*

 function Modifier(){
    $(document).ready(function(){
        $('#SEET').click(function(){

            $('#listJ div').each(function(){
                if($(this).children('.name').css('color')=='yellow'){
                    $('.AJT_MDF').slideToggle().css({'display':'block'});
                    $('.nom').val($(this).children('p').eq(1))
                    $('.AV').val($(this).children('p').eq(2))
                    
                }else{

                }
                
            })
        });
    });  
}
*/



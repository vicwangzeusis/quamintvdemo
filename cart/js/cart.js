$(document).ready(function(){

  $("#store").click(function(){
    $("#storeFloat").slideToggle("fast");
  });

  $("#storeFloat_close").click(function(){
    $("#storeFloat").slideUp("fast");
  });

  var bool = new Parabola({
    el: "#cycleFloat",//所选物
    targetEl: $("#cartFloat"),//目的地
    curvature: 0.002,//曲率
    duration: 600,//持续时间
    // callback: function(){
    //   $("#cycleFloat").css({"display":"none"});
    // }
  });

  $(".addToCartButton").click(function(){
    var cartNumber = parseInt($("#cartNumber").html());
    if (cartNumber == 0) {
      $("#cartFloat_first_img").attr("src","./images/cart_show.gif");
      $("#cartNumber").css({"display":"block"});
      $("#cartFloatNumber").addClass("showNumber");
      $("#cartNumber").text(cartNumber+1);
      $("#cycleFloat").css({"display":"block","opacity":0.7,"width":60,"height":60,"top":300,"left":500});
      $("#cycleFloat").animate({opacity:'0.6',width:'6px',height:'6px'},800);
      // bool.start();
    }else {
      $("#cartFloat_first").css({"display":"none"});
      $(".cartFloatButton").css({"display":"block"});
      $("#cycleFloat").stop();
      $("#cartFloatNumber").removeClass("showNumber");
      $("#cycleFloat").css({"display":"block","opacity":0.7,"width":60,"height":60,"top":300,"left":500});
      $("#cycleFloat").animate({opacity:'0.6',width:'6px',height:'6px'},800,function(){
        $("#cycleFloat").css({"display":"none"});
      });
      $("#cartFloatNumber").addClass("showNumber");
      if (cartNumber >= 99) {
        $("#cartNumber").text("99+");
      }else {
        $("#cartNumber").text(cartNumber+1);
      }
      $(".cartFloatButton").attr("src","./images/cart.gif");
      // bool.start();
    }
  });

  $("#cartFloat").click(function(){
    $("#mainCart").animate({right:'0'},300,function(){
      $("#mainCart").addClass("shadow");
    });
  });

  $("#mainCart_close").click(function(){
    $("#mainCart").animate({right:'-342'},300,function(){
      $("#mainCart").removeClass("shadow");
    });
  });

  $(".detailText").click(function(){
    $(".mainCart_pic").attr("src","./images/spxq.jpg");
    $("#mainCart").animate({right:'0'},300,function(){
      $("#mainCart").addClass("shadow");
      $("#mainCart_title").text("商品详情");
    });
  });

  $(".mainCart_pic").click(function(){
    $(".mainCart_pic").attr("src","./images/gwc.jpg");
  })

});















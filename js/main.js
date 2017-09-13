//1.dropdown menu
//hide sub menus(.sub-menu)
//when the user clicks a main menu list(.main-menu-list)
//sub menu slide down(.sub-menu)
$(document).ready(function() {

  $('.sub-menu').hide().removeClass('fallback');

  $('.main-menu-list').on('hover', function() {
    console.log("hello");
    $('.sub-menu', this).slideToggle(200);
  });

  $('.main-menu-list').on('click', function() {
    console.log("hello");
    $('.sub-menu', this).slideToggle(200);
  });


  $('.sub-item a').on('click', function() {
    $('.main-menu-list a', this).addClass('active');
  });

  $(window).on('scroll', function() {
    // Step 1: Google $(window).scrollTop();
    var distanceScrolled = $(window).scrollTop();

    console.log(distanceScrolled);

//sidebar
// Write your pseudo code here! HAPPY CODING! :)

// When the user clicks on .hamburger
$('.hamburger').on('click', function(){
  console.log("clicked");
  // Add the active class to the .sidebar (uses translateX to slide in)
$('.sidebar').addClass('active');


});

  // When the user clicks on .close
  $('.close-sidebar').on('click', function(){
      // Remove the active class to the .sidebar (uses translateX to slide in)
  $('.sidebar').removeClass('active');
        // Add the active class to the .sidebar (uses translateX to slide in)


    });


    // 2. ScrollTop
    //If Window scrolls up more than 140px, the transparent backgound will change to white.
    // if the user scolldown 140px the trasparent background colors changes to "white"
    //If the scroll is less than 140px, the white background-color changes to transparent
    if (distanceScrolled >= 140) {
      $('.home-nav-wrapper').addClass('change-bgcolor');
    }
    if (distanceScrolled < 140) {
      $('.home-nav-wrapper').removeClass('change-bgcolor');
    }



  });


  // Get the modal
  $('.modal').hide()
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("direction-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  if (btn != null) {
    btn.onclick = function() {
      modal.style.display = "flex";
      myMap();
    }

  }


  // When the user clicks on <span> (x), close the modal
  if (span != null) {
    span.onclick = function() {
      modal.style.display = "none";
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: new google.maps.LatLng(37.407, -122.08),
      zoom: 17
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {
        lat: 37.408,
        lng: -122.08
      }
    });
    marker.addListener('click', function() {
      var infowindow = new google.maps.InfoWindow();
      infowindow.setContent('<div style="color: gray"><strong >새누리교회(New Community Baptist Church)</strong><br>' +
        '<br>94043 California, Mountain View<br>W Middlefield Rd</div>' +
        '<br><a href="https://www.google.com/maps/place/%EC%83%88%EB%88%84%EB%A6%AC%EA%B5%90%ED%9A%8C(New+Community+Baptist+Church)/@37.4079381,-122.0821998,17z/data=!3m1!4b1!4m5!3m4!1s0x808fb7526e5f09bd:0x696f2dacd68a4163!8m2!3d37.4079381!4d-122.0800111?hl=en-US">View on GoogleMaps </a>');
      infowindow.open(map, marker)
    });
    // marker.addListener('click', function() {
    //   var infowindow = new google.maps.InfoWindow();
    //   infowindow.setContent('<div><strong>새누리교회(New Community Baptist Church)</strong><br>' +
    //     '<br>94043 California, Mountain View<br>W Middlefield Rd</div>');
    //   infowindow.open(map, this);
    // });
    marker.setMap(map);
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }

  }




  // Create a variable currentImageNumber and set it to 0
  var currentImageNumber = 0;

  $("#next").on('click', function() {
    if (currentImageNumber < 3) {
      currentImageNumber += 1;
      console.log(currentImageNumber);

    } else {
      currentImageNumber = 0;
      //hide all images
      //fade in the current image
      console.log(currentImageNumber);
    }

    $('img').hide();
    $('img').eq(currentImageNumber).fadeIn();

  });
  // When the user clicks the next button (#next)
  // If currentImageNumber < 3
  // Add one to the currentImageNumber
  // log currentImageNumber to the console

  // else
  // Set currentImageNumber to 0
  // log currentImageNumber to the console




  $("#previous").on('click', function() {
    if (currentImageNumber > 0) {
      currentImageNumber -= 1;
      console.log(currentImageNumber);
    } else {
      currentImageNumber = 3;
      console.log(currentImageNumber);
    }
    //hide all images
    //fade in the current image
    $('img').hide();
    $('img').eq(currentImageNumber).fadeIn();
  });

});

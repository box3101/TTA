$(function () {

  // 슬라이드
  function slideItem() {
    
  }

  // 탭
  function comTab() {

    // com var
    var tabList = $(".tab__list");
    var tabItem = $(".tab__item");
    var tabCnt = $(".tab-content");

    // init
    tabCnt.hide();
    tabCnt.eq(0).show();

    // click event
    tabList.on("click", function (e) {
      e.preventDefault();

      var $this = $(this);
      // 메뉴버튼
      menuBtn($this);

      // 콘텐츠변경
      changeCnt($this);
    });

    function menuBtn($this) {
      tabList.find(tabItem).removeClass("is-active");
      $this.find(tabItem).addClass("is-active");
    }

    function changeCnt($this) {
      var currentValue = $this.find(tabItem).attr("href");

      tabCnt.hide();
      $(currentValue).show();
    }

  }

  // left 메뉴
  function comLeftMenu() {
    (function () {

      const leftMenu = $(".left-menu");
      const leftMenuList = $(".left-menu__list");
      const leftMenuItem = $(".left-menu__item");
      const leftMenuLink = $(".left-menu__link");
      const leftMenuSubList = $(".left-menu__sub-list");
      const leftMenuSubItem = $(".left-menu__sub-item");
      const leftMenuSubLink = $(".left-menu__sub-link");


      // 활성화 되었을때 클릭
      // function Check($this) {
      //     $this.removeClass("is-active");
      // }

      // 활성화 안되었을때 클릭
      function CheckOff($this) {
        leftMenuItem.removeClass("is-active");
        $this.addClass("is-active");
      }

      leftMenuItem.on("click", function () {

        var $this = $(this);
        var checkOn = $this.hasClass("is-active");


        if (checkOn) {
          Check($this);
        } else {
          CheckOff($this);
        }

      });



    })();
  }

  function mMenu() {

      var menu = new MmenuLight(document.getElementById("menu"));

      menu.enable("all");
      menu.offcanvas();

      document.querySelector('a[href="#menu"]')
        .addEventListener('click', function (evnt) {
          menu.open();

          evnt.preventDefault();
          evnt.stopPropagation();
        });


      $(".mh-head.Sticky").mhead({
        scroll: {
          hide: 200
        }
      });

      $('body').on('click',
        'a[href^="#/"]',
        function () {
          alert("Thank you for clicking, but that's a demo link.");
          return false;
        }
      );
  }

  // 초기화
  function init() {
    slideItem(); //슬라이드 모음
    comTab(); // 탭
    comLeftMenu(); // 왼쪽메뉴
    // mMenu() // 모바일메뉴
  }

  init();
})

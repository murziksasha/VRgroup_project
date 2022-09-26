
function slider() {
  const slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    controls: false,
    slideBy: 1,
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    loop: true,
    speed: 500,
    controlsText: [
      '<img src="../img/icons/left_array.png">',
      '<img src="../img/icons/right_array.png">',
    ],
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30,
        items: 3

      },
      900: {
        items: 3
      }
    }

  });
}

export default slider;
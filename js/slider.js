$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    prevArrow: `<button class="slick-arrow slick-prev">
    <svg class='slick-arrow__icon' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_20)">
<path d="M34.997 5.906C36.335 4.554 36.335 2.365 34.997 1.013C33.661 -0.337 31.491 -0.339 30.153 1.013L11.003 20.552C9.665 21.904 9.665 24.095 11.003 25.447L30.153 44.986C31.491 46.338 33.659 46.338 34.997 44.986C36.335 43.634 36.335 41.445 34.999 40.093L19.294 23L34.997 5.906Z" />
</g>
<defs>
<clipPath id="clip0_1_20">
<rect width="46" height="46" fill="white" transform="matrix(-1 0 0 -1 46 46)"/>
</clipPath>
</defs>
</svg>
</button>
`,
nextArrow: `<button class="slick-arrow slick-next">
    <svg class='slick-arrow__icon' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_2)">
<path d="M11.003 40.094C9.665 41.446 9.665 43.635 11.003 44.987C12.339 46.337 14.509 46.339 15.847 44.987L34.997 25.448C36.335 24.096 36.335 21.905 34.997 20.553L15.847 1.014C14.509 -0.338 12.341 -0.338 11.003 1.014C9.665 2.366 9.665 4.555 11.001 5.907L26.706 23L11.003 40.094Z" />
</g>
<defs>
<clipPath id="clip0_1_2">
<rect width="46" height="46" fill="white"/>
</clipPath>
</defs>
</svg>

</button>
`,
});
const Slider = document.querySelector("slider");
const SliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

SliderItems.forEach(function(slide, index){
    console.log(slide);

    //hide all slides, show only 1
    if(index !== 0 ){
        slide.classList.add('hidden');

    }

    //add index
    slide.dataset.index = index;

    //adding data atribute for active (first) slide
    SliderItems[0].setAttribute('data-active', '');


    //click
    slide.addEventListener('click', function(){
        console.log('next');

        //hide now class
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');
        //console.log(+slide.dataset.index + 1);

        //count index of next slide

        // let nextSlideIndex;
        // if (index + 1 == SliderItems.length){
        //     nextSlideIndex = 0;
        // }
        // else{
        //     nextSlideIndex = index + 1;
        // }

        //count index of next slide 
        let nextSlideIndex =  index + 1 === SliderItems.length ? 0 : index + 1;

        console.log(nextSlideIndex);

        //find next slide
        const NextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        //show next slide
        NextSlide.classList.remove('hidden');
        NextSlide.setAttribute('data-active', '');
    })
})

//button next
btnNext.onclick = function(){
    console.log('next slide');

    //hide current slide
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    //show next slide
    let nextSlideIndex =  currentSlideIndex + 1 === SliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');

    nextSlide.setAttribute('data-active', '');

}

//btn prev
btnPrev.onclick = function(){
    console.log('prev slide');

    //hide current slide
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    //show prev slide
    let prevSlideIndex =  currentSlideIndex === 0 ? SliderItems.length - 1 : currentSlideIndex - 1;
    const prevSlide = slider.querySelector(`[data-index="${prevSlideIndex}"]`);
    prevSlide.classList.remove('hidden');

    prevSlide.setAttribute('data-active', '');

}

//doesn't work(
function showNextSlide(derection){
    //hide current slide
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;

    //count next index
    if(derection === 'next'){
        let nextSlideIndex =  currentSlideIndex + 1 === SliderItems.length ? 0 : currentSlideIndex + 1;
    } else {
        let prevSlideIndex =  currentSlideIndex === 0 ? SliderItems.length - 1 : currentSlideIndex - 1;
    }

    //show next slide
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');

    nextSlide.setAttribute('data-active', '');
}
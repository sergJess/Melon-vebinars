import Swiper, { Navigation } from 'swiper';
const burger = document.querySelector('.burger');
const mobileLinks = document.querySelector('.menu-nav');
burger.addEventListener('click', (e)=>{
    burger.classList.toggle('open');
    mobileLinks.classList.toggle('nav-links-animation');
});
Swiper.use([Navigation]);
const swiper = new Swiper('.cust-slider', {
    loop : true,
    wrapperClass: 'cust-track',
    navigation: {
        nextEl: '.swe',
        prevEl: '.btnsw',
      },
});


// menu- top
const subMenuParent = document.querySelector('.nav-submenu-parent');
const subMenu = document.querySelector('.nav-submenu');
const subMenuLinks = document.querySelectorAll('.submenu__link')
let SubMenuTop = subMenuParent.offsetHeight;

subMenu.style.top = `${SubMenuTop}px`;

document.body.addEventListener('mouseover',(e)=>{
    if(e.target.classList.contains('nav-submenu-parent') || e.target.classList.contains('nav-submenu') || e.target.classList.contains('submenu__link_drop')||e.target.classList.contains('submenu__link')){
        subMenu.classList.add('nav-menu-show');
    
        if(e.target.classList.contains('submenu__link')){
            e.target.classList.add('submenu__link_active');
        }
        else{
            
            subMenuLinks.forEach(item=>{
                item.classList.remove('submenu__link_active');
            })
        }
    }
    else{
        subMenu.classList.remove('nav-menu-show');
        
  
    }
    
});

//vebinars
const vebinarSection = document.querySelector('.vebinars');
if((window.matchMedia("(min-width: 901px)").matches)){
    vebinarSection.style.margin = `${(mobileLinks.offsetHeight * 4)/ 2.65}px 0 0 0`;
}

//date vebinars
const vebinarDates = document.querySelectorAll('.vebinar-date');

function createVebinars(vebinars){
    const dates = [];
    vebinars.forEach(item=>{
        let split = item.firstChild.nextSibling.textContent.split('.');
        let startTime = item.lastChild.previousSibling.textContent.split('-');
        const date = new Date(`${split[1]}.${split[0]}.${split[2]} ${startTime[0]}`);
        
        dates.push(date);
    }); 
return dates;
}

function isActiualDate(date){
const dateNow = new Date();
return date - dateNow > 0? true: false;
}

function renderVebinarSignUp(dataList){
    const resultButtons = [];

    dataList.forEach(item=>{
        const button = document.createElement('button');
        const span = document.createElement('span');
        button.classList.add('vebinar-btn');
        span.classList.add('vebinar-btn-bg');
   
        if(isActiualDate(item) === true){
      button.classList.add('vebinar-btn_actual');
      button.textContent = 'записаться';
       span.classList.add('vebinar-btn-bg_actual'); 
        }
        else{
         button.classList.add('vebinar-btn_expired');
         button.textContent = 'Завершен';
         span.classList.add('vebinar-btn-bg_expired');
        }
        button.appendChild(span);
        resultButtons.push(button);
    });
    return resultButtons;
}

function appendVebinarButtons(parent, buttons){
    let index = 0;
    parent.forEach((item)=>{
        item.appendChild(buttons[index]);
        index++;
    })

}
appendVebinarButtons( document.querySelectorAll('.vebinar-buttons'),renderVebinarSignUp(createVebinars(vebinarDates)));
// eventListeners

document.body.addEventListener('click',(e)=>{
    const form = document.querySelector('.form-inner');
    const overlay = document.querySelector('.overlay');
    if(e.target.classList.contains('vebinar-btn_actual') || e.target.classList.contains('vebinar-btn-bg_actual')){
        form.classList.toggle('form-open');
        overlay.classList.toggle('overlay-open');
    }
    if(e.target.classList.contains('form-cross')||e.target.classList.contains('form__cross') ){
        form.classList.toggle('form-open');
        overlay.classList.toggle('overlay-open');
    }
});

//popup
function createPopUp (){
    const popupServices = document.createElement('div');
    popupServices.classList.add('popup-services');
    const popupServicesContainer = document.createElement('div');
    popupServicesContainer.classList.add('popup-services__container');
const closePopup = document.createElement('div');
closePopup.classList.add('popup-services__close');
const imgPopupClose = document.createElement('img');
imgPopupClose.src = "https://melon.su/wp-content/themes/melon/images/modal_close.svg";
imgPopupClose.setAttribute('alt', 'close');
const popupContent = document.createElement('div');
popupContent.classList.add('popup-services__content');
const popupTopImageInner = document.createElement('div');
popupTopImageInner.classList.add('popup-services__img-top');
const popupTopImage = document.createElement('img');
popupTopImage.classList.add('ls-is-cached', 'lazyLoaded');
popupTopImage.src = 'https://melon.su/wp-content/themes/melon/images/pop_img1.svg';
popupTopImage.setAttribute('alt', 'img top');
const popupLoad = document.createElement('div');
popupLoad.classList.add('popup-services__load');
const popupServicesWordFirst = document.createElement('div');
popupServicesWordFirst.classList.add('popup-services__word', 'popup-services__word1');
const popupServicesWordSecond = document.createElement('div');
popupServicesWordSecond.classList.add('popup-services__word', 'popup-services__word2');
const popupTitle = document.createElement('h2');
popupTitle.classList.add('popup-services__title');
const popupText = document.createElement('p');
popupText.classList.add('popup-services__description');
const popupSubtitle = document.createElement('p');
popupSubtitle.classList.add('"popup-services__example-title');
const popupButtomImageInner = document.createElement('div');
popupButtomImageInner.classList.add('popup-services__img-bottom');
const popupButtomImage = document.createElement('img');
popupButtomImage.src = 'https://melon.su/wp-content/themes/melon/images/pop_img2.svg'
popupButtomImage.classList.add('lazyLoaded');
const sliderInner = document.createElement('div');
sliderInner.classList.add('slider-inner');
popupButtomImageInner.append(popupButtomImage);
popupLoad.append(popupServicesWordFirst, popupServicesWordSecond, popupTitle, popupText, popupSubtitle, sliderInner);

popupTopImageInner.append(popupTopImage);
popupContent.append(popupTopImageInner, popupLoad, popupButtomImageInner);

closePopup.append(imgPopupClose);
popupServicesContainer.append(closePopup, popupContent);
    popupServices.append(popupServicesContainer);

    return [popupServices, popupServicesContainer, popupServicesWordFirst, popupServicesWordSecond, popupTitle, popupText, popupSubtitle, popupLoad, imgPopupClose, sliderInner];
}
const [popupServices, popupServicesContainer, popupServicesWordFirst, popupServicesWordSecond, popupTitle, popupText, popupSubtitle, popupLoad, imgPopupClose, sliderInner] = createPopUp();
document.body.append(popupServices);
function createSlider(title, arrayImages, arrayHref, sliderClassName, buttonNextClass, buttonPrevClass,sliderWrapperClass, swiperConfig){
    const wrapper = document.createElement('div');
    wrapper.classList.add('slider-container');
    const sliderTitle = document.createElement('p');
    sliderTitle.classList.add('popup-services__subtitle');
    sliderTitle.textContent = title;
    const slider = document.createElement('div');
    slider.classList.add('popup-services__images', `${sliderClassName}`, );
    const sliderWrapper = document.createElement('div');
    sliderWrapper.classList.add(`${sliderWrapperClass}`, );
    const buttonPrev = document.createElement('button');
    buttonPrev.style.display = 'block';
    buttonPrev.setAttribute('type', 'button');
    buttonPrev.classList.add('slider-button', `${buttonPrevClass}`, 'slider-button__right');
    const buttonPrevImg = document.createElement('img');
    buttonPrevImg.src = 'https://melon.su/wp-content/themes/melon/images/Icon_left_outline.svg';
    buttonPrevImg.setAttribute('alt', 'prev arrow');
    buttonPrev.append(buttonPrevImg);
   
for (let i = 0; i < arrayImages.length; i++){
    const div = document.createElement('div');
    div.classList.add('swiper-slide', 'slider-container');
    const link = document.createElement('a');
    link.classList.add('popup-services__i');
    link.setAttribute('href', `${arrayHref[i]}`);
    const img  = document.createElement('img');
    img.setAttribute('src', `${arrayImages[i]}`);
    img.setAttribute('alt', 'picture slide');
    link.append(img);
    div.append(link);
    sliderWrapper.append(div);
}

const buttonNext = document.createElement('button');
buttonNext.setAttribute('type', 'button');
buttonNext.classList.add('slider-button', `${buttonNextClass}`, 'slider-button__left');
buttonNext.style.display = 'block';
const buttonNextImg = document.createElement('img');
buttonNextImg.src = 'https://melon.su/wp-content/themes/melon/images/Icon_right_outline.svg';
buttonNextImg.setAttribute('alt', 'next arrow');
buttonNext.append(buttonNextImg);

slider.append(sliderWrapper);
wrapper.append(sliderTitle, slider, buttonPrev, buttonNext);
return wrapper;
}
const firstSliderImg = ['https://melon.su/wp-content/uploads/2021/01/11116-1.jpg',
'https://melon.su/wp-content/uploads/2021/02/111223366-3.jpg', 'https://melon.su/wp-content/uploads/2021/01/11114.jpg', 'https://melon.su/wp-content/uploads/2021/01/11117.jpg'];
const firstSliderHref = ['https://melon.su/wp-content/uploads/2021/01/perezagruzka-roskosmos.pdf', 'https://melon.su/wp-content/uploads/2021/02/jpg2pdf-24.pdf', 'https://melon.su/wp-content/uploads/2021/01/pops.pdf', 'https://melon.su/wp-content/uploads/2021/02/polezhim_compressed-1.pdf'];

const sliderFirst = createSlider('Примеры работ', firstSliderImg, firstSliderHref, 'slider-creative-solutions','first-slider-next', 'first-slider-prev','slider-creative-solutions-wrapper' ,{
    modules: [ Navigation],
    slidesPerView: 1,
    wrapperClass:'slider-creative-solutions-wrapper',
    loop: true,
    spaceBetween: 20,
    preloadImages: true,
    navigation: {
      nextEl: '.first-slider-next',
      prevEl: '.first-slider-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20
          }
    }
});





subMenu.addEventListener('click', (e)=>{
if(e.target.classList.contains('submenu__link-popup') && e.target.getAttribute('data-popup-link') == '1'){
    popupServices.style.display = 'flex';
    popupServicesWordFirst.textContent = 'Креативные';
    popupServicesWordSecond.textContent = 'Решения';
    popupTitle.textContent = 'Креативные Решения';
    popupText.textContent = 'Задача организации, в особенности же начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки форм развития.';
    removeNodeChildren(sliderInner);
    sliderInner.append(sliderFirst);
   const swiperX = new Swiper('.slider-creative-solutions', {
    modules: [ Navigation],
    slidesPerView: 1,
    wrapperClass:'slider-creative-solutions-wrapper',
    loop: true,
    spaceBetween: 10,
    preloadImages: true,
    navigation: {
      nextEl: '.first-slider-next',
      prevEl: '.first-slider-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20
          }
    }
})
}
}); 

imgPopupClose.addEventListener('click', ()=>{
    popupServices.style.display = 'none';
});

function removeNodeChildren(node){
    const children = node.children;
    if(children.length > 0){
        for(let i = 0; i < children.length; i++){
            children[i].remove();
    }
    }
}


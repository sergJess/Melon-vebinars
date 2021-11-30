import Swiper, { Navigation } from 'swiper';
import createPopUp from './popup';
import createSlider from './slider-menu';
const burger = document.querySelector('.burger');
const mobileLinks = document.querySelector('.menu-nav');
burger.addEventListener('click', (e)=>{
    burger.classList.toggle('open');
    mobileLinks.classList.toggle('nav-links-animation');
});
Swiper.use([Navigation]);
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
const [popupServices, popupServicesContainer, popupServicesWordFirst, popupServicesWordSecond, popupTitle, popupText, popupSubtitle, popupLoad, imgPopupClose, sliderInner] = createPopUp();
document.body.append(popupServices);

const firstSliderImg = ['https://melon.su/wp-content/uploads/2021/01/11116-1.jpg',
'https://melon.su/wp-content/uploads/2021/02/111223366-3.jpg', 'https://melon.su/wp-content/uploads/2021/01/11114.jpg', 'https://melon.su/wp-content/uploads/2021/01/11117.jpg'];
const firstSliderHref = ['https://melon.su/wp-content/uploads/2021/01/perezagruzka-roskosmos.pdf', 'https://melon.su/wp-content/uploads/2021/02/jpg2pdf-24.pdf', 'https://melon.su/wp-content/uploads/2021/01/pops.pdf', 'https://melon.su/wp-content/uploads/2021/02/polezhim_compressed-1.pdf'];

const sliderFirst = createSlider('Примеры работ', firstSliderImg, firstSliderHref, 'slider-creative-solutions','first-slider-next', 'first-slider-prev','slider-creative-solutions-wrapper');

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


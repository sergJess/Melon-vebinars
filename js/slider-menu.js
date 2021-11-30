function createSlider(title, arrayImages, arrayHref, sliderClassName, buttonNextClass, buttonPrevClass,sliderWrapperClass){
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
	img.classList.add('slider__menu-img');
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
export default createSlider;
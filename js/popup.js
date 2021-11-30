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
export default createPopUp;
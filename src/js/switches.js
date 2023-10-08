const delayElem = document.querySelector('#speed_input');
const arrSize = document.querySelector('#arr_sz');
 export const bubbleBtn = document.querySelector(".bubbleSort");
export const insertBtn = document.querySelector(".insertionSort");
export const mergeBtn = document.querySelector(".mergeSort");
export const quickBtn = document.querySelector(".quickSort");
export const selectBtn = document.querySelector(".selectionSort");
const newArrBtn = document.querySelector(".newArray");
const stopSortBtn = document.querySelector(".stopSort");
const inputSize = document.querySelector("#arr_sz");
export let delay = 250;

export function swap(el1, el2) {
	const temp = el1.style.height;
	el1.style.height = el2.style.height;
	el2.style.height = temp;
	const numF = el1.querySelector('.num');
	const numS = el2.querySelector('.num');
	const tempNum = numF.innerText;
	numF.innerText = numS.innerText
	numS.innerText = tempNum
}

export function disableSortingBtn(){
	bubbleBtn.disabled = true;
	insertBtn.disabled = true;
	mergeBtn.disabled = true;
	quickBtn.disabled = true;
	selectBtn.disabled = true;
}

export function enableSortingBtn(){
	bubbleBtn.disabled = false;
	insertBtn.disabled = false;
	mergeBtn.disabled = false;
	quickBtn.disabled = false;
	selectBtn.disabled = false;
}

export function disableSizeSlider(){
	inputSize.disabled = true;
}

export function enableSizeSlider(){
	inputSize.disabled = false;
}

export function disableNewArrayBtn(){
	newArrBtn.disabled = true;
}

export function enableNewArrayBtn(){
	newArrBtn.disabled = false;
}

export function delayHandler(time) {
	return new Promise(resolve => {
		setTimeout(() => { resolve('') }, time);
	})
}

arrSize.addEventListener('input', function(){
	setArr(parseInt(arrSize.value));
});

delayElem.addEventListener('input', function(){
	delay = 300 - parseInt(delayElem.value);
	setProgressSpeed()
});

export function setArr(barsNum = 20) {
	clearArr();
	setProgressSize();
	let array = [];
	for (let i = 0; i < barsNum; i++) {
		array.push(Math.floor(Math.random() * 250) + 1);
	}
	const bars = document.querySelector("#bars");
	for (let i = 0; i < barsNum; i++) {
		const bar = document.createElement("div");
		const num = `<p class="num">${array[i] * 2}</p>`;
		bar.style.height = `${array[i]*2}px`;
		bar.classList.add('bar');
		bar.classList.add('flex-item');
		bar.classList.add(`barNo${i}`);
		bar.innerHTML = num;
		bars.appendChild(bar);
	}
}

export function clearArr() {
	const bars = document.querySelector("#bars");
	bars.innerHTML = '';
}

newArrBtn.addEventListener("click", function(){
	setArr(arrSize.value);
});

function setProgressSize() {
	const size = document.querySelector('.player__range-size');
	size.style.background = `linear-gradient(to right, #0bdbac 0%, #0bdbac ${size.value * 2.3}%, #ffffff ${size.value * 2.3}%)`;
}

function setProgressSpeed() {
	const speed = document.querySelector('.player__range-speed');
	speed.style.background = `linear-gradient(to right, #0bdbac 0%, #0bdbac ${speed.value / 3}%, #ffffff ${speed.value / 3}%)`;
}


function stopSorting() {
	let id = window.setTimeout(function() {}, 0);
	while (id--) {
		window.clearTimeout(id);
	}
	enableAll();
	setArr(parseInt(arrSize.value));
}

stopSortBtn.addEventListener('click', () =>{
	stopSorting();
})

setArr();
setProgressSpeed();

export function disabledAll(){
	disableSortingBtn();
	disableSizeSlider();
	disableNewArrayBtn();
}

export function enableAll(){
	enableSortingBtn();
	enableSizeSlider();
	enableNewArrayBtn();
}
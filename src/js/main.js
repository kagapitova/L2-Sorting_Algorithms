import {
	swap,
	delayHandler,
	disabledAll,
	enableAll,
	delay,
	bubbleBtn,
	insertBtn,
	mergeBtn,
	quickBtn,
	selectBtn
} from './switches.js';

const bar = document.querySelectorAll(".bar");

async function bubbleSort() {
	const bar = document.querySelectorAll(".bar");
	disabledAll();
	for(let i = 0; i < bar.length-1; i++){
		for(let j = 0; j < bar.length-i-1; j++){
			bar[j].style.background = 'blue';
			bar[j+1].style.background = 'blue';
			if(parseInt(bar[j].style.height) > parseInt(bar[j+1].style.height)){
				await delayHandler(delay);
				swap(bar[j], bar[j+1]);
			}
			bar[j].style.background = 'white';
			bar[j+1].style.background = 'white';
		}
		bar[bar.length-1-i].style.background = 'grey';
	}
	bar[0].style.background = 'grey';
}

async function insertionSort(){
	const bar = document.querySelectorAll(".bar");
	disabledAll();
	bar[0].style.background = 'green';
	for(let i = 1; i < bar.length; i++){
		let j = i - 1;
		let key = bar[i].style.height;
		bar[i].style.background = 'blue';
		
		await delayHandler(delay);
		while(j >= 0 && (parseInt(bar[j].style.height) > parseInt(key))){
			bar[j].style.background = 'blue';
			bar[j + 1].style.height = bar[j].style.height;
			j--;
			
			await delayHandler(delay);
			for(let k = i; k >= 0; k--){
				bar[k].style.background = 'grey';
				bar[k].querySelector('p').innerText = bar[k].style.height.replace('px', '');
			}
		}
		bar[j + 1].style.height = key;
		bar[i].style.background = 'grey';
	}
}
async function mergeSort(ele, low, mid, high){
	disabledAll();
	const n1 = mid - low + 1;
	const n2 = high - mid;
	let left = new Array(n1);
	let right = new Array(n2);
	
	for(let i = 0; i < n1; i++){
		await delayHandler(delay);
		ele[low + i].style.background = 'orange';
		left[i] = ele[low + i].style.height;
	}
	for(let i = 0; i < n2; i++){
		await delayHandler(delay);
		ele[mid + 1 + i].style.background = 'yellow';
		right[i] = ele[mid + 1 + i].style.height;
	}
	await delayHandler(delay);
	let i = 0, j = 0, k = low;
	while(i < n1 && j < n2){
		await delayHandler(delay);
		if(parseInt(left[i]) <= parseInt(right[j])){
			if((n1 + n2) === ele.length){
				ele[k].style.background = 'grey';
			} else {
				ele[k].style.background = 'lightgreen';
			}
			ele[k].style.height = left[i];
			ele[k].querySelector('p').innerText = ele[k].style.height.replace('px', '');
			i++;
			k++;
		} else {
			if((n1 + n2) === ele.length){
				ele[k].style.background = 'grey';
			} else {
				ele[k].style.background = 'lightgreen';
			}
			ele[k].style.height = right[j];
			ele[k].querySelector('p').innerText = ele[k].style.height.replace('px', '');
			j++;
			k++;
		}
	}
	while(i < n1){
		await delayHandler(delay);
		if((n1 + n2) === ele.length){
			ele[k].style.background = 'grey';
		} else {
			ele[k].style.background = 'lightgreen';
		}
		ele[k].style.height = left[i];
		ele[k].querySelector('p').innerText = ele[k].style.height.replace('px', '');
		i++;
		k++;
	}
	while(j < n2){
		await delayHandler(delay);
		if((n1 + n2) === ele.length){
			ele[k].style.background = 'grey';
		} else {
			ele[k].style.background = 'lightgreen';
		}
		ele[k].style.height = right[j];
		ele[k].querySelector('p').innerText = ele[k].style.height.replace('px', '');
		j++;
		k++;
	}
}

async function handleMergeSort(bar, l, r){
	
	disabledAll();
	if(l >= r){
		return;
	}
	const m = l + Math.floor((r - l) / 2);
	await handleMergeSort(bar, l, m);
	await handleMergeSort(bar, m + 1, r);
	await mergeSort(bar, l, m, r);
}


async function quickSort(bar, l, r){
	disabledAll();
	let i = l - 1;
	bar[r].style.background = 'red';
	for(let j = l; j <= r - 1; j++){
		bar[j].style.background = 'yellow';
		await delayHandler(delay);
		if(parseInt(bar[j].style.height) < parseInt(bar[r].style.height)){
			i++;
			swap(bar[i], bar[j]);
			bar[i].style.background = 'orange';
			if(i !== j) bar[j].style.background = 'orange';
			await delayHandler(delay);
		} else {
			bar[j].style.background = 'pink';
		}
	}
	i++;
	await delayHandler(delay);
	swap(bar[i], bar[r]);
	bar[r].style.background = 'pink';
	bar[i].style.background = 'grey';
	
	await delayHandler(delay);
	
	for(let k = 0; k < bar.length; k++){
		if(bar[k].style.background !== 'grey')
			bar[k].style.background = 'cyan';
	}
	return i;
}

async function handleQuickSort(bar, l, r){
	disabledAll();
	if(l < r){
		let index = await quickSort(bar, l, r);
		await handleQuickSort(bar, l, index - 1);
		await handleQuickSort(bar, index + 1, r);
	} else {
		if(l >= 0 && r >= 0 && l <bar.length && r <bar.length){
			bar[r].style.background = 'grey';
			bar[l].style.background = 'grey';
		}
	}
}

async function selectionSort(){
	const bar = document.querySelectorAll(".bar");
	disabledAll();
	for(let i = 0; i < bar.length; i++){
		let min_index = i;
		bar[i].style.background = 'blue';
		for(let j = i+1; j < bar.length; j++){
			bar[j].style.background = 'red';
			
			await delayHandler(delay);
			if(parseInt(bar[j].style.height) < parseInt(bar[min_index].style.height)){
				if(min_index !== i){
					bar[min_index].style.background = 'cyan';
				}
				min_index = j;
			}
			else{
				bar[j].style.background = 'cyan';
			}
		}
		await delayHandler(delay);
		swap(bar[min_index], bar[i]);
		bar[min_index].style.background = 'cyan';
		bar[i].style.background = 'grey';
	}
}

bubbleBtn.addEventListener('click', async function(){
	await bubbleSort();
	enableAll();
});

insertBtn.addEventListener('click', async function(){
	await insertionSort();
	enableAll();
});

mergeBtn.addEventListener('click', async function(){
	const bar = document.querySelectorAll(".bar");
	let l = 0;
	let r = parseInt(bar.length) - 1;
	await handleMergeSort(bar, l, r);
	enableAll();
});

quickBtn.addEventListener('click', async function(){
	const bar = document.querySelectorAll(".bar");
	let l = 0;
	let r = parseInt(bar.length) - 1;
	await handleQuickSort(bar, l, r);
	enableAll();
});


selectBtn.addEventListener('click', async function(){
	await selectionSort();
	enableAll();
});


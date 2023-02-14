async function insertion()
{
    console.log('In insertion()');
    const ele = document.getElementsByClassName("bar-col");
    //write your code here
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'blue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'rgb(185, 185, 23)';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'rgb(185, 185, 23)';
    }
}

const inSortbtn = document.querySelector("#insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
async function bubble() {
    console.log('In bubble()');
    const ele = document.getElementsByClassName("bar-col");
    //write your code here
    console.log(ele);
    for (let i = 0; i < ele.length; i++) {
        for (let j = 0; j < ele.length - i - 1; j++) {
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            await waitforme(delay);


            let style1 = window.getComputedStyle(ele[j]);
            let style2 = window.getComputedStyle(ele[j + 1]);

            let transform1 = style1.getPropertyValue("height");
            let transform2 = style2.getPropertyValue("height");

            if (parseInt(transform1) > parseInt(transform2)) {

                ele[j].style.height = transform2;
                ele[j + 1].style.height = transform1;
                ele[j].style.background = 'cyan';
                
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';


        }
        ele[ele.length-1-i].style.background = 'rgb(185, 185, 23)';
        
    }
    ele[0].style.background = 'rgb(185, 185, 23)';

}


// function swap(el1, el2) {

//     const style1 = window.getComputedStyle(el1);
//     const style2 = window.getComputedStyle(el2);


//     const transform1 = style1.getPropertyValue("height");
//     const transform2 = style2.getPropertyValue("height");

//     el1.style.height = transform2;
//     el2.style.height = transform1;

// }

const bubSortbtn = document.querySelector("#bubbleSort");
bubSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
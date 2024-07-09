const url = ' https://jsonplaceholder.typicode.com/photos';

const mainDiv = document.querySelector('.section');

const popUpImageContainer = document.querySelector('.popUpSection');

const loader = document.getElementsByClassName('loader')[0];



fetch(url)
.then(res => res.json())
.then(data => displayImage(data))

function displayImage(data){

    if(data){
        loader.remove();
        data = Array.from(data);
        data.length = 20;
        data.forEach((element) =>{
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('div');
        mainDiv.appendChild(imgDiv);

        const img = document.createElement('img');
        img.src=element.thumbnailUrl;
        imgDiv.appendChild(img);
        img.dataset.url=element.url;

    })
    disPlayPopUpImage();
    }
}


function disPlayPopUpImage(){
    let img1 = document.querySelectorAll('.section img');
    img1= Array.from(img1);
    img1.forEach((img2)=>{
        img2.onclick=()=>{
            let newDiv = document.createElement('div');
            newDiv.classList.add('popUpImage');
            newDiv.style.display='block';
            popUpImageContainer.appendChild(newDiv);


            let span = document.createElement('span');
            span.innerHTML= `&times;`;
            newDiv.appendChild(span);

            span.addEventListener('click',function(){
                newDiv.remove();
            })
        
            let newImg = document.createElement('img');
            newImg.src= img2.dataset.url;
            newDiv.appendChild(newImg);
        }
    })
}






// const imageField = document.getElementsByClassName('div',addEventListener('click',function(){
    
// }));





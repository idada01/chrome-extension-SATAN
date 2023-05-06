setInterval(()=>{
    
    let imgs = document.querySelectorAll('img');
    imgs.forEach((a, i)=>{
        a.src = 'https://pbs.twimg.com/media/FcKhj_cXgAIwO3D?format=jpg'
    })
    const body = document.querySelector('body');
    body.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2k5LhPDzq76I5Ule9jk0aty2MxQIzk1GkHg&usqp=CAU")';
    
}, 250)


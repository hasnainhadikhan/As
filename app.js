var roll = Math.ceil(Math.random()*6)
var show = document.getElementById('num').innerText= roll
 console.log(show);
var img = document.getElementById('img')
switch (roll) {
    case 1:
       img.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAUVBMVEX///8AAACHh4f4+PgFBQWtra0WFhYKCgpvb29RUVFhYWGioqLg4OD8/PzKysoSEhLm5uZ7e3vv7+8fHx8tLS3b29tERESCgoKdnZ1WVlZlZWUj0atUAAACyklEQVR4nO2d2XLqMBAFbWNsQ1jMZiD//6GX3AQkljxIo2EcVfe7XNNYG1WST1EAAAAAAAAAAABky6qa7dd1+Wbq9X5WrdJZ9JvduxV8dps+ica2e/ubeKTutnKPaWOt8UUzFWosO2uFK91S4jGZWdfvmE0E72NEHheT+Hcymn71TRfrMbWu/JHIEb8dxXzl08TNwncdq51PF6J5I4blYjpv/SqiOlfvr4OfCVakOPq5/3PGrPEb177+SF5fAB/eL7qJaO/tr0w9Liaukl1465XXr9LXFobXu8L3wpXrmGbj40rvRnwV3Ngt6nOF0gJxr+Qc3HZ/ayvdeCbALc374LbrW9uFQmWBLG7FrIPbujnv7evgMxO3EgS3dROFQmHBCKpBRAVEEFECEUSUQAQRJRBBRAlEEFECEUSUQAQRJRBBRAlEEFECEUSUQAQRJRBBRAlEEFECEUQeORyHpiyb4XgQPcZa5OCdSZ9JVIxFTneHdlvBGU9bkWP5QPiBxATVyEVOjx6Cc7eWIof2WaSNPVZoKfLy7kn4IVFxNVKRwyuPsoycugxFnkb6N5Hj3VBkeC0yxD3NUOSXWzRN3NMMRV57RJzblVaDyA/ZdK1sBns20+8vC2LkHsVQJJstSj6bRv+y2pU/uY3375v98Ef/WF3eSSZ/dYticXaPOUvualmLXIZ8NTR13QyV7MqZvUgiEEFECUQQUQIRRJRABBElEEFECUQQUQIRRJRABBElEEFECUQQUQIRRJRABBElEEFECUQQUQKRjD5cnM2npLP5uHc2n1v3PoCfJn1JgOgD+F4kgfkrEUUSjCgkwrs+FxESMZ7YjpMwtuMuSGVuNk7kQSrP0TaCIKk4JkmibfIJG8om/imfQK58ItKyCa3LJ0awyCbYsfiK2nxxx+i9tCmiNotswk//s6rONnG055RxtAAAAAAAAAAAAGPjH452IxA6sNAdAAAAAElFTkSuQmCC'
        break;
   case 2:
        img.src='https://static.thenounproject.com/png/1341916-200.png'
         break;
     case 3:
        img.src='https://static.thenounproject.com/png/1194696-200.png'
         break;
    case 4:
         img.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAV1BMVEX///8AAACHh4cKCgrd3d1EREQZGRmioqLg4ODb29tTU1MWFhalpaUFBQX4+PhBQUFWVlatra1vb29hYWHKysoSEhLm5uZ7e3vv7+8fHx+JiYktLS1lZWU/QA7MAAADP0lEQVR4nO2daZeiMBBFZXEfVMTd+f+/c3qZNhHxTCrFI0yddz/307qSAA2EmkwIIYQQQgghhBBCCDHLIV/dj1U2MNXxvsoP/VmcztehFXyu51MvGpf94FuiTbW/6D3qdWqNT9a11mOfWuGHvUpjs0pdv2O1UYiMyOPDJN5jNOPqm+jRVaeuvE3kjL+MYn/ls47bCz8NrKKpF5rZFsVmUTeFX0XU4Dr5x8HfPRyR4jg1/s8Zc4w/u3z1q/f6BMy9X/QckffOr5J6fJi4Sq7y9MEbV/3XJsMbXfJz4dwNzGTz44eTm/E3cdgd1BtAaULcJpEf3u+PrPrEU487NN/F2eMjuwBUJmTxKOYozrp93uDHwVc27kggzrodBaAwMYpqKAKBIhQBQRGKgKAIRUDgRcp8Oquy9TYv4ypc5tt19u88WqT0rqmuIlSWoXmwyPzpolMxl35HeB4rkmctctlXCPJQkXm7jiwTbRNJHilSFq+FFIJ5spTkkSKd90524V8gygNFyq46six4kyxFeaDIy0z9Jni+y/JAkWl3IdPQz9+K8kCRWXchs9DPf3MX6U0eKPLmKYLg607d8Xd5oIiskBGLyIaGNg8UkU1WbR4oYmb3qz0gyvJAETOnKN0njYJ7KaI8UqTrNFx0+1eSh4q8zlfhnUpBHivS/ldVfDs+PA8WmZQ792e7iHuNwXm0yN/LQdVsGns5KDCPFxkIilAEBEUoAoIiFAFBEYqAoAhFQFCEIiAoQhEQFKEICIpQBARFKAKCIhQBQRGKgKAIRUDgRQLXf2jzaJHg9R/aPFiE60fEeaiIlfUjovUf2jxSxMrDmbL1H9o8UMTMA8xmHik385B/dx3/4bILMyJmhpaZyW5m98v1I1F5pAjXj8TkoSJcPxKRB4tw/Yg4jxcZCIpQBARFKAKCIhQBQRFDImZeXGzmVdJmXu5t5nXr3gvw++m+pED1AnyvJUHyTaJqSeA3iRDfQO8XXZOIp7YdSU20bTueGqk0yeaJvpGKmdY2dpoNmWn/ZKchl50WaXaa1o1odOnaCE7sNHb8bLXZcY9sWIo+Wm1OzDQ//eJwS9WO9tZjO1pCCCGEEEIIIYQQQsbGH1i8MCvYztGyAAAAAElFTkSuQmCC'
         break;
    case 5:
         img.src='https://static.thenounproject.com/png/1194701-200.png'
        break;
     case 6:
        img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BcZMOpEzV-zFsfoph6ciiBard-zasQxE5BIZuiv7l9duJfe6UWt_hNI4gBArbOJ68yI&usqp=CAU'
        break;

     default:
         break;
 }
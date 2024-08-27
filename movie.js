let ip=document.querySelector('input')
let btn=document.querySelector('button')
let div=document.querySelector('div')
    btn.addEventListener('click',()=>{
        let searchText=ip.value 

fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).then((res)=>{
    return res.json()
        }).then((data)=>{
        console.log(data);
        data.map((a,b)=>{
        let d1=document.createElement('div')
        div.append(d1)
        d1.setAttribute('class','child')
       let p1=document.createElement('p')
       d1.append(p1)
       p1.innerText="Name :"+a.show.name
       let p2=document.createElement('p')
       d1.append(p2)
       p2.innerText="Id :"+a.show.id
       if(a.show.image!=null){
        let img=document.createElement('img')
        d1.append(img)
        img.setAttribute('src',a.show.image.medium)
       }
       let p3=document.createElement('p')
       d1.append(p3)
       p3.innerText="Language :"+a.show.language
       let ac=document.createElement('a')
       d1.append(ac)
       
       ac.innerText=a.show.officialSite
       ac.setAttribute('href',a.show.officialSite)
       let p4=document.createElement('p')
       d1.append(p4)
       p4.innerText="summary :"+a.show.summary
       let p5=document.createElement('p')
       d1.append(p5)
       p5.innerText="Type :"+a.show.type
       let p6=document.createElement('p')
       d1.append(p6)
       p6.innerText="Score :"+a.score
       let br=document.createElement('br')
       d1.append(br)
       })

    })
ip.value=''
  
})
  




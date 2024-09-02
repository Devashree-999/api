
let key='568345ec2a8a63d18efcee986a26626c'
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data);
    
// })
let ip=document.querySelector('input')
let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
        let city=ip.value
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
            let div=document.querySelector('div')
            let p1=document.createElement('p')
            div.append(p1)
            p1.innerText="Base :"+data.base
            let p2=document.createElement('p')
            div.append(p2)
            p2.innerText="Clouds:All :"+data.clouds.all
            let p3=document.createElement('p')
            div.append(p3)
            p3.innerText="Cod :"+data.cod
            let p4=document.createElement('p')
            div.append(p4)
            p4.innerText="Coordinate :"+"longitute="+data.coord.lon+", lattitute="+data.coord.lat
            let p5=document.createElement('p')
            div.append(p5)
            p5.innerText="dt :"+data.dt
            let p6=document.createElement('p')
            div.append(p6)
            p6.innerText="Id :"+data.id
            let p7=document.createElement('p')
            div.append(p7)
            p7.innerText="Main :"+" temp :"+data.main.temp+", Feels like :"+data.main.feels_like+", min temp :"+data.main.temp_min+", max temp :"+data.main.temp_max+", Pressure :"+data.main.pressure
            let p8=document.createElement('p')
            div.append(p8)
            p8.innerText="Name :"+data.name
            let p9=document.createElement('p')
            div.append(p9)
            p9.innerText="sys :"+" type :"+data.sys.type+", Id :"+data.sys.id+", Country :"+data.sys.country+", Sunrise :"+data.sys.sunrise+", Sunset :"+data.sys.sunset
            let p10=document.createElement('p')
            div.append(p10)
            p10.innerText="Timezone :"+data.timezone
            let p11=document.createElement('p')
            div.append(p11)
            p11.innerText="Visibility :"+data.visibility
            let p12=document.createElement('p')
            div.append(p12)
            p12.innerText="Weather :" +data.weather
            let p13=document.createElement('p')
            div.append(p13)
            p13.innerText="Wind :"+"speed -"+data.wind.speed+", deg -"+data.wind.deg
            
        })  
    
})
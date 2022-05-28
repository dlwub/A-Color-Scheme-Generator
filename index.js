let color_picker= document.getElementById('color-picker')
let mode_select = document.getElementById('mode-select')
let ctx = document.getElementById("color-canvas").getContext("2d");

document.getElementById('get-scheme').addEventListener('click', function(){
    
    let color_hex = color_picker.value, mode = mode_select.value; 
        
  fetch(`https://www.thecolorapi.com/scheme?hex=${color_hex.slice(1, 7)}&mode=${mode}`)
    .then(res => res.json())
    .then(data => {
        for(let i=0; i < 5; i++){
            ctx.fillStyle = `${data.colors[i].hex.value}`;
            ctx.fillRect(i * 110, 30, 110, 380);
            ctx.fillStyle = "black"
            ctx.font="18px bold"
            ctx.fillText(`${data.colors[i].hex.value}`, 20 + i*110, 430);
                      
        }})
    })
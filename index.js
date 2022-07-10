// code submit button to collect the hex code chosen by user and the
// scheme mode selected by the user


// code the submit button to post the chosen color and scheme mode to the '
// thecolorAPI




let submitBtn = document.getElementById("submitBtn")


function getScheme(){
    let seedColor = document.getElementById("seed-color").value
    let schemeMode = document.getElementById("scheme-mode").value
        
    let fullScheme = {
    seedColorHex : seedColor.slice(1,7),
    schemeModeName : schemeMode,
    count : 5
    }
    
    console.log(fullScheme)
    fetch(`https://www.thecolorapi.com/scheme?hex=${fullScheme.seedColorHex}&mode=${fullScheme.schemeModeName}&count=${fullScheme.count}`,{ 
        method:"GET",
        headers: {
            'Content-Type' : 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {console.log(data)
        
            document.getElementById('color1').style.background = data.colors[0].hex.value
            document.getElementById('color2').style.background = data.colors[1].hex.value
            document.getElementById('color3').style.background = data.colors[2].hex.value
            document.getElementById('color4').style.background = data.colors[3].hex.value
            document.getElementById('color5').style.background = data.colors[4].hex.value
        
            document.getElementById("hd1").textContent = data.colors[0].hex.value
            document.getElementById("hd2").textContent = data.colors[1].hex.value
            document.getElementById("hd3").textContent = data.colors[2].hex.value
            document.getElementById("hd4").textContent = data.colors[3].hex.value
            document.getElementById("hd5").textContent = data.colors[4].hex.value
        })

    
} 







submitBtn.addEventListener('click', getScheme)

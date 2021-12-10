document.addEventListener("DOMContentLoaded", (e) => {
    let d = document, res = d.getElementById('res'), input = d.getElementById('input'), ansT = 0, x = 0, ans = 0, areaF = 0;

    input.addEventListener("change", (e) => {
        n = e.target.value;
        let y = ( 1 / n);
        let area = ( y / 2 );
        let ansO = y*(Math.E**area);

        for(let i = 1; i <= n - 1; i++){
            x = area + ( 1 / n );
            area = x;
            ans = y*(Math.E**x);
            ansT += ans;
        }
        areaF = ansT + ansO;
        res.innerText = areaF.toFixed(10);
        n = 0;
    });

    function limpiar(e){
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            alert("hola")
        }
    }

    input.addEventListener("keypress", (e) => {
        y = ( 1 / n);
        area = ( y / 2 );
        ansO = y*(Math.E**area);
        ansT = 0; x = 0; ans = 0; areaF = 0; x = 0; 
    });

});

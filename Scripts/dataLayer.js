document.getElementById('email').addEventListener('click',
    function(){
        window.dataLayer.push(
            {
                'event': 'contact',
                'method': 'email' 
            }
        )
    }
)
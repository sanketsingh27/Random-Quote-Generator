        var URL ='https://got-quotes.herokuapp.com/quotes';
        window.onload = loadQuote();
        
        function loadQuote(){
            document.getElementById('quote').innerHTML =''
            fetch(URL)
            .then(res => res.json())
            .then((data)=>{
                console.log(data)
                document.getElementById('quote').innerHTML = data.quote;    
            })
        }
        
        document.getElementById('nxt-btn').addEventListener('click',loadQuote);
        
  
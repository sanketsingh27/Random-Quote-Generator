        var URL ='https://got-quotes.herokuapp.com/quotes';
        window.onload = loadQuote();
        
        function loadQuote(){
            document.getElementsByTagName('section').innerHTML =''
            fetch(URL)
            .then(res => res.json())
            .then((data)=>{
                console.log(data)
                document.getElementById('quote').innerHTML = data.quote;
                document.getElementById('char').innerHTML = data.character;    
            })
        }
        
        document.getElementById('nxt-btn').addEventListener('click',loadQuote);
        
  
var quotes = [
    {
        quote: 'The only thing that you absolutely have to know, is the location of the library.',
        speaker: 'Albert Einstein'
    },
    
    {
        quote: 'Libraries will get you through times of no money better than money will get you through times of no libraries.',
        speaker: 'Anne Hebert'
    },
    
    {
        quote: 'Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.',
        speaker: 'Walter Cronkite'
    },
    
    {
        quote: 'Access to knowledge is the superb, the supreme act of truly great civilizations. Of all the institutions that purport to do this, free libraries stand virtually alone in accomplishing this.',
        speaker: 'Toni Morrison'
    },
    ]

var handlers = {
    getQuote: function() {
        //get JSON
        //print JSON
        
    },
    
    showQuote: function() {
        var randomNumber = Math.floor(Math.random() * quotes.length);
        console.log(quotes[randomNumber].quote);
        var randomQuote = quotes[randomNumber].quote;
        var randomQuoteSpeaker = quotes[randomNumber].speaker;
        var html = randomQuote + " --" + randomQuoteSpeaker;
        var quoteDiv = document.getElementById("quote");
        quoteDiv.innerHTML = html;
    },
    
    tweetQuote: function() {
        var tweetText = document.getElementById('quote').innerHTML;
        var tweetURL = 'https://twitter.com/share?text=' + tweetText +'&url=url=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button';
        window.open(tweetURL, 'Tweet that quote');
    }
};

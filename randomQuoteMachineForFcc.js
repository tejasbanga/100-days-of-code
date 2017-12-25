var quoteMachine={
  quotes:[],
  quoteDb:function(){
    this.quotes[0]="Quotes are good for your health. I hope"
   this.quotes[1]="All we have to decide is what to do with the time that is given to us. – Gandalf the Grey";
   this.quotes[2]="But in the end it’s only a passing thing, this shadow; even darkness must pass. – Samwise Gamgee";
   this.quotes[3]="Do. Or do not. There is no try.-Yoda (The Empire Strikes Back)";
   this.quotes[4]="You can’t stop change any more than you can stop the suns from setting.-Shmi Skywalker (The Phantom Menace)";
   this.quotes[5]="Those who are crazy enough to think that they can change the world are the ones who do-Steve Jobs";
   this.quotes[6]="gotta kick at the darkness til it bleeds daylight-Bruce Cockburn";
   this.quotes[7]="Better to be hated for who you're, than be liked for who you're not-Kurt Cobain";
   this.quotes[8]="You cannot pass,I am the servant of the Secret Fire, wielder of the Flame of Anor The dark fire will not avail you! Flame of Udûn!-Gandalf the Grey";
   this.quotes[9]="Inspirations is for amateurs, the rest of just show up and get to work-Chuck Close";
}
};
 var a=0;
var quoteImp={
  quoteChanger1:function(){
    quoteMachine.quoteDb();
    var quote;
   
    var quoteElement;
    a=Math.ceil(Math.random()*(8-1)+1);
    quote=quoteMachine.quotes[a];
    quoteElement=document.getElementById("quoteGoesHere");
    quoteElement.textContent=quote;
   },
  twitterButton:function(){
    if(a!=0)
    window.open("https://twitter.com/intent/tweet?text="+quoteMachine.quotes[(0+parseInt(a))]);
    else
      window.open("https://twitter.com/intent/tweet?text="+"Quotes are good for your health. I hope");
      
  }
};


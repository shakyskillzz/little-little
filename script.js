function firstText() {
    var i = document.getElementById("first-pic-list");
    
    i.innerHTML = '<p id="textToggle">COMING IN AT NUMBER TRES!!  Hard pick but its gotta be the way you match my energy so perfectly, no matter how wierd n crazy i can be<br> you always match me and its amazing, i love that we can be the biggest silly monkeys, be the cheesiest twinks and also get serious like within minutes lol..i could be a bit of a wild card but its lovely to know that your little wierdo cs gf is a bit wild herself :) </p>'
}

function secondText(){
    var i = document.getElementById("second-pic-list");
    
    i.innerHTML = '<p id="textToggle">TWOO NUMBER 2^1 ! It has to be how wife material you really are. when i say wifee i mean ALL THE ABOVE. To your maturity, your personality, your natural beauty EVERYTHING. Your a true woman, your always working so hard and you really CARE about your future, and handle yourself so well through it all, you take good care of yourself, you inspire me alot, as a partner, your very understanding, emotionally mature, very self aware, and you check off everything i dreamed of as my perfect girlfriend. Alot of what i consider perfect is being the best version of yourself, and you are definately that too. The more we get to know each other on a deeper level over time, you keep proving all that more and more. so shoutout god for giving me a beautiful woman who was made with straight WIFEY material :)   </p>'
}

function thirdText(){
    var i = document.getElementById("third-pic-list");
    
    i.innerHTML = '<p id="textToggle"> FINALLY, OUR FAVORITE NUMBER.... number ONEEEE, just one. hands down, its got to be your cuteness. im not sure what sort of crazy spell youve put on me but everything about you, everything you do, the way you are naturally, ITS ALL SO DAMN CUTE. I cant help but think of you or look at you every time and just think to myself, god damn shes so cute all i wanna do it take care of her , shower her with love and make her feel like the amazing precious princess that she is. its funny when u are just simply existing doing the most normal humane thing, and u dnt even realize how cute i find it. if rick and morty ever becomes real then maybe one day you can see yourself the way i see you hehe. this cuteness drug of yours is the only drug ill stay addicted to (: </p>'
}

function changeGIF(){
    let i = document.getElementsByClassName("gif-div");

    i[0].innerHTML = '<p id="textToggle">Oh little keilly, my lovely little keilly, where do i even start. im going to write this as if it was my dying love letter. frfrfrfrfr, this is crazy, this all feels so surreal. time really flew so fast, like a rocket, and im proud of us :) its exciting to think keilly that this is only the begining :DDD what we have really is something special. i can say with certainty, i am in love with you keilly, and continue to with every kiss, every smile, every touch, every moment we share. Even though we dont get to see each other as much as we would like atm, the time we do spend together is truly precious. what ive learned through my life is In a perfect relationship its not always about the highs and just good times, but being able to grow together, succeed together, reach our goals together, and always supporting each other through the highs and lows, and we really do have that just that :,) the part about it all is that it all feels so natural and right. Thank you keilly,  thank you for being my confidant, an amazing gf, and my greatest joy. You really do make me feel like the happiest luckiest man in the world, and ill always be a man of my word when i said i will always always give you my 100%. the future is shining bright like a diamond so lets continue on this rollercoaster (not hulk) of life :D like subscribe follow comment anddd cheers. cheers to my one and only, my everything, my beautiful precious princess of a girlfriend, keilly cespedes. <3 </p>'

    const img = document.createElement('img');
    img.src = 'kalex.JPG'; // Replace with your image URL
    img.width = 400;
    img.height = 500;
    i[0].appendChild(img);
}
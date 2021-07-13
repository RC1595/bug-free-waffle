//Arrays
var tweet = ["Visited a giant YMCA today, and it was awesome to be back", "Happy #permission to dance Day!", "What's cutting the Oilsands carbon emissions? A cool $75 billion", "Locked and loaded #saratoga", "Tesla Solar Roof + Powerwall in major new housing development in Austin", "Nikita Kucherov and Bud Light. What a pair.", "Today's the day: applications for fall NASA internships are due!", "The current standing at the 41st #USSeniorOpen", "Well, I guess i'm a pretty sick guy...", "Have a great, safe Calgary Stampede folks!"];
var username = ["Giant Blue Ring", "William Shatner", "Calgary Herald", "Dave Portnoy", "Elon Musk", "Sportsnet", "NASA", "Golf Channel", "Spencer Charnas", "EHS Analytics"];
var created_at = ["07-08-2021", "07-09-2021", "07-08-2021", "07-09-2021", "07-09-2021", "07-09-2021", "07-09-2021", "07-09-2021", "07-09-2021","07-09-2021"];
var age = [8, 90, 13, 45, 50, 13, 63, 13, 30, 5];

// for loop



var users = [{
    tweet: "Visited a giant YMCA today, and it was awesome to be back",
    username: "Giant Blue Ring",
    created_at: "07-08-2021",
    age: 8  
},
{
    tweet: "Happy #permission to dance Day!",
    username: "William Shatner",
    created_at: "07-09-2021",
    age: 90
},
{
    tweet: "What's cutting the Oilsands carbon emissions? A cool $75 billion",
    username: "Calgary Herald",
    created_at: "07-08-2021", 
    age: 13
},
{
    tweet: "Locked and loaded #saratoga",
    username: "Dave Portnoy",
    created_at: "07-09-2021",
    age: 45
},
{
    tweet: "Tesla Solar Roof + Powerwall in major new housing development in Austin",
    username: "Elon Musk",
    created_at: "07-09-2021",
    age: 50
},
{
    tweet: "Nikita Kucherov and Bud Light. What a pair.",
    username: "Sportsnet",
    created_at: "07-09-2021",
    age: 13
},
{
    tweet:  "Today's the day: applications for fall NASA internships are due!", 
    username:  "NASA",
    created_at: "07-09-2021",
    age: 63
},
{
    tweet: "The current standing at the 41st #USSeniorOpen", 
    username: "Golf Channel",
    created_at: "07-09-2021",
    age: 13
},
{
    tweet: "Well, I guess i'm a pretty sick guy...",
    username: "Spencer Charnas",
    created_at: "07-09-2021",
    age: 30
},
{
    tweet: "Have a great, safe Calgary Stampede folks!",
    username: "EHS Analytics",
    created_at: "07-09-2021",
    age: 5
}]

function userAge(age) {
        if (age >= 18) {
            return true;    
        }else{
            return false;
        }    
    }
    for (var i = 0; i < users.length; i++) {
        var newTweet = tweet[i];
        var ages= newTweet.userAge(age);
        if (javaScriptObject == true){
            console.log (tweet);
        }else{
            console.log ("error");
        }
        
    }    



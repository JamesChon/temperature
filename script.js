// Gaming Hub Information
var platformName = "Gaming Hub";
var userCount = 3000000;
var subscriptionFee = "$14.99/month";
var gameLibrary = ["Action", "Adventure", "RPG"];
var launchYear = 2024;

// User Preferences
var languagePreference = "English";
var graphicsQuality = "Ultra";

// User Profile
var username = "Chon";
var userAge = 30;
var subscriptionStatus = true;

// Featured Games
var featuredGame = "World of Warcraft";
var featuredExpansion = "Season of Discovery";

// Recommendations
var recommendedGames = ["Archeage", "Throne and Liberty", "Black Dessert Online"];
var recommendedDLCs = ["Founder's Edition", "Eternal Collection"];

// Display Variables in HTML
document.write(`
    <h1>Welcome to ${platformName}</h1>
    
    <h2>Platform Information</h2>
    <p>Total Users: ${userCount}</p>
    <p>Subscription Fee: ${subscriptionFee}</p>
    <p>Game Library: ${gameLibrary.join(", ")}</p>
    <p>Launch Year: ${launchYear}</p>
    
    <h2>User Preferences</h2>
    <p>Language Preference: ${languagePreference}</p>
    <p>Graphics Quality: ${graphicsQuality}</p>
    
    <h2>User Profile</h2>
    <p>Username: ${username}</p>
    <p>Age: ${userAge}</p>
    <p>Subscription Status: ${subscriptionStatus ? "Active" : "Inactive"}</p>
    
    <h2>Featured Content</h2>
    <p>Featured Game: ${featuredGame}</p>
    <p>Featured Expansion: ${featuredExpansion}</p>
    
    <h2>Recommendations</h2>
    <p>Recommended Games: ${recommendedGames.join(", ")}</p>
    <p>Recommended DLCs: ${recommendedDLCs.join(", ")}</p>
`);
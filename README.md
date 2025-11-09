# Gridiron AI

**Team Name:** Josh Team  
**Member:** Josh Kunin

### App Name
**Gridiron AI** – The Best NFL Game Predictor 

### How someone uses it
1. Open the site on phone or laptop  
2. Pick any game this week (like Bears vs Packers)  
3. Hit “SIMULATE 1,000x”  
4. Boom — you get:
   - Final score prediction (27-24)
   - Win % for each team
   - Player prop odds (Justin Jefferson over 85.5 yards? 68% chance)
   - A sick bar chart showing why one team wins

### What makes this app great!
Every Sunday my group chat argues for 3 hours about who covers the spread. Vegas lines don’t tell you WHY the Chiefs cook the Raiders. This app pulls Madden 25 ratings + real NFL stats + 1,000 simulations and actually shows you “Mahomes is 9-1 vs blitz-heavy teams this year”. Fantasy junkies are gonna live on this site.

### Who it’s for
- NFL fans who think they’re smarter than Skip Bayless  
- Fantasy football weirdos (me)  
- Dudes who throw $20 on player props every Sunday  
- My roommate who still thinks Mitch Trubisky was good

### Pages I am building
1. **Home** – big cards of every game this week  
2. **Predictor** – pick a game → see rosters + hit SIMULATE  
3. **Results** – score, win %, prop predictions, dope charts  
4. **Saved Bets** – login and save your favorite predictions  
5. **How It Works** – flex page explaining the math

### Three Goals
1. Predict final score within 4 points 70% of the time  
2. Load results in under 8 seconds  
3. Work perfectly on iPhone

### Tools I am using
- Node.js + Express (backend)  
- React with Vite (frontend)  
- Free NFL stats APIs (ESPN, nflfastR, or mySportsFeeds)  
- SQLite for saving user predictions  
- Vercel OR Heroku for hosting  

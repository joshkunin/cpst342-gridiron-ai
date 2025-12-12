# Gridiron AI 🏈

**Team Name:** Josh team  
**Member:** Josh Kunin (solo)

### App Name
**Gridiron AI** – NFL Game Predictor (MVP)

### How someone uses it
1. Open the site (local or hosted)  
2. On the home page, type any two NFL teams (e.g., Chiefs vs Ravens)  
3. Hit “Simulate Game”  
4. The app runs 5 quick simulations, predicts the winner + realistic score, saves it to the database  
5. Redirects to the predictions page where you see all saved predictions  
6. You can update the predicted score or delete any prediction

### Why this app rocks
Every Sunday my group chat argues about who’s gonna win. Vegas lines are cool but don’t explain WHY. This MVP pulls real NFL game data from ESPN’s API and lets you simulate matchups with saved history. It’s the start of something bigger for fantasy nerds and bettors.

### Who it’s for
- NFL fans who love debating matchups  
- Fantasy football players  
- Anyone who wants quick “what-if” predictions  
- My roommates who think they know ball

### Pages we built
1. **Home** – clean form to enter two teams and simulate  
2. **Predictions** – list of all saved predictions from the database with update/delete options

### What we accomplished (MVP Goals)
1. Full CRUD functionality with SQLite database  
2. External REST API call to ESPN for real NFL games  
3. Clean, user-friendly front-end with football theme  
4. Hosted on Heroku (local demo recommended due to SQLite compatibility)

### Tools we used
- Node.js + Express (backend)  
- Handlebars (hbs) for templating  
- SQLite for persistent data storage  
- Axios for ESPN NFL API calls  
- Heroku for hosting  
- GitHub for version control  
- VS Code everyday

### Live Demo
Local: http://localhost:3000 (run `node server.js`)  
Hosted: [Your Heroku URL here — add when working]

Thanks for a great class — learned a ton building this!

Josh Kunin – CPST 342 – Fall 2025

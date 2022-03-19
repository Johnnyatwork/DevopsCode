
# Devops Show & Tell 

## Project to practice CI/CD

Using workflows in GitHub's Repo to do the following each time someone commits a change

- Send a message via Telegram to notify my team 
- Deploy it to Heroku

### Sending a message via Telegram using a workflow from marketplace (https://github.com/appleboy/telegram-action)
- Created a NUSTeam1 bot get the Authorization token ( `https://api.telegram.org/bot<token>/getMe` )
- Telegram Token and Telgram Chat Id are stored in GitHub Secrets
- Screen Shot of Telegram msgs
<img src="https://github.com/Johnnyatwork/DevopsCode/blob/master/images/telegramsnap.PNG" width="200" height="200" />

### Deploy App to Heroku using another workflow from marketplace (https://github.com/marketplace/actions/deploy-to-heroku)
- Added Heroku API KEY and EMAIL int GitHub Secrets
- Created deploy.yml with the action
- Screen Shot of Heroku Acitivy
<img src="https://github.com/Johnnyatwork/DevopsCode/blob/master/images/herokusnap.png" width="200" height="200" />

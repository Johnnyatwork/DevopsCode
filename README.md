
# Devops Show & Tell 

## Project to practice CI/CD

Using workflows in GitHub's Repo to do the following each time someone commits a change

- Send a message via Telegram to notify my team 
- Deploy it to Heroku

### Sending a message via Telegram using a workflow from marketplace (https://github.com/appleboy/telegram-action)
- Created a NUSTeam1 bot get the Authorization token ( `https://api.telegram.org/bot<token>/getMe` )
- Telegram Token and Telgram Chat Id are stored in GitHub Secrets
- Screen Shot of Telegram msgs
![Screen Grab](https://github.com/Johnnyatwork/DevopsCode/blob/master/images/telegramsnap.PNG)


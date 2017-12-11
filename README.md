# AWS Lambda function for Alexa Elf Names skill.
I'm Pumpkin Trufflebubbles. What's your elf name?
Try it yourself: [Elf Names skill on Amazon](https://www.amazon.com/dp/B01NBC8E14/ref=sr_1_3?s=digital-skills&ie=UTF8&qid=1513021945&sr=1-3&keywords=elf+names)

## Concepts
* It demonstrates how to create a Lambda function for handling Alexa Skill requests.

## Setup
To run this example skill you need to do a few things. 
1. Pull down the code and run `npm install` to install the Alexa SDK for Node.js.
2. Deploy the example code in AWS Lambda.
3. Configure the Alexa skill to use AWS Lambda.

### AWS Lambda Setup
I have a long list of instructions for this in the Readme for my [Mood Ring Skill](https://github.com/jasonlcrane/alexa-skill-mood-ring), but since I first created that skill and started this one, the process has changed. It also appears to have been simplified greatly. Feel free to update this readme with the correct steps, or I will next time I create a skill from scratch.

### Alexa Skill Setup
1. Go to the [Alexa Console](https://developer.amazon.com/edw/home.html) and click Add a New Skill.
2. Set "Elf Names" as the skill name and "elf names" as the invocation name, this is what is used to activate your skill. For example you would say: "Alexa, Ask mood ring what red means."
3. Select the Lambda ARN for the skill Endpoint and paste the ARN of your Lambda function. Click Next.
4. Copy the Intent Schema from the included IntentSchema.json.
5. Copy the Sample Utterances from the included SampleUtterances.txt. Click Next.
6. [optional] go back to the skill Information tab and copy the appId. Paste the appId into the index.js file for the variable APP_ID,
   then update the lambda source zip file with this change and upload to lambda again, this step makes sure the lambda function only serves request from authorized source.
7. You are now able to start testing your sample skill! You should be able to go to the [Echo webpage](http://echo.amazon.com/#skills) and see your skill enabled.
9. In order to test it, try to say some of the Sample Utterances from the Examples section below.
9. Your skill is now saved and once you are finished testing you can continue to publish your skill.

## Examples
    User: "Alexa, ask elf names to elf me."
    Alexa: "How would you like to be, hmm, let me see, Pumpkin Trufflebubbles."
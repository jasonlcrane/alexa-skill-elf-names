/**
 Copyright Jason Crane. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 *
 * - Custom slot type: demonstrates using custom slot types to handle a finite set of known values
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Elf Name for a girl name."
 *  Alexa: "(reads back elf name)"
 */

'use strict';

var AlexaSkill = require('./AlexaSkill');

var APP_ID = undefined; //OPTIONAL: replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

var ELFNAMES = [
	'Chocolate Chocolatesnacks',
	'Sherry Snowcrystals',
	'Cupcake Icicles',
	'Oliver the elf',
	'Sprinkles',
	'Turtledove Goldensleigh',
	'Frost Crystals',
	'Elfy Evergreen',
	'Frosty Fruitcake',
	'Bells Ciderjoy',
	'Joy Jinglebells',
	'Mistletoe Mike',
	'Mittens Sleighrider',
	'Happy Golucky',
	'Cookie Snowflake',
	'Wintertime Helper',
	'Holiday Hippopotamus',
	'Partridge Paretree',
	'Sleddy Stockingstuffer',
	'Blustery Blizzard',
	'Christopher Christmastime',
	'Frosty Frostcakes',
	'Nutmeg Twinkletree',
	'Pumpkin Trufflebubbles',
	'Licorice Fairyboughs',
	'Drummerboy Glitterberry',
	'Snowdrop Wintercake',
	'Merry Snowfrost',
	'Teddybear Turkeyleg',
	'Twinkletoes',
	'Pudding Pete',
    'Johnny Snowball',
    'December Gingerbreadsticks',
    'Cocoa Kringle',
    'Misty Mistletoe',
    'Bo Jingle Jangle',
    'Fluffy Flippytoes'
];

/**
 * ElfNames is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var ElfNames = function () {
	AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
ElfNames.prototype = Object.create(AlexaSkill.prototype);
ElfNames.prototype.constructor = ElfNames;

ElfNames.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
	var speechText = "Welcome to Elf Names. You can say things like, what is my elf name, or, elf me. ... Now, let's get started.";
	// If the user either does not reply to the welcome message or says something that is not
	// understood, they will be prompted again with this text.
	var repromptText = "For instructions on what you can say, please say help.";
	response.ask(speechText, repromptText);
};

ElfNames.prototype.intentHandlers = {
	"ElfNameIntent": function (intent, session, response) {
		var elfnameIndex = Math.floor(Math.random() * ELFNAMES.length);
		var randomElfname = ELFNAMES[elfnameIndex];

		// Create speech output
		var speechIntro = [
			"Let's see, how about ",
			"We'll call you ",
			'Your elf name is ',
			"How would you like to be, hmm, let me see, ",
			'You are '
		];

		var speechIntroIndex = Math.floor(Math.random() * speechIntro.length);
		var randomSpeechIntro = speechIntro[speechIntroIndex];
		var speechOutput = randomSpeechIntro + ', ' + randomElfname;
		var cardTitle = "Your elf name is " + randomElfname;
		var cardContent = 'Thanks for playing Elf Names, ' + randomElfname + '.'
		response.tellWithCard(speechOutput, cardTitle, cardContent);
	},

	"AMAZON.StopIntent": function (intent, session, response) {
		var speechOutput = "Thanks for playing Elf Names. Goodbye.";
		response.tell(speechOutput);
	},

	"AMAZON.CancelIntent": function (intent, session, response) {
		var speechOutput = "Thanks for playing Elf Names. Goodbye.";
		response.tell(speechOutput);
	},

	"AMAZON.HelpIntent": function (intent, session, response) {
		var speechText = "You can ask for an elf name like this, tell me an elf name, or, you can say, exit... Now, what can I help you with?";
		var repromptText = "You can say things like, tell me an elf name, or you can say, exit... Now, what can I help you with?";
		var speechOutput = {
			speech: speechText,
			type: AlexaSkill.speechOutputType.PLAIN_TEXT
		};
		var repromptOutput = {
			speech: repromptText,
			type: AlexaSkill.speechOutputType.PLAIN_TEXT
		};
		response.ask(speechOutput, repromptOutput);
	}
};

exports.handler = function (event, context) {
	var elfNames = new ElfNames();
	elfNames.execute(event, context);
};

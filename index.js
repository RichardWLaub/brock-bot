/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  _                    _           _           _   
 | |                  | |         | |         | |  
 | |__  _ __ ___   ___| | ________| |__   ___ | |_ 
 | '_ \| '__/ _ \ / __| |/ /______| '_ \ / _ \| __|
 | |_) | | | (_) | (__|   <       | |_) | (_) | |_ 
 |_.__/|_|  \___/ \___|_|\_\      |_.__/ \___/ \__|

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');

var controller = Botkit.slackbot({
    debug: false,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

var texts = [
        ':star: Brock Star! :star:',
        'Birds of a feather Brock together',
        'Brocket Launcher!!!',
        "Don't Brock till you get enough",
        'Brock lobsta!',
        'Between a Brock and a hard place',
        'New Kid on the Brock',
        'Brockalicious',
        'Brockapolypse'
    ];

var images = [
        'https://bloximages.chicago2.vip.townnews.com/missoulian.com/content/tncms/assets/v3/editorial/3/9e/39e6f734-2ce7-5312-8c91-8630ad9b192f/5bc36f7769d3d.image.jpg',
        'https://i2.wp.com/footballgarbagetime.com/wp-content/uploads/2016/03/Brock-Osweiler-Basketball-e1457417681808.jpg',
        'https://dalydosesports.files.wordpress.com/2016/12/100916-nfl-houston-texans-brock-osweiler-vadapt-664-high-88.jpg',
        'http://ww1.hdnux.com/photos/57/60/64/12520732/3/920x920.jpg',
        'http://i.imgur.com/RrZW1Iz.jpg',
        'https://nesncom.files.wordpress.com/2015/11/brock-osweiler-stephen-gostkowski.jpg',
        'https://nesncom.files.wordpress.com/2012/08/6a0115709f071f970b0168ead37993970c.jpe'
    ];

var roy_images = [
        'https://i.pinimg.com/236x/b7/50/a3/b750a3e04f98e5a974c5ba08305ce3de--patrick-roy-colorado-avalanche.jpg'
    ];

function brockRespond(bot, message) {

    'use strict';
    var text = texts[Math.floor(Math.random() * texts.length)],
        image = images[Math.floor(Math.random() * images.length)],
        reply_with_attachments = {
            'attachments': [
                {
                    "pretext": text,
                    "image_url": image
                }
            ],
        };

    bot.reply(message, reply_with_attachments);

}

function royRespond(bot, message) {

    'use strict';
    var image = roy_images[Math.floor(Math.random() * roy_images.length)],
        reply_with_attachments = {
            'attachments': [
                {
                    "pretext": "Hockey?! More like... \n SAVE BY ROY!!!!!!",
                    "image_url": image
                }
            ],
        };

    bot.reply(message, reply_with_attachments);

}

function punRespond(bot, message) {

    'use strict';
    var text = message.text + "?! More like " + message.text.replace(message.match[0], "Brock") + "!",
        reply_with_attachments = {
            'attachments': [
                {
                    "pretext": text,
                }
            ],
        };

    bot.reply(message, reply_with_attachments);

}

controller.hears([/[^\s]*ock/g], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {
    'use strict';
    switch (message.match[0]) {
    case 'brock':
        brockRespond(bot, message);
        break;
    case 'hock':
        royRespond(bot, message);
        break;
    default:
        punRespond(bot, message);
    }
});

controller.on(['direct_mention', 'mention'], function (bot, message) {
    'use strict';
    brockRespond(bot, message);
});

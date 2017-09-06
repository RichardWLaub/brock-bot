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
        "Don't Brock till you get enough",
        'Brock lobsta!',
        'Between a Brock and a hard place',
        'New Kid on the Brock',
        'Brockalicious',
        'Brockapolypse'
    ];

var images = [
        'http://ww1.hdnux.com/photos/57/60/64/12520732/3/920x920.jpg',
        'http://i.imgur.com/RrZW1Iz.jpg',
        'https://nesncom.files.wordpress.com/2015/11/brock-osweiler-stephen-gostkowski.jpg',
        'http://giant.gfycat.com/ParchedWelltodoAlaskanhusky.gif',
        'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAYCAAAAJDllYWE5NjQ1LTNkY2ItNDgyYS05ZDUyLWJlYjI3M2M5MmM5ZA.jpg',
        'https://nesncom.files.wordpress.com/2012/08/6a0115709f071f970b0168ead37993970c.jpe'
    ];

controller.hears(['brock'], ['ambient', 'direct_message', 'direct_mention', 'mention'], function (bot, message) {

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

});

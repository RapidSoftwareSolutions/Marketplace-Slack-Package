module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'Slack',
        'tagline': "Slack API Package",
        "description": "This block can be used alone or in conjunction with each other to build many different kinds of Slack apps..",
        'image': 'https://upload.wikimedia.org/wikipedia/ru/4/41/Slack_logo.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/',
        "accounts": {
            'domain': 'slack.com',
            'credentials': [
                'token',
            ]
        },
        'blocks': [{
            "name":"revokeAuth",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token",
                },
                {
                    name: "test",
                    type: "Number",
                    info: "Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"testAuth",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getBotInfo",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token",
                },
                {
                    name: "bot",
                    type: "String",
                    info: "Bot user to get info on.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getChannels",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "excludeArchived",
                    type: "Number",
                    info: "Don't return archived channels.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"createChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of channel to create.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"archiveChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to archive.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getChannelHistory",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to archive.",
                },
                {
                    name: "latest",
                    type: "String",
                    info: "End of time range of messages to include in results.",
                },
                {
                    name: "oldest",
                    type: "String",
                    info: "Start of time range of messages to include in results.",
                },
                {
                    name: "inclusive",
                    type: "Number",
                    info: "Include messages with latest or oldest timestamp in results.",
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Number of messages to return, between 1 and 1000.",
                },
                {
                    name: "unreads",
                    type: "String",
                    info: "Include unread_count_display in the output?",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getChannelInfo",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to get info on.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"inviteToChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to get info on.",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to invite to channel.",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"joinChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of channel to join.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"kickFromChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to remove user from.",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to remove from channel.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"leaveChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to leave.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"leaveChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to leave.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"markChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to set reading cursor in.",
                },
                {
                    name: "ts",
                    type: "String",
                    info: "Timestamp of the most recently seen message.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"renameChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to set reading cursor in.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "New name for channel.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"setChannelPurpose",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to set reading cursor in.",
                },
                {
                    name: "purpose",
                    type: "String",
                    info: "The new purpose.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"setChannelTopic",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to set reading cursor in.",
                },
                {
                    name: "topic",
                    type: "String",
                    info: "The new topic.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"unarchiveChannel",
                    //"description", "",
                    "args":[
                        {
                            name: "token",
                            type: "String",
                            info: "Authentication token (Requires scope: channels:write)",
                        },
                        {
                            name: "channel",
                            type: "String",
                            info: "Channel to unarchive.",
                        }
                    ],
                    /*'callbacks':[
                        {
                            'name':'error',
                            'info': 'Error'
                        },
                        {
                            'name':'success',
                            'info': 'Success'
                        }
                    ]*/
                }, {
            "name":"getPrivateChannels",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "excludeArchived",
                    type: "Number",
                    info: "Don't return archived PrivateChannels.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"createPrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of PrivateChannel to create.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"archivePrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to archive.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getPrivateChannelHistory",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to archive.",
                },
                {
                    name: "latest",
                    type: "String",
                    info: "End of time range of messages to include in results.",
                },
                {
                    name: "oldest",
                    type: "String",
                    info: "Start of time range of messages to include in results.",
                },
                {
                    name: "inclusive",
                    type: "Number",
                    info: "Include messages with latest or oldest timestamp in results.",
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Number of messages to return, between 1 and 1000.",
                },
                {
                    name: "unreads",
                    type: "String",
                    info: "Include unread_count_display in the output?",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getPrivateChannelInfo",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to get info on.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"inviteToPrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to get info on.",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to invite to PrivateChannel.",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"kickFromPrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to remove user from.",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to remove from PrivateChannel.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"leavePrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to leave.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"leavePrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to leave.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"markPrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to set reading cursor in.",
                },
                {
                    name: "ts",
                    type: "String",
                    info: "Timestamp of the most recently seen message.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"renamePrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to set reading cursor in.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "New name for PrivateChannel.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"setPrivateChannelPurpose",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to set reading cursor in.",
                },
                {
                    name: "purpose",
                    type: "String",
                    info: "The new purpose.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"setPrivateChannelTopic",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to set reading cursor in.",
                },
                {
                    name: "topic",
                    type: "String",
                    info: "The new topic.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"unarchivePrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to unarchive.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"openPrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to open.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"closePrivateChannel",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to close.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"deleteChat",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel containing the message to be deleted.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to be deleted.",
                },
                {
                    name: "asUser",
                    type: "String",
                    info: "Pass true to delete the message as the authed user. Bot users in this context are considered authed users.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"sendMeMessage",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel containing the message to be deleted.",
                },
                {
                    name: "text",
                    type: "String",
                    info: "Text of the message to send.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"postMessage",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel containing the message to be deleted.",
                },
                {
                    name: "text",
                    type: "String",
                    info: "Text of the message to send.",
                },
                {
                    name: "parse",
                    type: "String",
                    info: "Change how messages are treated.",
                },
                {
                    name: "linkNames",
                    type: "String",
                    info: "Find and link channel names and usernames.",
                },
                {
                    name: "attachments",
                    type: "JSON",
                    info: "Structured message attachments.",
                },
                {
                    name: "unfurlLinks",
                    type: "String",
                    info: "Pass true to enable unfurling of primarily text-based content.",
                },
                {
                    name: "unfurlMedia",
                    type: "String",
                    info: "Pass false to disable unfurling of media content.",
                },
                {
                    name: "username",
                    type: "String",
                    info: "Set your bot's user name. Must be used in conjunction with as_user set to false, otherwise ignored.  See authorship below.",
                },
                {
                    name: "asUser",
                    type: "String",
                    info: "Pass true to post the message as the authed user, instead of as a bot. Defaults to false.",
                },
                {
                    name: "iconUrl",
                    type: "String",
                    info: "URL to an image to use as the icon for this message. Must be used in conjunction with as_user  set to false, otherwise ignored. ",
                },
                {
                    name: "iconEmoji",
                    type: "String",
                    info: "Emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user  set to false, otherwise ignored.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"updateMessage",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel containing the message to be deleted.",
                },
                {
                    name: "ts",
                    type: "String",
                    info: "Timestamp of the message to be updated.",
                },
                {
                    name: "text",
                    type: "String",
                    info: "Text of the message to send.",
                },
                {
                    name: "parse",
                    type: "String",
                    info: "Change how messages are treated.",
                },
                {
                    name: "linkNames",
                    type: "String",
                    info: "Find and link channel names and usernames.",
                },
                {
                    name: "attachments",
                    type: "JSON",
                    info: "Structured message attachments.",
                },
                {
                    name: "asUser",
                    type: "String",
                    info: "Pass true to post the message as the authed user, instead of as a bot. Defaults to false.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"endDoNotDisturb",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: dnd:write)",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"endSnooze",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: dnd:write)",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getDoNotDisturbInfo",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: dnd:write)",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to fetch status for (defaults to current user)",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"setSnooze",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: dnd:write)",
                },
                {
                    name: "numMinutes",
                    type: "Number",
                    info: "Number of minutes, from now, to snooze until.",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"setSnooze",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: dnd:write)",
                },
                {
                    name: "numMinutes",
                    type: "Number",
                    info: "Number of minutes, from now, to snooze until.",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getTeamUserDoNotDisturbInfo",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: dnd:read)",
                },
                {
                    name: "users",
                    type: "Number",
                    info: "Comma-separated list of users to fetch Do Not Disturb status for.",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"setSnooze",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: dnd:write)",
                },
                {
                    name: "numMinutes",
                    type: "Number",
                    info: "Number of minutes, from now, to snooze until.",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getTeamCustomEmoji",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: emoji:read)",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"addFileComment",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to add a comment to.",
                },
                {
                    name: "comment",
                    type: "String",
                    info: "Text of the comment to add.",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel id (encoded) of which location to associate with the new comment.",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"deleteFileComment",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to delete a comment from.",
                },
                {
                    name: "id",
                    type: "String",
                    info: "The comment to delete.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"updateFileComment",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to update a comment from.",
                },
                {
                    name: "id",
                    type: "String",
                    info: "The comment to update.",
                },
                {
                    name: "comment",
                    type: "String",
                    info: "Text of the comment to edit.",
                },

            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"deleteFile",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "ID of file to delete.",
                },
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"uploadFile",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File contents via multipart/form-data.",
                },
                {
                    name: "filetype",
                    type: "String",
                    info: "A file type identifier.",
                },
                {
                    name: "filename",
                    type: "String",
                    info: "Filename of file.",
                },
                {
                    name: "title",
                    type: "String",
                    info: "Title of file.",
                },
                {
                    name: "initialComment",
                    type: "String",
                    info: "Initial comment to add to file.",
                },
                {
                    name: "channels",
                    type: "String",
                    info: "Comma-separated list of channel names or IDs where the file will be shared.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getFileInfo",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: files:read)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "Specify a file by providing its ID.",
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"getTeamFiles",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: files:read)",
                },
                {
                    name: "user",
                    type: "String",
                    info: "Filter files created by a single user.",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Filter files appearing in a specific channel, indicated by its ID.",
                },
                {
                    name: "timestampFrom",
                    type: "String",
                    info: "Filter files created after this timestamp (inclusive).",
                },
                {
                    name: "timestampTo",
                    type: "String",
                    info: "Filter files created before this timestamp (inclusive).",
                },
                {
                    name: "types",
                    type: "String",
                    info: "Filter files by type: `all` - All files; `spaces` - Posts; `snippets` - Snippets; `images` - Image files; `gdocs` - Google docs; `zips` - Zip files; `pdfs` - PDF files. You can pass multiple values in the types argument like types=spaces,snippets.The default value is all, which does not filter the list.",
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"disableFileSharing",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to revoke.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"disableFileSharing",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to revoke.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }, {
            "name":"enableFileSharing",
            //"description", "",
            "args":[
                {
                    name: "token",
                    type: "String",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to revoke.",
                }
            ],
            /*'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]*/
        }]
    })
};
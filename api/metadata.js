module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'Slack',
        'tagline': "Slack API Package",
        "description": "This block can be used alone or in conjunction with each other to build many different kinds of Slack apps.",
        'image': 'http://logo.clearbit.com/slack.com',
        'repo': 'https://github.com/RapidSoftwareSolutions/',
        "accounts": {
            'domain': 'slack.com',
            'credentials': [
                'token',
            ]
        },
        'blocks': [{
            "name":"revokeAuth",
            "description": "This method revokes an access token. Use it when you no longer need a token. For example, with a Sign In With Slack app, call this to log a user out.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token",
                    required: true
                },
                {
                    name: "test",
                    type: "Number",
                    info: "Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name': 'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"testAuth",
            "description": "This method checks authentication and tells you who you are.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name': 'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getBotInfo",
            "description": "This method returns information about a bot user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token",
                    required: true
                },
                {
                    name: "bot",
                    type: "String",
                    info: "Bot user to get info on.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChannels",
            "description": "This method returns a list of all channels in the team. This includes channels the caller is in, channels they are not currently in, and archived channels but does not include private channels. The number of (non-deactivated) members in each channel is also returned.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "excludeArchived",
                    type: "Number",
                    info: "Don't return archived channels.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createChannel",
            "description": "This method is used to create a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of channel to create.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"archiveChannel",
            "description": "This method archives a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to archive.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChannelHistory",
            "description": "This method returns a portion of message events from the specified channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to fetch.",
                    required: true
                },
                {
                    name: "latest",
                    type: "String",
                    info: "End of time range of messages to include in results.",
                    required: false,
                },
                {
                    name: "oldest",
                    type: "String",
                    info: "Start of time range of messages to include in results.",
                    required: false,
                },
                {
                    name: "inclusive",
                    type: "Number",
                    info: "Include messages with latest or oldest timestamp in results.",
                    required: false,
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Number of messages to return, between 1 and 1000.",
                    required: false,
                },
                {
                    name: "unreads",
                    type: "String",
                    info: "Include unread_count_display in the output?",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChannelInfo",
            "description": "This method returns information about a team channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to get info on.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"inviteToChannel",
            "description": "This method is used to invite a user to a channel. The calling user must be a member of the channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to get info on.",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Required: User to invite to channel.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"joinChannel",
            "description": "This method is used to join a channel. If the channel does not exist, it is created.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "name",
                    type: "String",
                    info: "Required: Name of channel to join.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"kickFromChannel",
            "description": "This method allows a user to remove another member from a team channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to remove user from.",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Required: User to remove from channel.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"leaveChannel",
            "description": "This method is used to leave a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to leave.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"markChannel",
            "description": "This method moves the read cursor in a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to set reading cursor in.",
                    required: true
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Required: Timestamp of the most recently seen message.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"renameChannel",
            "description": "This method renames a team channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to set reading cursor in.",
                    required: true
                },
                {
                    name: "name",
                    type: "String",
                    info: "Required: New name for channel.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setChannelPurpose",
            "description": "This method is used to change the purpose of a channel. The calling user must be a member of the channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to set reading cursor in.",
                    required: true
                },
                {
                    name: "purpose",
                    type: "String",
                    info: "Required: The new purpose.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setChannelTopic",
            "description": "This method is used to change the topic of a channel. The calling user must be a member of the channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to set reading cursor in.",
                    required: true
                },
                {
                    name: "topic",
                    type: "String",
                    info: "Required: The new topic.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"unarchiveChannel",
            "description": "This method unarchives a channel. The calling user is added to the channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to unarchive.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getPrivateChannels",
            "description": "This method returns a list of private channels in the team that the caller is in and archived groups that the caller was in. The list of (non-deactivated) members in each private channel is also returned.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "excludeArchived",
                    type: "Number",
                    info: "Don't return archived PrivateChannels.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createPrivateChannel",
            "description": "This method creates a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "name",
                    type: "String",
                    info: "Required: Name of PrivateChannel to create.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"archivePrivateChannel",
            "description": "This method archives a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to archive.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getPrivateChannelHistory",
            "description": "This method returns a portion of messages/events from the specified private channel. To read the entire history for a private channel, call the method with no latest or oldest arguments, and then continue paging using the instructions below.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Private Channel to fetch.",
                    required: true
                },
                {
                    name: "latest",
                    type: "String",
                    info: "End of time range of messages to include in results.",
                    required: false,
                },
                {
                    name: "oldest",
                    type: "String",
                    info: "Start of time range of messages to include in results.",
                    required: false,
                },
                {
                    name: "inclusive",
                    type: "Number",
                    info: "Include messages with latest or oldest timestamp in results.",
                    required: false,
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Number of messages to return, between 1 and 1000.",
                    required: false,
                },
                {
                    name: "unreads",
                    type: "String",
                    info: "Include unread_count_display in the output?",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getPrivateChannelInfo",
            "description": "This method returns information about a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to get info on.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"inviteToPrivateChannel",
            "description": "This method is used to invite a user to a private channel. The calling user must be a member of the private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to get info on.",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Required: User to invite to PrivateChannel.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"kickFromPrivateChannel",
            "description": "This method allows a user to remove another member from a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to remove user from.",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Required: User to remove from PrivateChannel.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"leavePrivateChannel",
            "description": "This method is used to leave a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to leave.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"markPrivateChannel",
            "description": "This method moves the read cursor in a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to set reading cursor in.",
                    required: true
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Required: Timestamp of the most recently seen message.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"renamePrivateChannel",
            "description": "This method renames a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to set reading cursor in.",
                    required: true
                },
                {
                    name: "name",
                    type: "String",
                    info: "Required: New name for PrivateChannel.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setPrivateChannelPurpose",
            "description": "This method is used to change the purpose of a private channel. The calling user must be a member of the private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to set reading cursor in.",
                    required: true
                },
                {
                    name: "purpose",
                    type: "String",
                    info: "Required: The new purpose.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setPrivateChannelTopic",
            "description": "This method is used to change the topic of a private channel. The calling user must be a member of the private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to set reading cursor in.",
                    required: true
                },
                {
                    name: "topic",
                    type: "String",
                    info: "Required: The new topic.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"unarchivePrivateChannel",
            "description": "This method unarchives a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to unarchive.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"openPrivateChannel",
            "description": "This method opens a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to open.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"closePrivateChannel",
            "description": "This method closes a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: PrivateChannel to close.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"closeDirectMessageChannel",
            "description": "This method closes a direct message channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Direct Message Channel to close.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getDirectMessageChannelHistory",
            "description": "This method returns a portion of messages/events from the specified direct message channel. To read the entire history for a direct message channel, call the method with no latest or oldest arguments, and then continue paging using the instructions below.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: im:history)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to fetch.",
                    required: true
                },
                {
                    name: "latest",
                    type: "String",
                    info: "End of time range of messages to include in results.",
                    required: false,
                },
                {
                    name: "oldest",
                    type: "String",
                    info: "Start of time range of messages to include in results.",
                    required: false,
                },
                {
                    name: "inclusive",
                    type: "Number",
                    info: "Include messages with latest or oldest timestamp in results.",
                    required: false,
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Number of messages to return, between 1 and 1000.",
                    required: false,
                },
                {
                    name: "unreads",
                    type: "String",
                    info: "Include unread_count_display in the output?",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserImChannels",
            "description": "This method returns a list of all im channels that the user has.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: im:history)",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"markDirectMessageChannel",
            "description": "This method moves the read cursor in a direct message channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: im:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to set reading cursor in.",
                    required: true
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Required: Timestamp of the most recently seen message.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"openDirectMessageChannel",
            "description": "This method opens a direct message channel with another member of your Slack team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: im:write)",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Required: User to open a direct message channel with.",
                    required: true
                },
                {
                    name: "returnIm",
                    type: "String",
                    info: "Boolean, indicates you want the full IM channel definition in the response.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getAccessToken",
            "description": "This method allows you to exchange a temporary OAuth code for an API access token. This is used as part of the OAuth authentication flow.",
            "args":[
                {
                    name: "clientId",
                    type: "String",
                    info: "Required: Issued when you created your application.",
                    required: true
                },
                {
                    name: "clientSecret",
                    type: "String",
                    info: "Required: Issued when you created your application.",
                    required: true
                },
                {
                    name: "code",
                    type: "String",
                    info: "Required: The code param returned via the OAuth callback.",
                    required: true
                },
                {
                    name: "redirectUri",
                    type: "String",
                    info: "Required: This must match the originally submitted URI (if one was sent).",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"closeMultipartyDirectMessageChannel",
            "description": "This method closes a multiparty direct message channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: mpim:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Multiparty Direct Message Channel to close.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info':'Success'
                }
            ]
        }, {
            "name":"getMultipartyDirectMessageChannelHistory",
            "description": "This method returns a portion of messages/events from the specified multiparty direct message channel. To read the entire history for a multiparty direct message, call the method with no latest or oldest arguments, and then continue paging using the instructions below.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: mpim:history)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to fetch.",
                    required: true
                },
                {
                    name: "latest",
                    type: "String",
                    info: "End of time range of messages to include in results.",
                    required: false,
                },
                {
                    name: "oldest",
                    type: "String",
                    info: "Start of time range of messages to include in results.",
                    required: false,
                },
                {
                    name: "inclusive",
                    type: "Number",
                    info: "Include messages with latest or oldest timestamp in results.",
                    required: false,
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Number of messages to return, between 1 and 1000.",
                    required: false,
                },
                {
                    name: "unreads",
                    type: "String",
                    info: "Include unread_count_display in the output?",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getMultipartyDirectMessageChannels",
            "description": "This method returns a list of all multiparty direct message channels that the user has.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: mpim:write)",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"markMultipartyDirectMessageChannel",
            "description": "This method moves the read cursor in a multiparty direct message channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: mpim:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to set reading cursor in.",
                    required: true
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Required: Timestamp of the most recently seen message.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteChat",
            "description": "This method deletes a message from a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel containing the message to be deleted.",
                    required: true
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Required: Timestamp of the message to be deleted.",
                    required: true
                },
                {
                    name: "asUser",
                    type: "String",
                    info: "Pass true to delete the message as the authed user. Bot users in this context are considered authed users.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"openMultipartyDirectMessageChannel",
            "description": "This method opens a multiparty direct message.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: channels:write)",
                    required: true
                },
                {
                    name: "users",
                    type: "String",
                    info: "Required: Comma separated lists of users. The ordering of the users is preserved whenever a MPIM group is returned.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {    
            "name":"sendMeMessage",
            "description": "This method sends a me message to a channel from the calling user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel containing the message to be deleted.",
                    required: true
                },
                {
                    name: "text",
                    type: "String",
                    info: "Required: Text of the message to send.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"postMessage",
            "description": "This method posts a message to a public channel, private channel, or direct message/IM channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel containing the message to be deleted.",
                    required: true
                },
                {
                    name: "text",
                    type: "String",
                    info: "Required: Text of the message to send.",
                    required: true
                },
                {
                    name: "parse",
                    type: "String",
                    info: "Change how messages are treated.",
                    required: false,
                },
                {
                    name: "linkNames",
                    type: "String",
                    info: "Find and link channel names and usernames.",
                    required: false,
                },
                {
                    name: "attachments",
                    type: "JSON",
                    info: "Structured message attachments.",
                    required: false,
                },
                {
                    name: "unfurlLinks",
                    type: "String",
                    info: "Pass true to enable unfurling of primarily text-based content.",
                    required: false,
                },
                {
                    name: "unfurlMedia",
                    type: "String",
                    info: "Pass false to disable unfurling of media content.",
                    required: false,
                },
                {
                    name: "username",
                    type: "String",
                    info: "Set your bot's user name. Must be used in conjunction with as_user set to false, otherwise ignored.  See authorship below.",
                    required: false,
                },
                {
                    name: "asUser",
                    type: "String",
                    info: "Pass true to post the message as the authed user, instead of as a bot. Defaults to false.",
                    required: false,
                },
                {
                    name: "iconUrl",
                    type: "String",
                    info: "URL to an image to use as the icon for this message. Must be used in conjunction with as_user  set to false, otherwise ignored. ",
                    required: false,
                },
                {
                    name: "iconEmoji",
                    type: "String",
                    info: "Emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user  set to false, otherwise ignored.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateMessage",
            "description": "This method updates a message in a channel. Though related to chat.postMessage, some parameters of chat.update are handled differently.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel containing the message to be deleted.",
                    required: false,
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to be updated.",
                    required: false,
                },
                {
                    name: "text",
                    type: "String",
                    info: "Text of the message to send.",
                    required: false,
                },
                {
                    name: "parse",
                    type: "String",
                    info: "Change how messages are treated.",
                    required: false,
                },
                {
                    name: "linkNames",
                    type: "String",
                    info: "Find and link channel names and usernames.",
                    required: false,
                },
                {
                    name: "attachments",
                    type: "JSON",
                    info: "Structured message attachments.",
                    required: false,
                },
                {
                    name: "asUser",
                    type: "String",
                    info: "Pass true to post the message as the authed user, instead of as a bot. Defaults to false.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"endDoNotDisturb",
            "description": "Ends the user's currently scheduled Do Not Disturb session immediately.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: dnd:write)",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"endSnooze",
            "description": "Ends the current user's snooze mode immediately.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: dnd:write)",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getDoNotDisturbInfo",
            "description": "Provides information about a user's current Do Not Disturb settings.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: dnd:write)",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Required: User to fetch status for (defaults to current user)",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setSnooze",
            "description": "Adjusts the snooze duration for a user's Do Not Disturb settings. If a snooze session is not already active for the user, invoking this method will begin one for the specified duration.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: dnd:write)",
                    required: true
                },
                {
                    name: "numMinutes",
                    type: "Number",
                    info: "Required: Number of minutes, from now, to snooze until.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamUserDoNotDisturbInfo",
            "description": "Provides information about the current Do Not Disturb settings for users of a Slack team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: dnd:read)",
                    required: true
                },
                {
                    name: "users",
                    type: "Number",
                    info: "Required: Comma-separated list of users to fetch Do Not Disturb status for.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamCustomEmoji",
            "description": "This method lists the custom emoji for a team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: emoji:read)",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"addFileComment",
            "description": "Add a comment to an existing file.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: files:write:user)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "Required: File to add a comment to.",
                    required: true
                },
                {
                    name: "comment",
                    type: "String",
                    info: "Required: Text of the comment to add.",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel id (encoded) of which location to associate with the new comment.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteFileComment",
            "description": "Delete an existing comment on a file. Only the original author of the comment or a Team Administrator may delete a file comment.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: files:write:user)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "Required: File to delete a comment from.",
                    required: true
                },
                {
                    name: "id",
                    type: "String",
                    info: "Required: The comment to delete.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateFileComment",
            "description": "Edit an existing comment on a file. Only the user who created a comment may make edits. Teams may configure a limited time window during which file comment edits are allowed.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: files:write:user)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "Required: File to update a comment from.",
                    required: true
                },
                {
                    name: "id",
                    type: "String",
                    info: "Required: The comment to update.",
                    required: true
                },
                {
                    name: "comment",
                    type: "String",
                    info: "Required: Text of the comment to edit.",
                    required: true
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteFile",
            "description": "This method deletes a file from your team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: files:write:user)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "Required: ID of file to delete.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"uploadFile",
            "description": "This method allows you to create or upload an existing file.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: files:write:user)",
                    required: true
                },
                {
                    name: "file",
                    type: "File",
                    info: "Required: File contents.",
                    required: true
                },
                {
                    name: "filetype",
                    type: "String",
                    info: "A file type identifier.",
                    required: false,
                },
                {
                    name: "filename",
                    type: "String",
                    info: "Filename of file.",
                    required: false,
                },
                {
                    name: "title",
                    type: "String",
                    info: "Title of file.",
                    required: false,
                },
                {
                    name: "initialComment",
                    type: "String",
                    info: "Initial comment to add to file.",
                    required: false,
                },
                {
                    name: "channels",
                    type: "String",
                    info: "Comma-separated list of channel names or IDs where the file will be shared.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getFileInfo",
            "description": "This method returns information about a file in your team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: files:read)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "Required: Specify a file by providing its ID.",
                    required: true
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                    required: false,
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamFiles",
            "description": "This method returns a list of files within the team. It can be filtered and sliced in various ways.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: files:read)",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Filter files created by a single user.",
                    required: false,
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Filter files appearing in a specific channel, indicated by its ID.",
                    required: false,
                },
                {
                    name: "timestampFrom",
                    type: "String",
                    info: "Filter files created after this timestamp (inclusive).",
                    required: false,
                },
                {
                    name: "timestampTo",
                    type: "String",
                    info: "Filter files created before this timestamp (inclusive).",
                    required: false,
                },
                {
                    name: "types",
                    type: "String",
                    info: "Filter files by type: `all` - All files; `spaces` - Posts; `snippets` - Snippets; `images` - Image files; `gdocs` - Google docs; `zips` - Zip files; `pdfs` - PDF files. You can pass multiple values in the types argument like types=spaces,snippets.The default value is all, which does not filter the list.",
                    required: false,
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                    required: false,
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"disableFileSharing",
            "description": "This method disables public/external sharing for a file.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: files:write:user)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "Required: File to revoke.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"enableFileSharing",
            "description": "This method enables public/external sharing for a file.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: files:write:user)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "Required: File to revoke.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"pinItemToChannel",
            "description": "This method pins an item (file, file comment, channel message, or group message) to a particular channel. The channel argument is required and one of file, file_comment, or timestamp must also be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: pins:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel to pin the item in.",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to pin.",
                    required: false,
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to pin.",
                    required: false,
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to pin.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChannelPinnedItems",
            "description": "This method lists the items pinned to a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Requires scope: pins:read",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Required: Channel fetch pins.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"unpinItemFromChannel",
            "description": "This method un-pins an item (file, file comment, channel message, or group message) from a channel. The channel argument is required and one of file, file_comment, or timestamp must also be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: pins:write)",
                    required: true
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to pin the item in.",
                    required: false,
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to un-pin.",
                    required: false,
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to un-pin.",
                    required: false,
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: " Timestamp of the message to un-pin.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"addReaction",
            "description": "This method adds a reaction (emoji) to an item (file, file comment, channel message, group message, or direct message). One of file, file_comment, or the combination of channel and timestamp must be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: pins:write)",
                    required: true
                },
                {
                    name: "name",
                    type: "String",
                    info: "Required: Reaction (emoji) name.",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to add reaction to.",
                    required: false,
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to add reaction to.",
                    required: false,
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel where the message to add reaction to was posted.",
                    required: false,
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to add reaction to.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getReaction",
            "description": "This method returns a list of all reactions for a single item (file, file comment, channel message, group message, or direct message).",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: pins:write)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to get reaction to.",
                    required: false,
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to get reaction to.",
                    required: false,
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel where the message to get reaction to was posted.",
                    required: false,
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to get reaction to.",
                    required: false,
                },
                {
                    name: "full",
                    type: "String",
                    info: "If true always return the complete reaction list.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getReactions",
            "description": "This method returns a list of all items (file, file comment, channel message, group message, or direct message) reacted to by a user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: pins:write)",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Show reactions made by this user. Defaults to the authed user.",
                    required: false,
                },
                {
                    name: "full",
                    type: "String",
                    info: "If true always return the complete reaction list.",
                    required: false,
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                    required: false,
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"removeReaction",
            "description": "This method removes a reaction (emoji) from an item (file, file comment, channel message, group message, or direct message). One of file, file_comment, or the combination of channel and timestamp must be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: pins:write)",
                    required: true
                },
                {
                    name: "name",
                    type: "String",
                    info: "Required: Reaction (emoji) name.",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to remove reaction from.",
                    required: false,
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to remove reaction from.",
                    required: false,
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel where the message to remove reaction from was posted.",
                    required: false,
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to remove reaction from.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"startRealTimeMessaging",
            "description": "This method starts a Real Time Messaging API session. Refer to the RTM API documentation for full details on how to use the RTM API.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: pins:write)",
                    required: true
                },
                {
                    name: "simpleLatest",
                    type: "String",
                    info: "Return timestamp only for latest message object of each channel (improves performance).",
                    required: false,
                },
                {
                    name: "noUnreads",
                    type: "String",
                    info: "Skip unread counts for each channel (improves performance).",
                    required: false,
                },
                {
                    name: "mpimAware",
                    type: "String",
                    info: "Returns MPIMs to the client in the API response.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"searchItem",
            "description": "This method allows users and applications to search both messages and files in a single call.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: pins:write)",
                    required: true
                },
                {
                    name: "query",
                    type: "String",
                    info: "Required: Search query. May contains booleans, etc.",
                    required: true
                },
                {
                    name: "sort",
                    type: "String",
                    info: "Return matches sorted by either score or timestamp.",
                    required: false,
                },
                {
                    name: "sortDir",
                    type: "String",
                    info: "Change sort direction to ascending (asc) or descending (desc).",
                    required: false,
                },
                {
                    name: "highlight",
                    type: "Number",
                    info: "Pass a value of 1 to enable query highlight markers (see below).",
                    required: false,
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                    required: false,
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"addStar",
            "description": "This method adds a star to an item (message, file, file comment, channel, private group, or DM) on behalf of the authenticated user. One of file, file_comment, channel, or the combination of channel and timestamp must be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: starts:write)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to add star to.",
                    required: false,
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to add star to.",
                    required: false,
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to add star to, or channel where the message to add star to was posted (used with timestamp).",
                    required: false,
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to add star to.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getStars",
            "description": "This method lists the items starred by the authed user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: starts:read)",
                    required: true
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                    required: false,
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"removeStar",
            "description": "This method removes a star from an item (message, file, file comment, channel, private group, or DM) on behalf of the authenticated user. One of file, file_comment, channel, or the combination of channel and timestamp must be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: starts:write)",
                    required: true
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to remove star from.",
                    required: false,
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to remove star from.",
                    required: false,
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to remove star to, or channel where the message to remove star to was posted (used with timestamp).",
                    required: false,
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to remove star from.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamInfo",
            "description": "This method provides information about your team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: team:read)",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamProfile",
            "description": "This method is used to get the profile field definitions for this team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users.profile:read)",
                    required: true
                },
                {
                    name: "visibility",
                    type: "String",
                    info: "Filter by visibility. (all)",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getAccessLogs",
            "description": "This method is used to get the access logs for users on a team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: admin).",
                    required: true
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                    required: false,
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createUserGroup",
            "description": "This method is used to create a User Group.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope usergroups:write).",
                    required: true
                },
                {
                    name: "name",
                    type: "String",
                    info: "Required: A name for the User Group. Must be unique among User Groups.",
                    required: true
                },
                {
                    name: "handle",
                    type: "String",
                    info: "A mention handle. Must be unique among channels, users and User Groups.",
                    required: false,
                },
                {
                    name: "description",
                    type: "String",
                    info: "A short description of the User Group.",
                    required: false,
                },
                {
                    name: "channels",
                    type: "String",
                    info: "A comma separated string of encoded channel IDs for which the User Group uses as a default.",
                    required: false,
                },
                {
                    name: "includeCount",
                    type: "String",
                    info: "Include the number of users in each User Group.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"disableUserGroup",
            "description": "This method disables an existing User Group.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: usergroups:write).",
                    required: true
                },
                {
                    name: "usergroup",
                    type: "String",
                    info: "Required: The encoded ID of the User Group to disable.",
                    required: true
                },
                {
                    name: "includeСount",
                    type: "String",
                    info: "Include the number of users in the User Group.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"enableUserGroup",
            "description": "This method enables a User Group which was previously disabled.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: usergroups:write).",
                    required: true
                },
                {
                    name: "usergroup",
                    type: "String",
                    info: "Required: The encoded ID of the User Group to enable.",
                    required: true
                },
                {
                    name: "includeСount",
                    type: "String",
                    info: "Include the number of users in the User Group.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserGroups",
            "description": "This method returns a list of all User Groups in the team. This can optionally include disabled User Groups.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: usergroups:read).",
                    required: true
                },
                {
                    name: "includeDisabled",
                    type: "String",
                    info: "Include disabled User Groups.",
                    required: false,
                },
                {
                    name: "includeСount",
                    type: "String",
                    info: "Include the number of users in each User Group.",
                    required: false,
                },
                {
                    name: "includeUsers",
                    type: "String",
                    info: "Include the list of users for each User Group.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateUserGroup",
            "description": "This method updates the properties of an existing User Group.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: usergroups:write).",
                    required: true
                },
                {
                    name: "usergroup",
                    type: "String",
                    info: "Required: The encoded ID of the User Group to update.",
                    required: true
                },
                {
                    name: "name",
                    type: "String",
                    info: "A name for the User Group. Must be unique among User Groups.",
                    required: false,
                },
                {
                    name: "handle",
                    type: "String",
                    info: "A mention handle. Must be unique among channels, users and User Groups.",
                    required: false,
                },
                {
                    name: "description",
                    type: "String",
                    info: "A short description of the User Group.",
                    required: false,
                },
                {
                    name: "channels",
                    type: "String",
                    info: "A comma separated string of encoded channel IDs for which the User Group uses as a default.",
                    required: false,
                },
                {
                    name: "includeCount",
                    type: "String",
                    info: "Include the number of users in the User Group.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserGroupUsers",
            "description": "This method returns a list of all users within a User Group.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: usergroups:write).",
                    required: true
                },
                {
                    name: "usergroup",
                    type: "String",
                    info: "Required: The encoded ID of the User Group to update.",
                    required: true
                },
                {
                    name: "includeDisabled",
                    type: "String",
                    info: "Include the number of users in the User Group.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateUserGroupUsers",
            "description": "This method updates the list of users that belong to a User Group. This method replaces all users in a User Group with the list of users provided in the users parameter.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: usergroups:write)",
                    required: true
                },
                {
                    name: "usergroup",
                    type: "String",
                    info: "Required: The encoded ID of the User Group to update.",
                    required: true
                },
                {
                    name: "users",
                    type: "String",
                    info: "A comma separated string of encoded user IDs that represent the entire list of users for the User Group.",
                    required: false,
                },
                {
                    name: "includeCount",
                    type: "Number",
                    info: "Include the number of users in the User Group.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserProfile",
            "description": "This method is used to get the profile information for a user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users.profile:read)",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Required: User to retrieve profile info for.",
                    required: true
                },
                {
                    name: "includeLabels",
                    type: "Number",
                    info: "Include labels for each ID in custom profile fields. (0)",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setUserProfile",
            "description": "This method is used to set the profile information for a user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users.profile:write)",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Required: ID of user to change. This argument may only be specified by team admins on paid teams.",
                    required: true
                },
                {
                    name: "profile",
                    type: "JSON",
                    info: "Collection of key:value pairs presented as a URL-encoded JSON hash.",
                    required: false,
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of a single key to set. Usable only if profile is not passed.",
                    required: false,
                },
                {
                    name: "value",
                    type: "String",
                    info: "Value to set a single key to. Usable only if profile is not passed.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteUserProfilePhoto",
            "description": "This method allows the user to delete their profile image. It will clear whatever image is currently set.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users.profile:write)",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserPresence",
            "description": "This method lets you find out information about a user's presence. Consult the presence documentation for more details.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users:read)",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Required: User to get presence info on. Defaults to the authed user.",
                    required: true
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserIdentity",
            "description": "After your Slack app is awarded an identity token through Sign in with Slack, use this method to retrieve a user's identity.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: identity.basic)",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUser",
            "description": "This method returns information about a team member.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users:read)",
                    required: true
                },
                {
                    name: "user",
                    type: "String",
                    info: "Required: User to get presence info on. Defaults to the authed user.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamUsers",
            "description": "This method returns a list of all users in the team. This includes deleted/deactivated users.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users:read)",
                    required: true
                },
                {
                    name: "presence",
                    type: "String",
                    info: "Whether to include presence data in the output.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setUserActive",
            "description": "This method lets the slack messaging server know that the authenticated user is currently active.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users:write)",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setPhoto",
            "description": "This method allows the user to set their profile image. The caller can pass image data via image.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users:write)",
                    required: true
                },
                {
                    name: "image",
                    type: "File",
                    info: "File contents.",
                    required: false,
                },
                {
                    name: "cropX",
                    type: "Number",
                    info: "X coordinate of top-left corner of crop box.",
                    required: false,
                },
                {
                    name: "cropY",
                    type: "Number",
                    info: "Y coordinate of top-left corner of crop box.",
                    required: false,
                },
                {
                    name: "cropW",
                    type: "Number",
                    info: "Width/height of crop box (always square).",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setUserPresence",
            "description": "This method lets you set the calling user's manual presence. Consult the presence documentation for more details.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users:write)",
                    required: true
                },
                {
                    name: "presence",
                    type: "String",
                    info: "Either auto or away.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"markReminderComplete",
            "description": "This method completes a reminder.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users:write)",
                    required: true
                },
                {
                    name: "reminder",
                    type: "String",
                    info: "The ID of the reminder to be marked as complete.",
                    required: false,
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createReminder",
            "description": "This method creates a reminder.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: reminders:write)",
                    required: true
                },
                {
                    name: "text",
                    type: "String",
                    info: "Required: The content of the reminder.",
                    required: true
                },
                {
                    name: "time",
                    type: "String",
                    info: 'Required: When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")',
                },
                {
                    name: "user",
                    type: "String",
                    info: "The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.",
                    required: false,
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteReminder",
            "description": "This method deletes a reminder.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users:write)",
                    required: true
                },
                {
                    name: "reminder",
                    type: "String",
                    info: "Required: The ID of the reminder to delete.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getSingleReminder",
            "description": "This method returns information about a reminder.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users:write)",
                    required: true
                },
                {
                    name: "reminder",
                    type: "String",
                    info: "Required: The ID of the reminder.",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getReminders",
            "description": "This method lists all reminders created by or for a given user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Required: Authentication token (Requires scope: users:read)",
                    required: true
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },]
    })
};

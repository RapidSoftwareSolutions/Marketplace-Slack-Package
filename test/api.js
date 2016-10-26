const assert = require('chai').assert;
const request = require('supertest-as-promised');
const app = require('../index');

const token  = 'xoxp-96414821360-96427649473-96432694049-01cebbe315a2522b8cfa6fbcfdc76359';
    count    = 1, 
    user     = 'U2UAPTYJX',
    name     = 'api_' + new Date(),
    ts       = '1477402291.000004',
    dchannel = 'D2UC7CYKS';

let channel,
    mts,
    file,
    comment,
    reminder;

describe('Slack package', function() {
    /*it('/revokeAuth', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/revokeAuth')
        .send({args: { 
            token, test: 1
        }})
        .expect(200)
        .then((data) => {
            console.log(data.body)
            done();
        });
    });*/

    it('/testAuth', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/testAuth')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            console.log(data.body.callback)
            done();
        });
    });

    it('/getChannels', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getChannels')
        .send({args: { 
            token,
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getChannels', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getChannels')
        .send({args: { 
            token,
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/createChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createChannel')
        .send({args: { 
            token, name
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/archiveChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/archiveChannel')
        .send({args: { 
            token, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getChannelHistory', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getChannelHistory')
        .send({args: { 
            token, channel, count
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getChannelInfo', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getChannelInfo')
        .send({args: { 
            token, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/inviteToChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/inviteToChannel')
        .send({args: { 
            token, channel, user
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/joinChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/joinChannel')
        .send({args: { 
            token, channel, user
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/kickFromChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/kickFromChannel')
        .send({args: { 
            token, channel, user
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/markChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/markChannel')
        .send({args: { 
            token, channel, ts
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/renameChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/renameChannel')
        .send({args: { 
            token, channel, name: name + '_rename'
        }})
        .expect(200)
        .then((data) => {
            console.log(data.body)
            done();
        });
    });

    it('/setChannelPurpose', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/setChannelPurpose')
        .send({args: { 
            token, channel, purpose: 'test'
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/setChannelTopic', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/setChannelTopic')
        .send({args: { 
            token, channel, topic: 'test'
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/unarchiveChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/unarchiveChannel')
        .send({args: { 
            token, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/leaveChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/leaveChannel')
        .send({args: { 
            token, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getPrivateChannels', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getPrivateChannels')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });


    it('/createPrivateChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createPrivateChannel')
        .send({args: { 
            token, name: 'p_' + name
        }})
        .expect(200)
        .then((data) => {
            //channel = JSON.parse(data.body.contextWrites.to)['channel']['id'];
            console.log(data.body.contextWrites.to)
            done();
        });
    });

    it('/getPrivateChannelHistory', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getPrivateChannelHistory')
        .send({args: { 
            token, channel, count
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getPrivateChannelInfo', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getPrivateChannelInfo')
        .send({args: { 
            token, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/inviteToPrivateChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/inviteToPrivateChannel')
        .send({args: { 
            token, channel, user
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/kickFromPrivateChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/kickFromPrivateChannel')
        .send({args: { 
            token, channel, user
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/leavePrivateChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/leavePrivateChannel')
        .send({args: { 
            token, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/markPrivateChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/markPrivateChannel')
        .send({args: { 
            token, channel, ts
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/renamePrivateChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/renamePrivateChannel')
        .send({args: { 
            token, channel, name
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/setPrivateChannelPurpose', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/setPrivateChannelPurpose')
        .send({args: { 
            token, channel, purpose: 'test'
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/setPrivateChannelTopic', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/setPrivateChannelTopic')
        .send({args: { 
            token, channel, topic: 'test'
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/unarchivePrivateChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/unarchivePrivateChannel')
        .send({args: { 
            token, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/openPrivateChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/openPrivateChannel')
        .send({args: { 
            token, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/closePrivateChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/closePrivateChannel')
        .send({args: { 
            token, channel: dchannel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/closeDirectMessageChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/closeDirectMessageChannel')
        .send({args: { 
            token, channel: dchannel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getDirectMessageChannelHistory', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getDirectMessageChannelHistory')
        .send({args: { 
            token, channel: dchannel, count
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getUserImChannels', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUserImChannels')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/markDirectMessageChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/markDirectMessageChannel')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/openDirectMessageChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/openDirectMessageChannel')
        .send({args: { 
            token, channel: dchannel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getAccessToken', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAccessToken')
        .send({args: { 
            
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/closeMultipartyDirectMessageChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/closeMultipartyDirectMessageChannel')
        .send({args: { 
            
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getMultipartyDirectMessageChannelHistory', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getMultipartyDirectMessageChannelHistory')
        .send({args: { 
            
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getMultipartyDirectMessageChannels', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getMultipartyDirectMessageChannels')
        .send({args: { 
            
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/markMultipartyDirectMessageChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/markMultipartyDirectMessageChannel')
        .send({args: { 
            
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/openMultipartyDirectMessageChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/openMultipartyDirectMessageChannel')
        .send({args: { 
            
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/postMessage', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/postMessage')
        .send({args: { 
            token, channel, text: 'test'
        }})
        .expect(200)
        .then((data) => {console.log(data.body.contextWrites.to);
            mts = '';
            done();
        });
    }); 

    it('/sendMeMessage', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/sendMeMessage')
        .send({args: { 
            token, channel, text: 'test'
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });     

    it('/getAccessLogs', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAccessLogs')
        .send({args: { 
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/createUserGroup', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createUserGroup')
        .send({args: { 
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/disableUserGroup', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/disableUserGroup')
        .send({args: { 
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/enableUserGroup', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/enableUserGroup')
        .send({args: { 
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/getUserGroups', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUserGroups')
        .send({args: { 
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/updateUserGroup', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/updateUserGroup')
        .send({args: { 
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });     

    it('/getUserGroupUsers', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUserGroupUsers')
        .send({args: { 
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });     

    it('/getUserGroupUsers', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUserGroupUsers')
        .send({args: { 
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });     

    it('/updateMessage', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/updateMessage')
        .send({args: { 
            token, channel, text: 'test', ts: mts
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/endDoNotDisturb', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/endDoNotDisturb')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/endSnooze', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/endSnooze')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/getDoNotDisturbInfo', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getDoNotDisturbInfo')
        .send({args: { 
            token, user
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/setSnooze', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/setSnooze')
        .send({args: { 
            token, numMinutes: 15
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getTeamUserDoNotDisturbInfo', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getTeamUserDoNotDisturbInfo')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getTeamCustomEmoji', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getTeamCustomEmoji')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/uploadFile', function(done) {
        this.timeout(10000);
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/uploadFile')
        .send({args: { 
            token, file: 'https://i.vimeocdn.com/portrait/58832_300x300', filename: 'test', title: 'test'
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/addFileComment', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/addFileComment')
        .send({args: { 
            token, file, comment: 'test'
        }})
        .expect(200)
        .then((data) => {
            console.log(data.body.contextWrites.to);
            comment = '';
            done();
        });
    }); 

    it('/deleteFileComment', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteFileComment')
        .send({args: { 
            token, file, id: comment
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/updateFileComment', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/updateFileComment')
        .send({args: { 
            token, file, comment: 'test', id: comment
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getFileInfo', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getFileInfo')
        .send({args: { 
            token, file, count
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/deleteFile', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteFile')
        .send({args: { 
            token, file
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/getTeamFiles', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getTeamFiles')
        .send({args: { 
            token, count
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/disableFileSharing', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/disableFileSharing')
        .send({args: { 
            token, file
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/enableFileSharing', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/enableFileSharing')
        .send({args: { 
            token, file
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/pinItemToChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/pinItemToChannel')
        .send({args: { 
            token, channel, timestamp: mts
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    }); 

    it('/getChannelPinnedItems', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getChannelPinnedItems')
        .send({args: { 
            token, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getReactions', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getReactions')
        .send({args: { 
            token, count
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/addReaction', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/addReaction')
        .send({args: { 
            token, name: 'thumbsup', timestamp: ts
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getReaction', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/addReaction')
        .send({args: { 
            token, name: 'thumbsup', timestamp: ts
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/removeReaction', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/removeReaction')
        .send({args: { 
            token, name: 'thumbsup', timestamp: ts
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/unpinItemToChannel', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/unpinItemToChannel')
        .send({args: { 
            token, channel, timestamp: ts
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/deleteFile', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteFile')
        .send({args: { 
            token, file
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/startRealTimeMessaging', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/startRealTimeMessaging')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/searchItem', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/searchItem')
        .send({args: { 
            token, query: 'test', count
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/addStar', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/addStar')
        .send({args: { 
            token, timestamp: mts, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getStarts', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getStarts')
        .send({args: { 
            token, count
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/removeStar', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/removeStar')
        .send({args: { 
            token, timestamp: mts, channel
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getTeamInfo', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getTeamInfo')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getTeamProfile', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getTeamProfile')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getUserProfile', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUserProfile')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/setUserProfile', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/setUserProfile')
        .send({args: { 
            token, name: 'first_name', value: 'Dima'
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/deleteChat', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteChat')
        .send({args: { 
            token, channel, ts: mts
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/deleteUserProfilePhoto', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteUserProfilePhoto')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getUserPresence', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUserPresence')
        .send({args: { 
            token, user
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getUserIdentity', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUserIdentity')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getUser', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUser')
        .send({args: { 
            token, user
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getTeamUsers', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getTeamUsers')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/setPhoto', function(done) {
        this.timeout(10000);
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/setPhoto')
        .send({args: { 
            token, image: 'http://i1.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg'
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/setUserActive', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/setUserActive')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/setUserPresence', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/setUserPresence')
        .send({args: { 
            token, presence: 'auto'
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/createReminder', function(done) {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/createReminder')
        .send({args: { 
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/markReminderComplete', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/markReminderComplete')
        .send({args: { 
            token, presence: 'auto'
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getSingleReminder', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getSingleReminder')
        .send({args: { 
            token, reminder
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/getReminders', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getReminders')
        .send({args: { 
            token
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });

    it('/deleteReminder', function(done) {
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/deleteReminder')
        .send({args: { 
            token, reminder
        }})
        .expect(200)
        .then((data) => {
            done();
        });
    });
})
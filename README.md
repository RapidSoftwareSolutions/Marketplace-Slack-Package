# Slack Package
This block can be used alone or in conjunction with each other to build many different kinds of Slack apps.
* Domain: slack.com
* Credentials: token

## How to get credentials: 
Test oauth token: [https://api.slack.com/docs/oauth-test-tokens](https://api.slack.com/docs/oauth-test-tokens)
Slack oauth docomentation: [https://api.slack.com/docs/oauth](https://api.slack.com/docs/oauth)

## TOC: 
* [revokeAuth](#revokeAuth)
* [testAuth](#testAuth)
* [getBotInfo](#getBotInfo)
* [getChannels](#getChannels)
* [createChannel](#createChannel)
* [archiveChannel](#archiveChannel)
* [getChannelHistory](#getChannelHistory)
* [getChannelInfo](#getChannelInfo)
* [inviteToChannel](#inviteToChannel)
* [joinChannel](#joinChannel)
* [kickFromChannel](#kickFromChannel)
* [leaveChannel](#leaveChannel)
* [markChannel](#markChannel)
* [renameChannel](#renameChannel)
* [setChannelPurpose](#setChannelPurpose)
* [setChannelTopic](#setChannelTopic)
* [unarchiveChannel](#unarchiveChannel)
* [getPrivateChannels](#getPrivateChannels)
* [createPrivateChannel](#createPrivateChannel)
* [archivePrivateChannel](#archivePrivateChannel)
* [getPrivateChannelHistory](#getPrivateChannelHistory)
* [getPrivateChannelInfo](#getPrivateChannelInfo)
* [inviteToPrivateChannel](#inviteToPrivateChannel)
* [kickFromPrivateChannel](#kickFromPrivateChannel)
* [leavePrivateChannel](#leavePrivateChannel)
* [markPrivateChannel](#markPrivateChannel)
* [renamePrivateChannel](#renamePrivateChannel)
* [setPrivateChannelPurpose](#setPrivateChannelPurpose)
* [setPrivateChannelTopic](#setPrivateChannelTopic)
* [unarchivePrivateChannel](#unarchivePrivateChannel)
* [openPrivateChannel](#openPrivateChannel)
* [closePrivateChannel](#closePrivateChannel)
* [closeDirectMessageChannel](#closeDirectMessageChannel)
* [getDirectMessageChannelHistory](#getDirectMessageChannelHistory)
* [getUserImChannels](#getUserImChannels)
* [markDirectMessageChannel](#markDirectMessageChannel)
* [openDirectMessageChannel](#openDirectMessageChannel)
* [getAccessToken](#getAccessToken)
* [closeMultipartyDirectMessageChannel](#closeMultipartyDirectMessageChannel)
* [getMultipartyDirectMessageChannelHistory](#getMultipartyDirectMessageChannelHistory)
* [getMultipartyDirectMessageChannels](#getMultipartyDirectMessageChannels)
* [markMultipartyDirectMessageChannel](#markMultipartyDirectMessageChannel)
* [deleteChat](#deleteChat)
* [openMultipartyDirectMessageChannel](#openMultipartyDirectMessageChannel)
* [sendMeMessage](#sendMeMessage)
* [postMessage](#postMessage)
* [updateMessage](#updateMessage)
* [endDoNotDisturb](#endDoNotDisturb)
* [endSnooze](#endSnooze)
* [getDoNotDisturbInfo](#getDoNotDisturbInfo)
* [setSnooze](#setSnooze)
* [getTeamUserDoNotDisturbInfo](#getTeamUserDoNotDisturbInfo)
* [getTeamCustomEmoji](#getTeamCustomEmoji)
* [addFileComment](#addFileComment)
* [deleteFileComment](#deleteFileComment)
* [updateFileComment](#updateFileComment)
* [deleteFile](#deleteFile)
* [uploadFile](#uploadFile)
* [getFileInfo](#getFileInfo)
* [getTeamFiles](#getTeamFiles)
* [disableFileSharing](#disableFileSharing)
* [disableFileSharing](#disableFileSharing)
* [enableFileSharing](#enableFileSharing)
* [pinItemToChannel](#pinItemToChannel)
* [getChannelPinnedItems](#getChannelPinnedItems)
* [unpinItemFromChannel](#unpinItemFromChannel)
* [addReaction](#addReaction)
* [getReaction](#getReaction)
* [getReactions](#getReactions)
* [removeReaction](#removeReaction)
* [startRealTimeMessaging](#startRealTimeMessaging)
* [searchItem](#searchItem)
* [addStar](#addStar)
* [getStars](#getStars)
* [removeStar](#removeStar)
* [getTeamInfo](#getTeamInfo)
* [getTeamProfile](#getTeamProfile)
* [getAccessLogs](#getAccessLogs)
* [createUserGroup](#createUserGroup)
* [disableUserGroup](#disableUserGroup)
* [enableUserGroup](#enableUserGroup)
* [getUserGroups](#getUserGroups)
* [updateUserGroup](#updateUserGroup)
* [getUserGroupUsers](#getUserGroupUsers)
* [updateUserGroupUsers](#updateUserGroupUsers)
* [getUserProfile](#getUserProfile)
* [setUserProfile](#setUserProfile)
* [deleteUserProfilePhoto](#deleteUserProfilePhoto)
* [getUserPresence](#getUserPresence)
* [getUserIdentity](#getUserIdentity)
* [getUser](#getUser)
* [getTeamUsers](#getTeamUsers)
* [setUserActive](#setUserActive)
* [setPhoto](#setPhoto)
* [setUserPresence](#setUserPresence)
* [markReminderComplete](#markReminderComplete)
* [createReminder](#createReminder)
* [deleteReminder](#deleteReminder)
* [getSingleReminder](#getSingleReminder)
* [getReminders](#getReminders)
 
## Slack.revokeAuth
This method revokes an access token. Use it when you no longer need a token. For example, with a Sign In With Slack app, call this to log a user out.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token
| test | Number     | Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.

## Slack.testAuth
This method checks authentication and tells you who you are.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token

## Slack.getBotInfo
This method returns information about a bot user.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token
| bot  | String     | Bot user to get info on.

## Slack.getChannels
This method returns a list of all channels in the team. This includes channels the caller is in, channels they are not currently in, and archived channels but does not include private channels. The number of (non-deactivated) members in each channel is also returned.

| Field          | Type       | Description
|----------------|------------|----------
| token          | credentials| Authentication token (Requires scope: channels:write)
| excludeArchived| Number     | Don't return archived channels.

## Slack.createChannel
This method is used to create a channel.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: channels:write)
| name | String     | Name of channel to create.

## Slack.archiveChannel
This method archives a channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | Channel to archive.

## Slack.getChannelHistory
This method returns a portion of message events from the specified channel.

| Field    | Type       | Description
|----------|------------|----------
| token    | credentials| Authentication token (Requires scope: channels:write)
| channel  | String     | Channel to fetch.
| latest   | String     | End of time range of messages to include in results.
| oldest   | String     | Start of time range of messages to include in results.
| inclusive| Number     | Include messages with latest or oldest timestamp in results.
| count    | Number     | Number of messages to return, between 1 and 1000.
| unreads  | String     | Include unread_count_display in the output?

## Slack.getChannelInfo
This method returns information about a team channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | Channel to get info on.

## Slack.inviteToChannel
This method is used to invite a user to a channel. The calling user must be a member of the channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | Channel to get info on.
| user   | String     | User to invite to channel.

## Slack.joinChannel
This method is used to join a channel. If the channel does not exist, it is created.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: channels:write)
| name | String     | Name of channel to join.

## Slack.kickFromChannel
This method allows a user to remove another member from a team channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | Channel to remove user from.
| user   | String     | User to remove from channel.

## Slack.leaveChannel
This method is used to leave a channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | Channel to leave.

## Slack.markChannel
This method moves the read cursor in a channel.

| Field    | Type       | Description
|----------|------------|----------
| token    | credentials| Authentication token (Requires scope: channels:write)
| channel  | String     | Channel to set reading cursor in.
| timestamp| String     | Timestamp of the most recently seen message.

## Slack.renameChannel
This method renames a team channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | Channel to set reading cursor in.
| name   | String     | New name for channel.

## Slack.setChannelPurpose
This method is used to change the purpose of a channel. The calling user must be a member of the channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | Channel to set reading cursor in.
| purpose| String     | The new purpose.

## Slack.setChannelTopic
This method is used to change the topic of a channel. The calling user must be a member of the channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | Channel to set reading cursor in.
| topic  | String     | The new topic.

## Slack.unarchiveChannel
This method unarchives a channel. The calling user is added to the channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | Channel to unarchive.

## Slack.getPrivateChannels
This method returns a list of private channels in the team that the caller is in and archived groups that the caller was in. The list of (non-deactivated) members in each private channel is also returned.

| Field          | Type       | Description
|----------------|------------|----------
| token          | credentials| Authentication token (Requires scope: channels:write)
| excludeArchived| Number     | Don't return archived PrivateChannels.

## Slack.createPrivateChannel
This method creates a private channel.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: channels:write)
| name | String     | Name of PrivateChannel to create.

## Slack.archivePrivateChannel
This method archives a channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to archive.

## Slack.getPrivateChannelHistory
This method returns a portion of messages/events from the specified private channel. To read the entire history for a private channel, call the method with no latest or oldest arguments, and then continue paging using the instructions below.

| Field    | Type       | Description
|----------|------------|----------
| token    | credentials| Authentication token (Requires scope: channels:write)
| channel  | String     | Private Channel to fetch.
| latest   | String     | End of time range of messages to include in results.
| oldest   | String     | Start of time range of messages to include in results.
| inclusive| Number     | Include messages with latest or oldest timestamp in results.
| count    | Number     | Number of messages to return, between 1 and 1000.
| unreads  | String     | Include unread_count_display in the output?

## Slack.getPrivateChannelInfo
This method returns information about a private channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to get info on.

## Slack.inviteToPrivateChannel
This method is used to invite a user to a private channel. The calling user must be a member of the private channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to get info on.
| user   | String     | User to invite to PrivateChannel.

## Slack.kickFromPrivateChannel
This method allows a user to remove another member from a private channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to remove user from.
| user   | String     | User to remove from PrivateChannel.

## Slack.leavePrivateChannel
This method is used to leave a channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to leave.

## Slack.markPrivateChannel
This method moves the read cursor in a private channel.

| Field    | Type       | Description
|----------|------------|----------
| token    | credentials| Authentication token (Requires scope: channels:write)
| channel  | String     | PrivateChannel to set reading cursor in.
| timestamp| String     | Timestamp of the most recently seen message.

## Slack.renamePrivateChannel
This method renames a private channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to set reading cursor in.
| name   | String     | New name for PrivateChannel.

## Slack.setPrivateChannelPurpose
This method is used to change the purpose of a private channel. The calling user must be a member of the private channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to set reading cursor in.
| purpose| String     | The new purpose.

## Slack.setPrivateChannelTopic
This method is used to change the topic of a private channel. The calling user must be a member of the private channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to set reading cursor in.
| topic  | String     | The new topic.

## Slack.unarchivePrivateChannel
This method unarchives a private channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to unarchive.

## Slack.openPrivateChannel
This method opens a private channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to open.

## Slack.closePrivateChannel
This method closes a private channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | PrivateChannel to close.

## Slack.closeDirectMessageChannel
This method closes a direct message channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: channels:write)
| channel| String     | Direct Message Channel to close.

## Slack.getDirectMessageChannelHistory
This method returns a portion of messages/events from the specified direct message channel. To read the entire history for a direct message channel, call the method with no latest or oldest arguments, and then continue paging using the instructions below.

| Field    | Type       | Description
|----------|------------|----------
| token    | credentials| Authentication token (Requires scope: im:history)
| channel  | String     | Channel to fetch.
| latest   | String     | End of time range of messages to include in results.
| oldest   | String     | Start of time range of messages to include in results.
| inclusive| Number     | Include messages with latest or oldest timestamp in results.
| count    | Number     | Number of messages to return, between 1 and 1000.
| unreads  | String     | Include unread_count_display in the output?

## Slack.getUserImChannels
This method returns a list of all im channels that the user has.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: im:history)

## Slack.markDirectMessageChannel
This method moves the read cursor in a direct message channel.

| Field    | Type       | Description
|----------|------------|----------
| token    | credentials| Authentication token (Requires scope: im:write)
| channel  | String     | Channel to set reading cursor in.
| timestamp| String     | Timestamp of the most recently seen message.

## Slack.openDirectMessageChannel
This method opens a direct message channel with another member of your Slack team.

| Field   | Type       | Description
|---------|------------|----------
| token   | credentials| Authentication token (Requires scope: im:write)
| user    | String     | User to open a direct message channel with.
| returnIm| String     | Boolean, indicates you want the full IM channel definition in the response.

## Slack.getAccessToken
This method allows you to exchange a temporary OAuth code for an API access token. This is used as part of the OAuth authentication flow.

| Field       | Type  | Description
|-------------|-------|----------
| clientId    | String| Issued when you created your application.
| clientSecret| String| Issued when you created your application.
| code        | String| The code param returned via the OAuth callback.
| redirectUri | String| This must match the originally submitted URI (if one was sent).

## Slack.closeMultipartyDirectMessageChannel
This method closes a multiparty direct message channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: mpim:write)
| channel| String     | Multiparty Direct Message Channel to close.

## Slack.getMultipartyDirectMessageChannelHistory
This method returns a portion of messages/events from the specified multiparty direct message channel. To read the entire history for a multiparty direct message, call the method with no latest or oldest arguments, and then continue paging using the instructions below.

| Field    | Type       | Description
|----------|------------|----------
| token    | credentials| Authentication token (Requires scope: mpim:history)
| channel  | String     | Channel to fetch.
| latest   | String     | End of time range of messages to include in results.
| oldest   | String     | Start of time range of messages to include in results.
| inclusive| Number     | Include messages with latest or oldest timestamp in results.
| count    | Number     | Number of messages to return, between 1 and 1000.
| unreads  | String     | Include unread_count_display in the output?

## Slack.getMultipartyDirectMessageChannels
This method returns a list of all multiparty direct message channels that the user has.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: mpim:write)

## Slack.markMultipartyDirectMessageChannel
This method moves the read cursor in a multiparty direct message channel.

| Field    | Type       | Description
|----------|------------|----------
| token    | credentials| Authentication token (Requires scope: mpim:write)
| channel  | String     | Channel to set reading cursor in.
| timestamp| String     | Timestamp of the most recently seen message.

## Slack.deleteChat
This method deletes a message from a channel.

| Field    | Type       | Description
|----------|------------|----------
| token    | credentials| Authentication token (Requires scope: chat:write:bot or chat:write:user)
| channel  | String     | Channel containing the message to be deleted.
| timestamp| String     | Timestamp of the message to be deleted.
| asUser   | String     | Pass true to delete the message as the authed user. Bot users in this context are considered authed users.

## Slack.openMultipartyDirectMessageChannel
This method opens a multiparty direct message.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: channels:write)
| users| String     | Comma separated lists of users. The ordering of the users is preserved whenever a MPIM group is returned.

## Slack.sendMeMessage
This method sends a me message to a channel from the calling user.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: chat:write:bot or chat:write:user)
| channel| String     | Channel containing the message to be deleted.
| text   | String     | Text of the message to send.

## Slack.postMessage
This method posts a message to a public channel, private channel, or direct message/IM channel.

| Field      | Type       | Description
|------------|------------|----------
| token      | credentials| Authentication token (Requires scope: chat:write:bot or chat:write:user)
| channel    | String     | Channel containing the message to be deleted.
| text       | String     | Text of the message to send.
| parse      | String     | Change how messages are treated.
| linkNames  | String     | Find and link channel names and usernames.
| attachments| JSON       | Structured message attachments.
| unfurlLinks| String     | Pass true to enable unfurling of primarily text-based content.
| unfurlMedia| String     | Pass false to disable unfurling of media content.
| username   | String     | Set your bot's user name. Must be used in conjunction with as_user set to false, otherwise ignored.  See authorship below.
| asUser     | String     | Pass true to post the message as the authed user, instead of as a bot. Defaults to false.
| iconUrl    | String     | URL to an image to use as the icon for this message. Must be used in conjunction with as_user  set to false, otherwise ignored. 
| iconEmoji  | String     | Emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user  set to false, otherwise ignored.

## Slack.updateMessage
This method updates a message in a channel. Though related to chat.postMessage, some parameters of chat.update are handled differently.

| Field      | Type       | Description
|------------|------------|----------
| token      | credentials| Authentication token (Requires scope: chat:write:bot or chat:write:user)
| channel    | String     | Channel containing the message to be deleted.
| timestamp  | String     | Timestamp of the message to be updated.
| text       | String     | Text of the message to send.
| parse      | String     | Change how messages are treated.
| linkNames  | String     | Find and link channel names and usernames.
| attachments| JSON       | Structured message attachments.
| asUser     | String     | Pass true to post the message as the authed user, instead of as a bot. Defaults to false.

## Slack.endDoNotDisturb
Ends the user's currently scheduled Do Not Disturb session immediately.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: dnd:write)

## Slack.endSnooze
Ends the current user's snooze mode immediately.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: dnd:write)

## Slack.getDoNotDisturbInfo
Provides information about a user's current Do Not Disturb settings.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: dnd:write)
| user | String     | User to fetch status for (defaults to current user)

## Slack.setSnooze
Adjusts the snooze duration for a user's Do Not Disturb settings. If a snooze session is not already active for the user, invoking this method will begin one for the specified duration.

| Field     | Type       | Description
|-----------|------------|----------
| token     | credentials| Authentication token (Requires scope: dnd:write)
| numMinutes| Number     | Number of minutes, from now, to snooze until.

## Slack.getTeamUserDoNotDisturbInfo
Provides information about the current Do Not Disturb settings for users of a Slack team.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: dnd:read)
| users| Number     | Comma-separated list of users to fetch Do Not Disturb status for.

## Slack.getTeamCustomEmoji
This method lists the custom emoji for a team.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: emoji:read)

## Slack.addFileComment
Add a comment to an existing file.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: files:write:user)
| file   | String     | File to add a comment to.
| comment| String     | Text of the comment to add.
| channel| String     | Channel id (encoded) of which location to associate with the new comment.

## Slack.deleteFileComment
Delete an existing comment on a file. Only the original author of the comment or a Team Administrator may delete a file comment.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: files:write:user)
| file | String     | File to delete a comment from.
| id   | String     | The comment to delete.

## Slack.updateFileComment
Edit an existing comment on a file. Only the user who created a comment may make edits. Teams may configure a limited time window during which file comment edits are allowed.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: files:write:user)
| file   | String     | File to update a comment from.
| id     | String     | The comment to update.
| comment| String     | Text of the comment to edit.

## Slack.deleteFile
This method deletes a file from your team.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: files:write:user)
| file | String     | ID of file to delete.

## Slack.uploadFile
This method allows you to create or upload an existing file.

| Field         | Type       | Description
|---------------|------------|----------
| token         | credentials| Authentication token (Requires scope: files:write:user)
| file          | String     | File contents via multipart/form-data.
| filetype      | String     | A file type identifier.
| filename      | String     | Filename of file.
| title         | String     | Title of file.
| initialComment| String     | Initial comment to add to file.
| channels      | String     | Comma-separated list of channel names or IDs where the file will be shared.

## Slack.getFileInfo
This method returns information about a file in your team.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: files:read)
| file | String     | Specify a file by providing its ID.
| count| String     | Number of items to return per page.
| page | String     | Page number of results to return.

## Slack.getTeamFiles
This method returns a list of files within the team. It can be filtered and sliced in various ways.

| Field        | Type       | Description
|--------------|------------|----------
| token        | credentials| Authentication token (Requires scope: files:read)
| user         | String     | Filter files created by a single user.
| channel      | String     | Filter files appearing in a specific channel, indicated by its ID.
| timestampFrom| String     | Filter files created after this timestamp (inclusive).
| timestampTo  | String     | Filter files created before this timestamp (inclusive).
| types        | String     | Filter files by type: `all` - All files; `spaces` - Posts; `snippets` - Snippets; `images` - Image files; `gdocs` - Google docs; `zips` - Zip files; `pdfs` - PDF files. You can pass multiple values in the types argument like types=spaces,snippets.The default value is all, which does not filter the list.
| count        | String     | Number of items to return per page.
| page         | String     | Page number of results to return.

## Slack.disableFileSharing
Method description

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: files:write:user)
| file | String     | File to revoke.

## Slack.disableFileSharing
This method disables public/external sharing for a file.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: files:write:user)
| file | String     | File to revoke.

## Slack.enableFileSharing
This method enables public/external sharing for a file.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: files:write:user)
| file | String     | File to revoke.

## Slack.pinItemToChannel
This method pins an item (file, file comment, channel message, or group message) to a particular channel. The channel argument is required and one of file, file_comment, or timestamp must also be specified.

| Field      | Type       | Description
|------------|------------|----------
| token      | credentials| Authentication token (Requires scope: pins:write)
| channel    | String     | Channel to pin the item in.
| file       | String     | File to pin.
| fileComment| String     | File comment to pin.
| timestamp  | String     |  Timestamp of the message to pin.

## Slack.getChannelPinnedItems
This method lists the items pinned to a channel.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Requires scope: pins:read
| channel| String     | Channel fetch pins.

## Slack.unpinItemFromChannel
This method un-pins an item (file, file comment, channel message, or group message) from a channel. The channel argument is required and one of file, file_comment, or timestamp must also be specified.

| Field      | Type       | Description
|------------|------------|----------
| token      | credentials| Authentication token (Requires scope: pins:write)
| channel    | String     | Channel to pin the item in.
| file       | String     | File to un-pin.
| fileComment| String     | File comment to un-pin.
| timestamp  | String     |  Timestamp of the message to un-pin.

## Slack.addReaction
This method adds a reaction (emoji) to an item (file, file comment, channel message, group message, or direct message). One of file, file_comment, or the combination of channel and timestamp must be specified.

| Field      | Type       | Description
|------------|------------|----------
| token      | credentials| Authentication token (Requires scope: pins:write)
| name       | String     | Reaction (emoji) name.
| file       | String     | File to add reaction to.
| fileComment| String     | File comment to add reaction to.
| channel    | String     | Channel where the message to add reaction to was posted.
| timestamp  | String     | Timestamp of the message to add reaction to.

## Slack.getReaction
This method returns a list of all reactions for a single item (file, file comment, channel message, group message, or direct message).

| Field      | Type       | Description
|------------|------------|----------
| token      | credentials| Authentication token (Requires scope: pins:write)
| file       | String     | File to get reaction to.
| fileComment| String     | File comment to get reaction to.
| channel    | String     | Channel where the message to get reaction to was posted.
| timestamp  | String     | Timestamp of the message to get reaction to.
| full       | String     | If true always return the complete reaction list.

## Slack.getReactions
This method returns a list of all items (file, file comment, channel message, group message, or direct message) reacted to by a user.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: pins:write)
| user | String     | Show reactions made by this user. Defaults to the authed user.
| full | String     | If true always return the complete reaction list.
| count| String     | Number of items to return per page.
| page | String     | Page number of results to return.

## Slack.removeReaction
This method removes a reaction (emoji) from an item (file, file comment, channel message, group message, or direct message). One of file, file_comment, or the combination of channel and timestamp must be specified.

| Field      | Type       | Description
|------------|------------|----------
| token      | credentials| Authentication token (Requires scope: pins:write)
| name       | String     | Reaction (emoji) name.
| file       | String     | File to remove reaction from.
| fileComment| String     | File comment to remove reaction from.
| channel    | String     | Channel where the message to remove reaction from was posted.
| timestamp  | String     | Timestamp of the message to remove reaction from.

## Slack.startRealTimeMessaging
This method starts a Real Time Messaging API session. Refer to the RTM API documentation for full details on how to use the RTM API.

| Field       | Type       | Description
|-------------|------------|----------
| token       | credentials| Authentication token (Requires scope: pins:write)
| simpleLatest| String     | Return timestamp only for latest message object of each channel (improves performance).
| noUnreads   | String     | Skip unread counts for each channel (improves performance).
| mpimAware   | String     | Returns MPIMs to the client in the API response.

## Slack.searchItem
This method allows users and applications to search both messages and files in a single call.

| Field    | Type       | Description
|----------|------------|----------
| token    | credentials| Authentication token (Requires scope: pins:write)
| query    | String     | Search query. May contains booleans, etc.
| sort     | String     | Return matches sorted by either score or timestamp.
| sortDir  | String     | Change sort direction to ascending (asc) or descending (desc).
| highlight| Number     | Pass a value of 1 to enable query highlight markers (see below).
| count    | String     | Number of items to return per page.
| page     | String     | Page number of results to return.

## Slack.addStar
This method adds a star to an item (message, file, file comment, channel, private group, or DM) on behalf of the authenticated user. One of file, file_comment, channel, or the combination of channel and timestamp must be specified.

| Field      | Type       | Description
|------------|------------|----------
| token      | credentials| Authentication token (Requires scope: starts:write)
| file       | String     | File to add star to.
| fileComment| String     | File comment to add star to.
| channel    | String     | Channel to add star to, or channel where the message to add star to was posted (used with timestamp).
| timestamp  | String     | Timestamp of the message to add star to.

## Slack.getStars
This method lists the items starred by the authed user.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: starts:read)
| count| String     | Number of items to return per page.
| page | String     | Page number of results to return.

## Slack.removeStar
This method removes a star from an item (message, file, file comment, channel, private group, or DM) on behalf of the authenticated user. One of file, file_comment, channel, or the combination of channel and timestamp must be specified.

| Field      | Type       | Description
|------------|------------|----------
| token      | credentials| Authentication token (Requires scope: starts:write)
| file       | String     | File to remove star from.
| fileComment| String     | File comment to remove star from.
| channel    | String     | Channel to remove star to, or channel where the message to remove star to was posted (used with timestamp).
| timestamp  | String     | Timestamp of the message to remove star from.

## Slack.getTeamInfo
This method provides information about your team.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: team:read)

## Slack.getTeamProfile
This method is used to get the profile field definitions for this team.

| Field     | Type       | Description
|-----------|------------|----------
| token     | credentials| Authentication token (Requires scope: users.profile:read)
| visibility| String     | Filter by visibility. (all)

## Slack.getAccessLogs
This method is used to get the access logs for users on a team.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: admin).
| count| String     | Number of items to return per page.
| page | String     | Page number of results to return.

## Slack.createUserGroup
This method is used to create a User Group.

| Field       | Type       | Description
|-------------|------------|----------
| token       | credentials| Authentication token (Requires scope usergroups:write).
| name        | String     | A name for the User Group. Must be unique among User Groups.
| handle      | String     | A mention handle. Must be unique among channels, users and User Groups.
| description | String     | A short description of the User Group.
| channels    | String     | A comma separated string of encoded channel IDs for which the User Group uses as a default.
| includeCount| String     | Include the number of users in each User Group.

## Slack.disableUserGroup
This method disables an existing User Group.

| Field       | Type       | Description
|-------------|------------|----------
| token       | credentials| Authentication token (Requires scope: usergroups:write).
| usergroup   | String     | The encoded ID of the User Group to disable.
| includeСount| String     | Include the number of users in the User Group.

## Slack.enableUserGroup
This method enables a User Group which was previously disabled.

| Field       | Type       | Description
|-------------|------------|----------
| token       | credentials| Authentication token (Requires scope: usergroups:write).
| usergroup   | String     | The encoded ID of the User Group to enable.
| includeСount| String     | Include the number of users in the User Group.

## Slack.getUserGroups
This method returns a list of all User Groups in the team. This can optionally include disabled User Groups.

| Field          | Type       | Description
|----------------|------------|----------
| token          | credentials| Authentication token (Requires scope: usergroups:read).
| includeDisabled| String     | Include disabled User Groups.
| includeСount   | String     | Include the number of users in each User Group.
| includeUsers   | String     | Include the list of users for each User Group.

## Slack.updateUserGroup
This method updates the properties of an existing User Group.

| Field       | Type       | Description
|-------------|------------|----------
| token       | credentials| Authentication token (Requires scope: usergroups:write).
| usergroup   | String     | The encoded ID of the User Group to update.
| name        | String     | A name for the User Group. Must be unique among User Groups.
| handle      | String     | A mention handle. Must be unique among channels, users and User Groups.
| description | String     | A short description of the User Group.
| channels    | String     | A comma separated string of encoded channel IDs for which the User Group uses as a default.
| includeCount| String     | Include the number of users in the User Group.

## Slack.getUserGroupUsers
This method returns a list of all users within a User Group.

| Field          | Type       | Description
|----------------|------------|----------
| token          | credentials| Authentication token (Requires scope: usergroups:write).
| usergroup      | String     | The encoded ID of the User Group to update.
| includeDisabled| String     | Include the number of users in the User Group.

## Slack.updateUserGroupUsers
This method updates the list of users that belong to a User Group. This method replaces all users in a User Group with the list of users provided in the users parameter.

| Field       | Type       | Description
|-------------|------------|----------
| token       | credentials| Authentication token (Requires scope: usergroups:write)
| usergroup   | String     | The encoded ID of the User Group to update.
| users       | String     | A comma separated string of encoded user IDs that represent the entire list of users for the User Group.
| includeCount| Number     | Include the number of users in the User Group.

## Slack.getUserProfile
This method is used to get the profile information for a user.

| Field        | Type       | Description
|--------------|------------|----------
| token        | credentials| Authentication token (Requires scope: users.profile:read)
| user         | String     | User to retrieve profile info for.
| includeLabels| Number     | Include labels for each ID in custom profile fields. (0)

## Slack.setUserProfile
This method is used to set the profile information for a user.

| Field  | Type       | Description
|--------|------------|----------
| token  | credentials| Authentication token (Requires scope: users.profile:write)
| user   | String     | ID of user to change. This argument may only be specified by team admins on paid teams.
| profile| JSON       | Collection of key:value pairs presented as a URL-encoded JSON hash.
| name   | String     | Name of a single key to set. Usable only if profile is not passed.
| value  | String     | Value to set a single key to. Usable only if profile is not passed.

## Slack.deleteUserProfilePhoto
This method allows the user to delete their profile image. It will clear whatever image is currently set.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: users.profile:write)

## Slack.getUserPresence
This method lets you find out information about a user's presence. Consult the presence documentation for more details.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: users:read)
| user | String     | User to get presence info on. Defaults to the authed user.

## Slack.getUserIdentity
After your Slack app is awarded an identity token through Sign in with Slack, use this method to retrieve a user's identity.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: identity.basic)

## Slack.getUser
This method returns information about a team member.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: users:read)
| user | String     | User to get presence info on. Defaults to the authed user.

## Slack.getTeamUsers
This method returns a list of all users in the team. This includes deleted/deactivated users.

| Field   | Type       | Description
|---------|------------|----------
| token   | credentials| Authentication token (Requires scope: users:read)
| presence| String     | Whether to include presence data in the output.

## Slack.setUserActive
This method lets the slack messaging server know that the authenticated user is currently active.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: users:write)

## Slack.setPhoto
This method allows the user to set their profile image. The caller can pass image data via image.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: users:write)
| image| String     | File contents.
| cropX| Number     | X coordinate of top-left corner of crop box.
| cropY| Number     | Y coordinate of top-left corner of crop box.
| cropW| Number     | Width/height of crop box (always square).

## Slack.setUserPresence
This method lets you set the calling user's manual presence. Consult the presence documentation for more details.

| Field   | Type       | Description
|---------|------------|----------
| token   | credentials| Authentication token (Requires scope: users:write)
| presence| String     | Either auto or away.

## Slack.markReminderComplete
This method completes a reminder.

| Field   | Type       | Description
|---------|------------|----------
| token   | credentials| Authentication token (Requires scope: users:write)
| reminder| String     | The ID of the reminder to be marked as complete.

## Slack.createReminder
This method creates a reminder.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: reminders:write)
| text | String     | The content of the reminder.
| time | String     | When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")
| user | String     | The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.

## Slack.deleteReminder
This method deletes a reminder.

| Field   | Type       | Description
|---------|------------|----------
| token   | credentials| Authentication token (Requires scope: users:write)
| reminder| String     | The ID of the reminder to delete.

## Slack.getSingleReminder
This method returns information about a reminder.

| Field   | Type       | Description
|---------|------------|----------
| token   | credentials| Authentication token (Requires scope: users:write)
| reminder| String     | The ID of the reminder.

## Slack.getReminders
This method lists all reminders created by or for a given user.

| Field| Type       | Description
|------|------------|----------
| token| credentials| Authentication token (Requires scope: users:read)


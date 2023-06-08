# JASB
Just Another Support Bot for Managing and Moderating your Discord Servers.

### Configuration Options
This area contains commands on how to accomplish certain commands, however a full command list can be found closer to the bottom. [Here](#commands).

Any header that has been ~~sikethrough-ed~~ indicates it's not been implemented.
Please be patient in waiting for these features.

Any commands which has the variable '(true/false)' are 'toggleable' where 'true' is on and 'false' is off.
#### Token
The token should be replaced with your bots token, an example on setting up a Discord Bot [here](#application-setup).
The token should look like this once finished. `"TOKEN: "xxxxxxxxxxxxxxxxxxxxxxxx.xxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` or something similar.

***NOTICE*** - Make sure you do **NOT** share your token with *ANYONE*. You're token is, and should be treated like, your discord bot's password. This token allows anyone anywhere in the world to login to your bot and do whatever they'd like and may do something malicious. If you fear your token has been leaked, make sure to change it at:
 https://www.discord.com/developers/applications
#### Staff
The staff array comes preloaded with my UserID allowing me to help debug potential issues you may be having with the bot. However you're free to remove this if you'd like.
Any UserID's added will be able to use the bot within its DMs to respond to any incoming requests.
To obtain a UserID, make sure Developer Mode is on within Discord (User Settings, Advanced, Developer Mode). Once this is done, right clicking any user will give you the "Copy User ID" option, just copy that into the config as demonstrated via the examples given.

You can also add users to staff via `.config users staff add "00000000000"` '00000000000' being the UserID of the staff member you'd like to add.

Removing a Staff Member is done via `.config users staff remove "00000000000"`

To use a "Staff" role, use the command `.config users staff role "00000000000"` '00000000000' being the RoleID of the Role you'd like to use for the Staff, which is obtained similarly as the .
This doesn't remove the UserID Staff, but adds another method of contacting them, this allows you to have whitelisted "Staff".

##### IMPORTANT
Make sure you remove the non-integer-like UserIDs from the Staff List!
#### Server Name
Pretty Self explanatory. Command: `.config server name "Your Server's Name"`
#### Server Color
What your server colors are, can be whatever you'd like, can be anything of type [ColorResolvable](https://old.discordjs.dev/#/docs/discord.js/main/typedef/ColorResolvable)

This Bot supports multiple color slots which can be used however you'd like (See more [here](#Colors))

The command to set the color is: `.config server color <color position> <ColorResolvable>`
This one is a little harder to comprehend, an example of the usage would be: `.config server color 6 #FFFFFF`

#### Blacklist
Any users giving you trouble? Add them to the blacklist! This is done the same way as Staff.

The command to add a user to the blacklist is `.config users blacklist add "00000000000"`.
Removing a user from the backlist is done via `.config users blacklist remove "00000000000"`.

This does not ban the user from the server. It just prevents the user from using the Support Features.
(If the user is in Staff they'll still be able to use the Staff Tools.)

#### Identify Staff
This config option can be toggled via the config, but can also be done via command. `.config users staff indentify (true/false)`
I'm on the fence of removing this option, however since it is an open source bot, and in the name of freedom I have decided not to. However I feel that there is no reason to disable this feature unless you're in a server with users who frequently search for revenge. Besides that reason transparency is huge for a community, there should be no reason certain things should be kept by community owners such as who the user is speaking to for support.

#### Updates Channel
The Updates Channel has content!
Setting up an Updates Channel doesn't force you to receive updates you're community isn't interested in, while still giving other communities the resource they may need.

There are multiple different commands and they're pretty straight forwards.

* **Channel** - Set a channel for the updates to be sent to, can be set via the command `.config server updates channel (channelID/null)`
Setting the channel name here to 'null' will disable the Updates Channel altogether, this will **not** reset any of the update config options set, that can be done with the command:
* **Reset** - Reset the Updates Channel options to their defaults (false) `.config server updates reset`
* **User Joined** - This can be used to monitor users who join the server. `.config server updates join (true/false)`
* **User Left** - This can be used to monitor users who leave the server. `.config server updates left (true/false)`
* **Users Username Changed** - Monitor usernames on your server, can be used to search for inappropriate names. `.config server updates usernames (true, false)`
* **Users PFP Changed** - Monitor Profile Picture Changes on your server, search for inappropriate pfps. `.config server updates pfps (true, false)`
* **Support** - Support Ticket Monitoring is a bit more complex, this has a few elements therein I decided to group them together.
  * **Alert Staff** - If [Roles](#staff) are enabled it will contact the supplied role, otherwise it will contact everyone within the "Staff" Role.
  * **Support Ticket Closed** - Monitor when a support ticket is closed.
  * **Support Ticket Created** - Monitor when a user has created a Support Ticket, can be made to Alert Staff with the above setting.
  * **Support Ticket Closed - Thread** - If "**Support Ticket Closed**" is 'false' this will do nothing. Otherwise it will provide the full thread log to alongside the "Ticket Closed" Log.

#### ~~Embeds~~
Every Embed added will be able to have basic features tweaked.

Embeds can be changed via their [EmbedID](#embed-ids).

Server Name will automatically be updated when changed [here](#server-name).

* **Color** - `.config server embed <EmbedID> <ConfigColorPos>` - [ConfigColorPos](#server-color).
* **Timestamp** - Should embeds show the time? `.config server embed <EmbedID> (true/false)`
* **
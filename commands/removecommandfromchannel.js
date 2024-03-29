const Permissions = require("../permissions.js");
const CommandPermsProcessor = require("../processors/command-perms.js");

exports.getPermissions = () => {
    return { User: Permissions.UserPermissions.BotAdmin, Channel: Permissions.ChannelPermissions.All };
};

exports.run = async (client, message, args) => {  
	if (args === undefined || args.length !== 1) return;

	return CommandPermsProcessor.removeCommandFromChannel(client, message, args[0]);
};
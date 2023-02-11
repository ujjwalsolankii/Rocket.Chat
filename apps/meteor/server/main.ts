import './models/startup';
import '../ee/server/models/startup';
import './services/startup';
import '../app/settings/server';
import '../lib/oauthRedirectUri';
import './overrides/http';
import './lib/logger/startup';
import './importPackages';
import '../imports/startup/server';
import '../app/lib/server/startup';
import '../app/apps/server/startup';

import '../ee/server';
import './lib/pushConfig';
import './startup';
import './configuration/accounts_meld';
import './configuration/ldap';
import './methods/OEmbedCacheCleanup';
import './methods/addAllUserToRoom';
import './methods/addRoomLeader';
import './methods/addRoomModerator';
import './methods/addRoomOwner';
import './methods/afterVerifyEmail';
import './methods/browseChannels';
import './methods/canAccessRoom';
import './methods/channelsList';
import './methods/createDirectMessage';
import './methods/deleteFileMessage';
import './methods/deleteUser';
import './methods/eraseRoom';
import './methods/getAvatarSuggestion';
import './methods/getPasswordPolicy';
import './methods/getRoomById';
import './methods/getRoomIdByNameOrId';
import './methods/getRoomNameById';
import './methods/getSetupWizardParameters';
import './methods/getTotalChannels';
import './methods/getUsersOfRoom';
import './methods/hideRoom';
import './methods/ignoreUser';
import './methods/loadHistory';
import './methods/loadLocale';
import './methods/loadMissedMessages';
import './methods/loadNextMessages';
import './methods/loadSurroundingMessages';
import './methods/logoutCleanUp';
import './methods/messageSearch';
import './methods/muteUserInRoom';
import './methods/openRoom';
import './methods/readMessages';
import './methods/readThreads';
import './methods/registerUser';
import './methods/removeRoomLeader';
import './methods/removeRoomModerator';
import './methods/removeRoomOwner';
import './methods/removeUserFromRoom';
import './methods/reportMessage';
import './methods/requestDataDownload';
import './methods/resetAvatar';
import './methods/roomNameExists';
import './methods/saveUserPreferences';
import './methods/saveUserProfile';
import './methods/sendConfirmationEmail';
import './methods/sendForgotPasswordEmail';
import './methods/setAvatarFromService';
import './methods/setUserActiveStatus';
import './methods/setUserPassword';
import './methods/toogleFavorite';
import './methods/unmuteUserInRoom';
import './methods/userPresence';
import './methods/userSetUtcOffset';
import './publications/messages';
import './publications/room';
import './publications/settings';
import './publications/spotlight';
import './publications/subscription';
import './routes/avatar';
import './routes/health';
import './routes/i18n';
import './routes/timesync';
import './stream/stdout';
import './stream/streamBroadcast';
import './settings/index';

import './features/EmailInbox/index';

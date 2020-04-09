// -- initialize application env, theme, api

import { Iconset } from '@furo/framework/src/furo.js';

import { FuroBaseIcons } from '../assets/iconsets/baseIcons.js';
import { DeviceIcons } from '../assets/iconsets/deviceIcons.js';
import { AvIcons } from '../assets/iconsets/avIcons.js';
import { CommunicationIcons } from '../assets/iconsets/communicationIcons.js';
import { EditorIcons } from '../assets/iconsets/editorIcons.js';
import { SocialIcons } from '../assets/iconsets/socialIcons.js';
import { PlacesIcons } from '../assets/iconsets/placesIcons.js';
import { NotificationIcons } from '../assets/iconsets/notificationIcons.js';
import { MapsIcons } from '../assets/iconsets/mapsIcons.js';
import { HardwareIcons } from '../assets/iconsets/hardwareIcons.js';
import { ImageIcons } from '../assets/iconsets/imageIcons.js';

Iconset.registerIconset('default', FuroBaseIcons);
Iconset.registerIconset('av', AvIcons);
Iconset.registerIconset('com', CommunicationIcons);
Iconset.registerIconset('device', DeviceIcons);
Iconset.registerIconset('editor', EditorIcons);
Iconset.registerIconset('social', SocialIcons);
Iconset.registerIconset('places', PlacesIcons);
Iconset.registerIconset('notify', NotificationIcons);
Iconset.registerIconset('map', MapsIcons);
Iconset.registerIconset('hardware', HardwareIcons);
Iconset.registerIconset('image', ImageIcons);

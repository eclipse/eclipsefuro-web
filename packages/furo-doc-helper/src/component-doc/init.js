// -- Minimal init with icons only

import { Init, Iconset } from '@furo/framework/src/furo.js';

// Attention: Styling is defined in main-stage
import { FuroBaseIcons } from '@furo/icon/assets/iconsets/baseIcons.js';
import { MapsIcons } from '@furo/icon/assets/iconsets/mapsIcons.js';
import { PlacesIcons } from '@furo/icon/assets/iconsets/placesIcons.js';
import { CommunicationIcons } from '@furo/icon/assets/iconsets/communicationIcons.js';
import { NotificationIcons } from '@furo/icon/assets/iconsets/notificationIcons.js';
import { AvIcons } from '@furo/icon/assets/iconsets/avIcons.js';
import { DeviceIcons } from '@furo/icon/assets/iconsets/deviceIcons.js';
import { EditorIcons } from '@furo/icon/assets/iconsets/editorIcons.js';
import { SocialIcons } from '@furo/icon/assets/iconsets/socialIcons.js';
import { HardwareIcons } from '@furo/icon/assets/iconsets/hardwareIcons.js';
import { ImageIcons } from '@furo/icon/assets/iconsets/imageIcons.js';

import './registry.js';

// first import the spec (scr/configs/init.js is a good place)
import spec from '@furo/navigation/specs/navigation/navigationnode.type.spec.js';
import { ExampleCustomIconset } from './iconset.js';
import {Services, Types} from "@furo/specs/build/data_environment.js"
Init.registerApiServices(Services);
Init.registerApiTypes(Types);

// then add / register the type
Init.addApiTypeSpec('navigation.Navigationnode', spec);

// Privat icons
Iconset.registerIconset('default', FuroBaseIcons);
Iconset.registerIconset('av', AvIcons);
Iconset.registerIconset('communication', CommunicationIcons);
Iconset.registerIconset('device', DeviceIcons);
Iconset.registerIconset('editor', EditorIcons);
Iconset.registerIconset('social', SocialIcons);
Iconset.registerIconset('places', PlacesIcons);
Iconset.registerIconset('notification', NotificationIcons);
Iconset.registerIconset('map', MapsIcons);
Iconset.registerIconset('hardware', HardwareIcons);
Iconset.registerIconset('image', ImageIcons);
Iconset.registerIconset('furo', ExampleCustomIconset);

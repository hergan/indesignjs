﻿var _auswahl = app.selection[0];
var _objektStil = app.activeDocument.objectStyles.itemByName("infokasten");
_auswahl.appliedObjectStyle = _objektStil;
var _koordinaten = _auswahl.visibleBounds;
_koordinaten[3] = _koordinaten[1] + 85; //x2
_auswahl.visibleBounds = _koordinaten;
_auswahl.fit (FitOptions.FRAME_TO_CONTENT);
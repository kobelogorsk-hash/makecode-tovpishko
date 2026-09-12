// Автоматически генерируемый код. Не редактируйте.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "уровень0":
            case "уровень2":return tiles.createTilemap(hex`10001000080102080808080808080808080808080801020808080808080808080808080808010208080808080808080808080808080102080e0c0c0c0c0c0c0d150f1008080102080a0303030303030b14141408080102080104050505050402141414100801020801020e0c0c0d010214141414080102080102080808080102141414110801020801020808080801021213110808010209010208080808010208080808080102090102080808080102080808080801020901020808080801020e0c0c0c0801020901020808080801041603030b08010209010208080808060516050507080104030402080808080e0c0c0c0c0d08060505050708080808080808080808`, img`
2 . . 2 . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . 
2 . . 2 2 2 2 2 2 2 2 2 2 . . . 
2 . . 2 . . . . . . . . 2 . . . 
2 . . 2 . . . . . . . . 2 . . . 
2 . . 2 . . 2 2 2 2 . . 2 . . . 
2 . . 2 . . 2 . . 2 . . 2 . . . 
2 . . 2 . . 2 . . 2 . . 2 . . . 
2 . . 2 . . 2 . . 2 . . 2 . . . 
2 . . 2 . . 2 . . 2 . . 2 . . . 
2 . . 2 . . 2 . . 2 . . 2 2 2 2 
2 . . 2 . . 2 . . 2 . . . . . . 
2 . . 2 . . 2 . . 2 . . . . . . 
2 . . . . . 2 . . 2 2 2 2 2 2 2 
2 . . . . . 2 . . 2 . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1,sprites.swamp.swampTile7,sprites.swamp.swampTile8,sprites.swamp.swampTile14,sprites.swamp.swampTile12,sprites.swamp.swampTile13,sprites.swamp.swampTile9,sprites.swamp.swampTile6,myTiles.tile3], TileScale.Sixteen);
            case "уровень1":
            case "уровень1":return tiles.createTilemap(hex`10001000080102080808080808080808080808080801020808080808080808080808080808010208080808080808080808080808080102080d0b0b0b0b0b0b0c150e0f0808010208090303030303030a121212080801020801040505050504021212120f0801020801020d0b0b0c010212121212080102080102080808080102121212100801020801020808080801021411100808010208010208080808010208080808080102080102080808080102080808080801020801020808080801020d0b0b0b0801020801020808080801041303030a08010208010208080808060513050507080104030402080808080d0b0b0b0b0c08060505050708080808080808080808`, img`
2 . . 2 . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . 
2 . . 2 2 2 2 2 2 2 2 2 2 . . . 
2 . . 2 . . . . . . . . 2 . . . 
2 . . 2 . . . . . . . . 2 . . . 
2 . . 2 . . 2 2 2 2 . . 2 . . . 
2 . . 2 . . 2 . . 2 . . 2 . . . 
2 . . 2 . . 2 . . 2 . . 2 . . . 
2 . . 2 . . 2 . . 2 . . 2 . . . 
2 . . 2 . . 2 . . 2 . . 2 . . . 
2 . . 2 . . 2 . . 2 . . 2 2 2 2 
2 . . 2 . . 2 . . 2 . . . . . . 
2 . . 2 . . 2 . . 2 . . . . . . 
2 . . . . . 2 . . 2 2 2 2 2 2 2 
2 . . . . . 2 . . 2 . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1,sprites.swamp.swampTile7,sprites.swamp.swampTile8,sprites.swamp.swampTile14,sprites.swamp.swampTile13,sprites.swamp.swampTile9,myTiles.tile3,sprites.swamp.swampTile12,sprites.swamp.swampTile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Автоматически генерируемый код. Не редактируйте.

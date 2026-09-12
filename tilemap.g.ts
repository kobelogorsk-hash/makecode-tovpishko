// Автоматически генерируемый код. Не редактируйте.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "уровень1":
            case "уровень1":return tiles.createTilemap(hex`10001000080102080808080808080808080808080801020808080808080808080808080808010208080808080808080808080808080102080e0c0c0c0c0c0c0d150f1008080102080a0303030303030b14141408080102080104050505050402141414100801020801020e0c0c0d010214141414080102080102080808080102141414110801020801020808080801021213110808010209010208080808010208080808080102090102080808080102080808080801020901020808080801020e0c0c0c0801020901020808080801040303030308010209010208080808060505050505080104030402080808080e0c0c0c0c0d08060505050708080808080808080808`, img`
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
`, [myTiles.transparency16,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1,sprites.swamp.swampTile7,sprites.swamp.swampTile8,sprites.swamp.swampTile14,sprites.swamp.swampTile12,sprites.swamp.swampTile13,sprites.swamp.swampTile9,sprites.swamp.swampTile6,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Автоматически генерируемый код. Не редактируйте.

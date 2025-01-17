#target photoshop

var exportFolder = Folder.selectDialog("Выберите папку для экспорта");

if (exportFolder == null) {
    alert("Папка не выбрана. Скрипт завершен.");
    exit();
}

function exportLayer(layerIndex, layer, exportFolder) {
    var fileName = exportFolder + "/" + layer.name + ".png";
    var doc = app.activeDocument.duplicate();
    for (var i = 0; i < doc.layers.length; i++) {
        if (i === layerIndex) {
            doc.layers[i].visible = true;
        } else {
            doc.layers[i].visible = false;
        }
    }
    var pngOptions = new PNGSaveOptions();
    doc.saveAs(new File(fileName), pngOptions, true);
    doc.close(SaveOptions.DONOTSAVECHANGES);
}

function main() {
    var doc = app.activeDocument;

    for (var i = 0; i < doc.layers.length; i++) {
        var layer = doc.layers[i];
        exportLayer(i, layer, exportFolder);
    }

    alert("Экспорт завершен!");
}

main();

function onOpen() {
//New var ui stores returned UI components of SpreadSheetApp using getUi() method
//Creates instance of current UI
  const ui = SpreadsheetApp.getUi();
  //New var menu stores the object returned by createMenu() with string param 'Script.'  (create a menu called Script)
  const menu = ui.createMenu('Script');
  //Invoke addItem() inside menu object and pass UI string & id for menu item (Create menu item, first param readable name, second param id_name)
  menu.addItem('Create Release Folder','createReleaseFolder');
  //Execute adding to this instance of UI
  menu.addToUi();
}

//CLASP TEST

//Create Release Folder
function createReleaseFolder() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RDSchedule');
  const rows = sheet.getDataRange().getValues();
  const promoTextTemplate = DriveApp.getFileById('1u_5mK-_fXrLBZMypT4fwYH_o5qpZOlw_LXn8rD44VHw');
  
  rows.forEach(function(row, index) {
  if (index === 0) return;
  if (row[21]) return;
    
  //Make Release Folder
    //Folders
    const rdReleasesFolder = DriveApp.getFolderById("1KWqdn8d-nZCSHjhfeC9rS5RPL3mT-hlP")
    const newFolder = rdReleasesFolder.createFolder(`${row[1]} ${row[2]} - ${row[3]}`,)
    const audioMasters = newFolder.createFolder("Audio Masters")
    //Artwork
    const assets = newFolder.createFolder("Assets")
    const vinylArtworkTemplate = DriveApp.getFileById('1uy10PiXHd-oS3dhbaei2jlLxoKLEuXY3')
    const vinylArtworkCopy = vinylArtworkTemplate.makeCopy(`${row[1]}_VINYL.afdesign`, assets);
    const sleeveArtworkTemplate = DriveApp.getFileById('1v0eDE19J6OdsuSbsKnFC2zzf1ASrOKEa')
    const sleeveArtworkCopy = sleeveArtworkTemplate.makeCopy(`${row[1]}_SLEEVE.afdesign`, assets);
    //Promo Text
    promoTextTemplate.makeCopy(`${row[1]} Promo Text`, newFolder)
    const url = newFolder.getUrl();
    sheet.getRange(index + 1, 22).setValue(url)
    const assetsUrl = assets.getUrl();
    sheet.getRange(index + 1, 26).setValue(assetsUrl)

    rows.forEach(function(row, index) {
    if (index === 0) return;
    if (row[20]) return;
    
    //Label Copy
    const oneTrackTemplate = DriveApp.getFileById('129fRdwHBb08Dr4Ii03OS-BOFsx0IqI1CKZWxq4osZCk');
    const twoTrackTemplate = DriveApp.getFileById('14Ycw9EZDj7dFf519J1hr6HaPm8S-CHgskUe5sQ8q6EA');
    const threeTrackTemplate = DriveApp.getFileById('16qAGDClVgY0hZnZcXzSIpk3W8hwrQQiqy3QV17Ce1MU');
    const fourTrackTemplate = DriveApp.getFileById('14kLEaXRZ8QoHWccB0_Gnh5RG7jwB84js8gu3JdN1dv0');
    
    if (row[29] === 1){     
    const copy = oneTrackTemplate.makeCopy(`${row[1]}`, newFolder)
    const openDoc = DocumentApp.openById(copy.getId())
    const body = openDoc.getBody();   
    body.replaceText('{{Release Artist}}', row[2]);
    body.replaceText('{{Cat No}}', row[1]);
    body.replaceText('{{Mix 1}}', row[4]);
    body.replaceText('{{Mix 1 Duration}}', row[5]);
    body.replaceText('{{Mix 1 ISRC}}', row[6]);
    body.replaceText('{{Written & Produced By}}', row[16]);
    body.replaceText('{{Publisher}}', row[19]);
    body.replaceText('{{Genre}}', row[17]);
    body.replaceText('{{C Year}}', row[18]);
    
    openDoc.saveAndClose();
    const url = copy.getUrl();
    sheet.getRange(index + 1, 21).setValue(url)
    }

    if (row[29] === 2){     
    const copy = twoTrackTemplate.makeCopy(`${row[1]}`, newFolder)
    const openDoc = DocumentApp.openById(copy.getId())
    const body = openDoc.getBody();   
    body.replaceText('{{Release Artist}}', row[2]);
    body.replaceText('{{Cat No}}', row[1]);
    body.replaceText('{{Mix 1}}', row[4]);
    body.replaceText('{{Mix 1 Duration}}', row[5]);
    body.replaceText('{{Mix 1 ISRC}}', row[6]);
    body.replaceText('{{Mix 2}}', row[7]);
    body.replaceText('{{Mix 2 Duration}}', row[8]);
    body.replaceText('{{Mix 2 ISRC}}', row[9]);
    body.replaceText('{{Written & Produced By}}', row[16]);
    body.replaceText('{{Publisher}}', row[19]);
    body.replaceText('{{Genre}}', row[17]);
    body.replaceText('{{C Year}}', row[18]);
    
    openDoc.saveAndClose();
    const url = copy.getUrl();
    sheet.getRange(index + 1, 21).setValue(url)
    }

    if (row[29] === 3){     
    const copy = threeTrackTemplate.makeCopy(`${row[1]}`, newFolder)
    const openDoc = DocumentApp.openById(copy.getId())
    const body = openDoc.getBody();   
    body.replaceText('{{Release Artist}}', row[2]);
    body.replaceText('{{Cat No}}', row[1]);
    body.replaceText('{{Mix 1}}', row[4]);
    body.replaceText('{{Mix 1 Duration}}', row[5]);
    body.replaceText('{{Mix 1 ISRC}}', row[6]);
    body.replaceText('{{Mix 2}}', row[7]);
    body.replaceText('{{Mix 2 Duration}}', row[8]);
    body.replaceText('{{Mix 2 ISRC}}', row[9]);
    body.replaceText('{{Mix 3}}', row[10]);
    body.replaceText('{{Mix 3 Duration}}', row[11]);
    body.replaceText('{{Mix 3 ISRC}}', row[12]);
    body.replaceText('{{Written & Produced By}}', row[16]);
    body.replaceText('{{Publisher}}', row[19]);
    body.replaceText('{{Genre}}', row[17]);
    body.replaceText('{{C Year}}', row[18]);
    
    openDoc.saveAndClose();
    const url = copy.getUrl();
    sheet.getRange(index + 1, 21).setValue(url)
    }

    if (row[29] === 4){     
    const copy = fourTrackTemplate.makeCopy(`${row[1]}`, newFolder)
    const openDoc = DocumentApp.openById(copy.getId())
    const body = openDoc.getBody();   
    body.replaceText('{{Release Artist}}', row[2]);
    body.replaceText('{{Cat No}}', row[1]);
    body.replaceText('{{Mix 1}}', row[4]);
    body.replaceText('{{Mix 1 Duration}}', row[5]);
    body.replaceText('{{Mix 1 ISRC}}', row[6]);
    body.replaceText('{{Mix 2}}', row[7]);
    body.replaceText('{{Mix 2 Duration}}', row[8]);
    body.replaceText('{{Mix 2 ISRC}}', row[9]);
    body.replaceText('{{Mix 3}}', row[10]);
    body.replaceText('{{Mix 3 Duration}}', row[11]);
    body.replaceText('{{Mix 3 ISRC}}', row[12]);
    body.replaceText('{{Mix 4}}', row[13]);
    body.replaceText('{{Mix 4 Duration}}', row[14]);
    body.replaceText('{{Mix 4 ISRC}}', row[15]);
    body.replaceText('{{Written & Produced By}}', row[16]);
    body.replaceText('{{Publisher}}', row[19]);
    body.replaceText('{{Genre}}', row[17]);
    body.replaceText('{{C Year}}', row[18]);
    
    openDoc.saveAndClose();
    const url = copy.getUrl();
    sheet.getRange(index + 1, 21).setValue(url)
    }
    
    })
    })}
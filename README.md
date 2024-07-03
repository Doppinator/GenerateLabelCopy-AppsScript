**Google Apps Script** for reading data from a **Google Sheet** and using it create a set of assets in **Google Drive**.

Written to automate the creation of 'label copy' documentation and release asset folder structures using default artwork templates, to minimise errors & save time when setting up a new release for distribution.

**Reading from Sheets**
The script looks for data within the range of cells in this document:

<img width="1728" alt="Screenshot 2024-07-03 at 14 34 28" src="https://github.com/Doppinator/GenerateLabelCopy-AppsScript/assets/54332156/b428a57b-b035-4635-8cf6-3fb0a72d2cb2">

**Creating Assets**
- Using a foreach() the script looks over each row and stores the contents in the array row[]. This is later used to to identify if the columns 'Label Copy Link' and 'Release Folder' are empty. If null, the rest of the script will execute, starting with the main folder creation in Drive:

<img width="735" alt="Screenshot 2024-07-03 at 14 51 28" src="https://github.com/Doppinator/GenerateLabelCopy-AppsScript/assets/54332156/e1515c12-8b0d-4f58-9613-81048bd3b61f">

The folder name is a concatenation of {1} {2} and {3} as above.

<img width="1076" alt="Screenshot 2024-07-03 at 14 30 45" src="https://github.com/Doppinator/GenerateLabelCopy-AppsScript/assets/54332156/a0904b7d-1380-4958-a116-e555dd80e5f2">
  
- It also creates a new 'label copy' document named {Cat No} inside the Release Folder, and populates it with release information from the sheet in a given format:

 ```{Release Artist} ({Cat No})
  {Mix 1}. {Mix 1 Name} ({Mix 1 Duration})
  [Written and produced by}
  {Publisher}
  {ISRC}
  {Genre}
  {Default Label Copy}
```
  
<img width="1242" alt="Screenshot 2024-07-03 at 14 30 59" src="https://github.com/Doppinator/GenerateLabelCopy-AppsScript/assets/54332156/a4f58585-21e4-4f96-8c7b-739cc67a8b1c">


**Google Apps Script** for reading data from a **Google Sheet** and using it create a set of assets in **Google Drive**.

Written to automate the creation of 'label copy' documentation and release asset folder structures using default artwork templates, to minimise errors & save time when setting up a new release for distribution.

**Reading from Sheets**
The script looks for data within the range of cells in this document:

<img width="1728" alt="Screenshot 2024-07-03 at 14 34 28" src="https://github.com/Doppinator/GenerateLabelCopy-AppsScript/assets/54332156/b428a57b-b035-4635-8cf6-3fb0a72d2cb2">

- If the columns 'Label Copy Link' and 'Release Folder' are empty, the script will execute, and in doing so create both the Release Folder (Named {Cat No} eg RESDEV030 in Drive.
  
- It also creates a new 'label copy' document named {Cat No} inside the Release Folder, and populates it with release information from the sheet in a given format:

 ```{Release Artist} ({Cat No})
  {Mix 1}. {Mix 1 Name} ({Mix 1 Duration})
  [Written and produced by}
  {Publisher}
  {ISRC}
  {Genre}
  {Default Label Copy}
```
  

# SafeArchive1
SA1 - a file archiver and extractor with a password written in node.js

# Usage
First, run this to install SafeArchive1:
```
npm install -g safearchive1
```
Now create a folder, and create a file inside of the folder named SA1_CONTROL. In it, write the files you want to archive like this:
```
index.js
hello.txt
```
Once finished, run this:
```
sa1_archive <file_name>.sa1 <password>
```
A file will appear when generated. That is your generated archive! Now you have to extract it with a password. To extract, run this:
```
sa1_extract <file_name.sa1> <password>
```
Once extracted, there will be a folder of the name of the archive. Click on it and you will see all the original files in it.
You can share the archive with anyone and with a password so it can be kept a secret, but make sure you trust the person with the generated archive to not leak the password, otherwise the purpose of the password is lost!

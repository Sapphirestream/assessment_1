/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = "a program that saves a copy of all the versions of the code semi-automatically. Includes the ability to see previous versions as well as different branches. Compatible with github, a website that lets you then share said code."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = "a website that works with git - uploads git files onto the cloud for storae and sharing"

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

const gitInitDefinition = "git Init starts the git program, and tells it to start taking git commands. Must be done before any other git commands."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

const gitCloneDefinition = "will create a copy of the current git file in a new location"

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

const gitStatusDefinition = "will show the current condition of the git files - including anything that has been changed since the git file was last commited"

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

const gitAddDefinition = "tells the git to pay attention to that particular file. any file added will be commited when you tell it to commit. only needs to be done to a file once"

const gitAddCode = "get add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

const gitCommitDefinition = "Makes a checkpoint for the code, saving all current progress on files added to the git file. Saves the code into the git file. Made with a message to let you know what is being saved"

const gitCommitCode = 'git commit -m "initial commit"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

const gitPushDefinition = "git push pushes the git file to git hub, uploading it onto the website"
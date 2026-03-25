### TypeScript Code
To run 
    - Make sure you are in the proper directory
    - run 'npx ts-node <file name.ts>'

To get ts to work in our environment we had to create a tsconfig.json file
    npx tsc --init
Then we needed to update the compiler options
    "module": "CommonJs",
    "target": "ES2020"



### Git Issues
You made a commit that had files you did not want, but you have not pushed yet
first take back the commit so you only have Staged files
    git reset --soft HEAD~1
Then reset so you unstage all staged files
    git reset
Now create a .gitignore if you are missing one
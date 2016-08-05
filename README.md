This project is created on Cloud9 IDE to generate and run the demo codes of the "Introduction to Node.js" course on Pluransight

Tips:
Loading NPM modules:
    - npm install -g module_name    (g for global so its available from inside and outside of the project)
    
Publish NPM modules:
    - package.json file should be added to the file system
    -fields:
        name
        version
        author
        description
        keywords
        repositoy
        dependencies
            module_name : version
        main
    - "npm publish ." should be executed from the projects root directory

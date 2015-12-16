# syncano-fuse-example

Simple example of integration [Syncano](https://syncano.io/) with [Fuse](https://www.fusetools.com/)

<a href="https://raw.githubusercontent.com/Syncano/syncano-fuse-example/master/example.png" target="_blank"><img src="https://raw.githubusercontent.com/Syncano/syncano-fuse-example/master/example.png" alt="Screenshot" width="250px"></a>

# Setup

* Create account at [Syncano](https://syncano.io/)
* Install [Fuse](https://www.fusetools.com/)
* Clone [syncano-js](https://github.com/Syncano/syncano-js) lib into root catalog:

```
    ├── MainView.js
    ├── MainView.ux
    ├── README.md
    ├── example.png
    ├── syncano-fuse.unoproj
    └── syncano-js
        ├── Gulpfile.js
        ├── README.md
        ├── bower.json
        ├── circle.yml
        ├── dist
        ├── lib
        ├── package.json
        ├── src
        └── test
```

* Edit `MainView.js` and replace `PUT_HERE_YOUR_KEY` with your [Syncano](https://syncano.io/) account key.
* Start [Fuse](https://www.fusetools.com/) via `fuse preview` in root folder

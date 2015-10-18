export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-material');

    aurelia.start().then(a => a.setRoot());
}

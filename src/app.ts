import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  router: Router;

  constructor() {
    console.debug("starting App");
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Title';
    console.debug("Configuring router");
    config.map([
      { route: [''], name: 'home', moduleId: PLATFORM.moduleName("home/home", "app.async.home"), nav: true, title: 'Home' },
      { route: ['test'], name: 'test', moduleId: PLATFORM.moduleName("test/test", "app.async.test"), nav: true, title: 'Test' }
    ]);
  }
}

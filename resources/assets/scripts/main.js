// Polyfills if needed
// require('intersection-observer');

// import external dependencies
import './util/polyfills';
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Detection from './util/Detection';
import Router from './Router';
import common from './routes/common';
import index from './routes/index';
import environment from './routes/environment';
import why from './routes/whyGane';
import corporate from './routes/corporateProfile';
import contact from './routes/contact';
import blog from './routes/blog';
import single from './routes/singlePost';

window._detector = new Detection({
  detect: ['ie11'],
});
window._detector.init();

// /** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // The following class on gets fired when
  // there is a matching `.sample-slider` class in <body>
  'home': index,
  'whyGane': why,
  'environment': environment,
  'corporateProfile': corporate,
  'contact': contact,
  'blog': blog,
  'singlePost': single,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());

[%bs.raw {|require('./styles/index.css')|}];

[@bs.module "./helpers/serviceWorker"]
external register_service_worker : unit => unit = "register";
[@bs.module "./helpers/serviceWorker"]
external unregister_service_worker : unit => unit = "unregister";

ReactDOMRe.renderToElementWithId(
  <App />,
  "root",
);

unregister_service_worker();

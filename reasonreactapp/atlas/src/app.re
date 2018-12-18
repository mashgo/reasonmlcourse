[%bs.raw {|require('./styles/app.css')|}];

type state = {route: string};

let component = ReasonReact.reducerComponent("App");

let make = _children => {
  ...component,
  reducer: (action, state) =>
    switch (action) {
    | "first-component" =>
      ReasonReact.Update({...state, route: "first-component"})
    | "state" => ReasonReact.Update({...state, route: "state"})
    | "lifecycle" => ReasonReact.Update({...state, route: "lifecycle"})
    | "actions" => ReasonReact.Update({...state, route: "actions"})
    | "routes" => ReasonReact.Update({...state, route: "routes"})
    },
  initialState: () => {route: "first-component"},
  didMount: self => {
    let watcherID =
      ReasonReact.Router.watchUrl(url =>
        switch (url.path) {
        | [] => self.send("")
        | ["first-component"] => self.send("first-component")
        | ["state"] => self.send("state")
        | ["lifecycle"] => self.send("lifecycle")
        | ["actions"] => self.send("actions")
        | ["routes"] => self.send("routes")
        | _ => self.send("state")
        }
      );
    self.onUnmount(() => ReasonReact.Router.unwatchUrl(watcherID));
  },
  render: _self =>
    <div className="App">
      <Menu />
      <div>
        {
          Js.log(_self.state.route);
          switch (_self.state.route) {
          | "first-component" =>
            <FirstComponent message="Welcome to Reason React" />
          | "state" => <StateAndProps />
          | "lifecycle" => <Menu />
          | "actions" => <Menu />
          | "routes" => <Menu />
          | _ => <StateAndProps />
          }
        }
      </div>
    </div>,
};
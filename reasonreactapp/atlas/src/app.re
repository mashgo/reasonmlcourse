[%bs.raw {|require('./app.css')|}];

[@bs.module] external logo: string = "./logo.svg";

let component = ReasonReact.statelessComponent("App");

let make = (~message, _children) => {
  ...component,
  render: _self =>
    <div className="App">
      <div className="menu">
        <ul>
          <li>
            <a className="active" href="#component">
              {ReasonReact.string("First Component")}
            </a>
          </li>
          <li>
            <a href="#state"> {ReasonReact.string("State & Props")} </a>
          </li>
          <li>
            <a href="#lifecycle">
              {ReasonReact.string("Component Life Cycle")}
            </a>
          </li>
          <li>
            <a href="#actions"> {ReasonReact.string("Actions & Reducers")} </a>
          </li>
          <li>
            <a href="#routes"> {ReasonReact.string("Routing Mechanism")} </a>
          </li>
        </ul>
      </div>
      <div className="App-header">
        <img src=logo id="slidecaption" alt="logo" />
        <h2> {ReasonReact.string(message)} </h2>
      </div>
    </div>,
};
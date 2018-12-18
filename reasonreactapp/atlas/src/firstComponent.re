
[@bs.module] external logo: string = "./images/logo.svg";

let component = ReasonReact.statelessComponent("FirstComponent");

let make = (~message, _children) => {
  ...component,
  render: _self =>
    <div className="App-header">
      <img src=logo id="slidecaption" alt="logo" />
      <h2> {ReasonReact.string(message)} </h2>
    </div>,
};
let component = ReasonReact.statelessComponent("Menu");
let make = _children => {
  ...component,
  render: _self =>
    <div className="menu">
      <ul>
        <li>
          <Link href="first-component">
            {ReasonReact.string("First Component")}
          </Link>
        </li>
        <li>
          <Link href="state"> {ReasonReact.string("State & Props")} </Link>
        </li>
        <li>
          <Link href="lifecycle">
            {ReasonReact.string("Component Life Cycle")}
          </Link>
        </li>
        <li>
          <Link href="actions">
            {ReasonReact.string("Actions & Reducers")}
          </Link>
        </li>
        <li>
          <Link href="routes">
            {ReasonReact.string("Routing Mechanism")}
          </Link>
        </li>
      </ul>
    </div>,
};
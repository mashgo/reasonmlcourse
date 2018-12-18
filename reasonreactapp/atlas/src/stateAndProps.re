type state = {
  firstName: string,
  lastName: string,
  fullName: string,
};

/* Action declaration */
type action =
  | Change;

let component = ReasonReact.reducerComponent("StateAndProps");

let make = _children => {
  ...component,
  initialState: () => {firstName: "", lastName: "", fullName: ""},
  reducer: (action, state) =>
    switch (action) {
    | Change =>
      ReasonReact.Update({
        ...state,
        fullName: state.firstName,
      })
    },
  render: _self =>
    <header className="App-header">
      <div className="container">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              {ReasonReact.string("First and last name")}
            </span>
          </div>
          <input
            type_="text"
            className="form-control"
            name="firstName"
            onChange={_event => _self.send(Change)}
            value={_self.state.firstName}
          />
          <input
            type_="text"
            className="form-control"
            name="lastName"
            onChange={_event => _self.send(Change)}
            value={_self.state.lastName}
          />
        </div>
        <div className="input-group">
          <p className="center">
            {ReasonReact.string(_self.state.fullName)}
          </p>
        </div>
      </div>
    </header>,
};
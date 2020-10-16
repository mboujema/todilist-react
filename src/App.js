import React from 'react';
import Liste from "./Liste";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      inputEdit: "",
      value: [],
      showMe : true,
    }
  }
  handleChange(e) {
    this.setState({ input: e.target.value })
  }
  handleChangeEdit(e) {

    this.setState({ inputEdit: e.target.value })
  }

  enter = (e) => {
    if (e.key === "Enter") {
      let a = this.state;

      let objet = {
        valeur: a.input,
        validate: false,
        edit: false,
      }
      a.value.push(objet);
      a.input = "";
      this.setState(a);
      console.log(a.input);
      return
    }
  }
  ajouter = () => {
    let b = this.state;

    let objet = {
      valeur: b.input,
      validate: false,
      edit: false,
    }
    b.value.push(objet);
    b.input = "";
    this.setState(b);
    console.log(b.input);
  }

  valider = (i) => {
    let d = this.state;
    if (d.value[i].validate === true) {
      d.value[i].validate = false;
    } else {
      d.value[i].validate = true;

    }
    this.setState(d)
  }

  edit = (i) => {
    let c = this.state;
    if (c.value[i].edit === true) {
      
      c.value[i].edit = false;
      c.value[i].valeur = c.inputEdit
      c.inputEdit = ""
      

    } else {
      c.value[i].edit = true;

    }

    this.setState(c)
    console.log("test");

  }

  remove = (i) => {
    let e = this.state;
    e.value.splice(i, 1);
    this.setState(e)
  }

  hidden = () => {

  }
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>TODO LIST</h1>
          <input type="text" className="w-75" value={this.state.input} onChange={e => this.handleChange(e)} onKeyPress={this.enter} />
          <button className="w-25 bg-primary" onClick={() => this.ajouter()}>ajouter !</button>

          <div className = "m-3">
            <button className ="btn btn-outline-secondary m-1">Toute</button>
            <button className = "btn btn-outline-success m-1">Completée</button>
            <button className = "btn btn-outline-danger m-1">A faire</button>
          </div>

          <ul>
            {
              this.state.value.map((e, i) => {
                if (e.edit === false) {
                  return (
                    <Liste key={i} value={e.valeur} validate={e.validate} valider={() => this.valider(i)} ajouter={() => this.ajouter()} edit={() => this.edit(i)} remove={() => this.remove(i)}/>

                  )

                } else {
                  return (
                    <li key={i}>
                      <input value={this.state.inputEdit} onChange={e => this.handleChangeEdit(e)} type="text" className="w-75" />
                      <button onClick={() => this.edit(i)} className="w-25"><i className="fas fa-check"></i></button>
                    </li>
                  )
                }
              })
            }

          </ul>

        </div>
      </div>
    )
  }
}
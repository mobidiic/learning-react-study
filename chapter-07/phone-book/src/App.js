import React, {Component} from 'react'
import PhoneForm from './components/PhoneForm'

class App extends Component{
  id=2
  state={
    information: [
      {
        id:0,
        name: "park kk",
        phone: "010-2000-0000"
      },
      {
        id:1,
        name: "lee dd",
        phone: '010-2000-3000'
      }
    ],
    keyword: ''
  }

  handleChange= (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleCreate= (data) =>{
    const {information} = this.state
    this.setState({
      information: information.concat({
        id: this.id++,
        ...data
      })
    })
  }

  handleRemove = (id) => {
    const {information} = this.state
    this.setState({
      information: information.filter(
        info => info.id !== id
      )
    })
  }

  handleUpdate = (id, data) => {
    const {information} = this.state
    this.setState({
      information: information.map(
        info=> id===info.id ? {...info, ...data} : info
      )
    })
  }

  render(){
    const {information, keyword} =this.state
    const filteredList = information.filter(info => info.name.indexof(keyword)!==-1)
    return ( <div>
                <PhoneForm
                    onCreate={this.handleCreate} />
                <p>
                  <input
                      placeholder="input name what you want to search"
                      onChange={this.handleChange}
                      value={keyword}
                  />
                </p>
                <PhoneInfoList
                    data={this.state.information}
                    onRemove = {this.handleRemove}
                    onUpdate = {this.handleUpdate}/>
            </div>
          )
  }

export default App

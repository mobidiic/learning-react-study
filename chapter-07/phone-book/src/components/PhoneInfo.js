import React, {Component} from 'react'

class PhoneInfo extends Component {
  static defaultProps = {
    info:{
      name: 'name',
      phone: '010-0000-0000',
      id:0
    }
  }

  state={
    editing: false,
    name: '',
    phone: ''
  }//수정일때 true로 해서 텍스트를 인풋형태로 바꿈

  handleRemove=()=>{
    const {info, onRemove} = this.props
    onRemove(info, id)
  }

  handleToggleEdit= () => {
    const {editing} = this.state
    this.setState({editing : !editing})
  }

//onChange 시 호출되는 함수
  handleChange= (e) =>{
    const {name, value} = e.target
    this.setState({
      [name] : value
    })
  }

  componentDidUpdate(prevProps,prevState){
    //editing 이 바뀔때 처리하는 로직
    const {info, onUpdate} = this.props
    if(!prevState.editing && this.state.editing){ // 이전께 false이고 바뀔게 true일떄
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }

    if(prevState.editing && !this.state.editing){
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      })
    }
  }

  shouldComponentUpadate(nextProps, nextState){
    if(!this.state.editing && !nextState.editing && nextProps.info===this.props.info){
      return false //수정이 아니고, info값이 같으면 리렌더링 안함
    } return true
  }

  render(){
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    }

    const {editing} = this.state

    const {name, phone} = this.props.info

    if(editing){
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="name"
              onChange={this.handleChange} />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="phone number"
              onChange={this.handleChange} />
          </div>
          <button onClick={this.handleToggleEdit}> apply </button>
          <button onClick={this.handleRemove}> Delete </button>
      )
    } // 수정모드일때

    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleUpdate}> edit </button>
        <button onClick={this.handleRemove}> Delete </button>
      <div>
    )
  }
}


export default PhoneInfo

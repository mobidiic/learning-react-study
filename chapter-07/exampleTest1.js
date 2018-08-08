import {Component} from React
import {render} from ReactDOM

class Counter extends Component {
  constructor(props){
    super(props)  //컴포넌트 상속. 생성자초기화 과정
    this.state = {
      number: 0,
      foo: {foobar : 2}
    }
  }// 컴포넌트가 새로 만들어질때마다 이 함수 호출


  handleIncrease = ()=>{
    this.setState({
      number : this.state.number + 1
    });
  }

  handleDecrease = ()=>{
    this.setState({
      number: this.state.number -1
    });
  }

  //메소드 작성시
  // handleIncrease(){
  //   this.setState({
  //     number : this.state.number +1
  //   })
  // }
  //
  // handleDecrease(){
  //   this.setState({
  //     number: this.state.number -1
  //   })
  // }
  // 이 방식을 쓰게 되면 this가 바인딩이 되지 않는다.
  // constructor(props){
  //   super(props)
  //   this.handleIncrease= this.handleIncrease.bind(this)
  //   this.handleDecrease= this.handleDecrease.bind(this)
  // }
  // 이 처리를 해줘야 함!

  this.setState({
    number: 0,
    foo: {
      ...this.state.foo,
      foobar: 2
    }
  })

  this.setState(
    ({number}) => ({number: number+1})
  )

  const {number} = this.state
  this.setState({number : number +1})

  render(){
    return (
      <div>
        <h1>Counter</h1>
        <div> value : {this.state.number}</div>
        <button onClick={this.handleIncrease}> + </button>
        <button onClick={this.handleDecrease}> - </button>
      </div
    )
  }
}

export default Counter




//#2

//componentWillMount 또는 WillReceiveProps 는 지금 안쓴다. UNSAFE_ 프리픽스를 붙임.
componentDidMount(){
  //외부 라이브러리 연동, 필요한 데이터 요청, DOM작업 등등을 한다.
}

static gerDerivedStateFromProps(nextProps, prevState){
  // if(nextProps.value !== prevState.value){
  //   return {value: nextProps.value}
  // }return null 이 함수는 props으로 받아온 값을 state로 넣을때 쓴다.
  //위 코드는 변하는 값이 있을 때 state 바꿔주는 코드
}

shouldComponentUpdate(nextProps, nextState){
  //return false시에는 업데이트를 안함
  //return this.props.checked !== nextProps.checked
  return true //이게 기본값
}


getSnapshotBeforeUpdate(prevProps, prevState){
  //렌더링 후, DOM변화 전에 이 함수 호출
  if (prevState.array !== this.state.array){
    const {scrollTop, scrollHeight} = this.list //크롬의 경우 이미 구현된 기능이라 처리하는것
  }
  return {scrollTop, scrollHeight}
}

componentDidUpdate(prevProps, prevState, snapshot){
  if(snapshot){//위에서 리턴한 값
    const {scrollTop} = this.MemberList
    if(scrollTop !== snapshot.scrollTop) return //이미 구현되어있으면 끝
    const diff = this.list.scrollHeight - snapshot.scrollHeight
    this.list.scrollTop += diff
  }
}
// componentDidUpdate 에서는 이미 업데이트 된 후라 this.state, this.props의 값이 바껴있다. (최근값)
// snapshot 과 prevProps, prevState 등은 인수를 통해 이전값을 조회할 수 있다.


//#3

componentDidCatch(error, info){
  this.setState({
    error : true
  })
}

const Problematic = ()=> {
  throw (new Error('Bug'))
  return (
    <div>

    </div>
  )
}

class Counter extends Component {
  //...생략

  render(){
    if (this.state.error) return (<h1> Error발생 </h1>) //에러시 이걸 리턴함
    return (
      <div>
        <h1> Counter </h1>
        <div> Value : {this.state.number} </div>
        // {this.state.number === 4 && <Problematic/>}
        <button onClick={this.handleIncrease}> + </button>
        <button onClick={this.handleDecrease}> - </button>
      </div>
    )
  }
}

export default Counter

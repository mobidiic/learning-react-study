//내포된 컴포넌트
<ingredientslist>
  <ingredient />
  <ingredient />
  <ingredient />
</ingredientslist>


//className
<h1 className="fancy">Backed Salmon</h1>


//중괄호 안의 자바스크립트 => 결과값 반환
<h1>{this.props.title}</h1>
<input type="checkbox" defaultChecked={false}/>

<h1> {"hello"+this.props.title} </h1>

<h1> {this.props.title.toLowerCase().replace} </h1>

function appendtitle({this.props.title}){
  console.log(`${this.props.title} is great!`)
}


//배열 맵핑
<ul>
  {this.props.ingredients.map((ingredient, i ) =>
    <li key ={i}>{ingredient}</li>
  )}
</ul>

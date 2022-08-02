//Counter 첫 글자 대문자 : 컴포넌트라서 대문자를 쓴다. react는 함수를 대문자로 쓴다. 
//소문자이면 DOM으로 오해한다. -> virtual DOM 가상 DOM. 돔이 아니기 때문에 대문자로 써야 한다.
import React, {useState} from 'react';  // usestate를 썼다는 것은 hook을 쓰겠다는것

//함수 방식이 아닌 클래스 방식이라면 -> class Counter extend React
const Counter = () => {
    const [value, setValue] = useState(0)  //usestate의 초기값
    return(
        <div>
            <p>
                현재 카운터의 값은<b>{value}</b>   
            </p>
            <button onClick={()=> setValue(value+1)}>+1</button>
            <button onClick={()=> setValue(value-1)}>-1</button>
        </div>
    );
};

export default Counter
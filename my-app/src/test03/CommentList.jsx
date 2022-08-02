import React from "react";
import Comment from "./Comment";    //Comment 부르기
const comments = [
    {   //JSON 타입 : 키 / 값
        name : "문희인",
        comment : "안녕하세요~",
    },
    {
        name : "tjdgml",
        comment : "반가워요~"
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;
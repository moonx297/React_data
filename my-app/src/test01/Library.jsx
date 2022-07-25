import React from "react";
import Book from "./_Book";

function Library(pros){
    return(
        <div>
            <Book name = "처음 만난 자바" numOfPage={300}></Book>
            <Book name = "처음 만난 AWS" numOfPage={400}></Book>
            <Book name = "처음 만난 리액트" numOfPage={500}></Book>
        </div>
    );
}

export default Library;
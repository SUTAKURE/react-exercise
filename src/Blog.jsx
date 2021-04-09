import React from "react";
import Article from "./Article"

const Blog = (props) => {
    return (
        <div>
            <Article title={"Reactの使い方"} order={1}/>
            <Article title={"JSXの使い方"} order={2}/>
            <Article title={"環境構築をしてみよう"} order={3}/>
        </div>
    )
}

export default Blog

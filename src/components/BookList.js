import React from "react"; //newer syntax of require
import styled from "styled-components";

const List = styled.ul`
    padding: 0;
    list-style-type: none;
`
//item either has active equals true or active equals false
//conditional solid colors based on whether or not it's active
//don't need a separate css styling sheet for different components
const Item = styled.li`
    img {
        border: ${props => props.active ? "3px solid coral" : "1px solid gray"}; 
        width: 200px;
        margin-bottom: 15px;
        cursor: pointer;
        border-radius: 5px;

        :hover {
            border-color: limegreen;
        }
    }
`

export const BookList = (props) => {
    return (
        <List>
            {props.children} 
        </List>
    )
};
//have to wrap an anonymous function around a function that needs a value inside it. If you are just referencing it then you don't need to
export const BookListItem = ({ book, selectedBook, selectBook }) => {
    return (
        <Item active={book === selectedBook} onClick={() => selectBook(book)}> /
            <img src={book.snippet.thumbnails.medium.url} />
        </Item>
    )
};
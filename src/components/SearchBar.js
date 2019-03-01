import React, { Component } from "react"; //newer syntax of require
import { Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

const ClearBtn = styled.span`
    color: gray;
    font-weight: 900;
    font-size: 24px;
    position: absolute;
    top: 0;
    right: 10;
    cursor: pointer;

    :hover {
        color: purple;
    }
`
const StyledFormGroup = styled(FormGroup)`
    position: relative;
`

class SearchBar extends Component {
    state = {
        search: ""
    }

    handleInputChange = (event) => {
        const { value } = event.target;
        //console.log(value); prints exactly what keys are typed 
        this.setState({ search: value });
        this.props.searchYouTube(value);
    }

    render() {
        return (
            <Form onSubmit={(event) => event.preventDefault()}> 
                <StyledFormGroup>
                    <Label for="search" hidden>Search</Label>
                    <Input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="What would you like to search for?" 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                    />
                    <ClearBtn onClick={() => this.setState({ search: "" })}> X </ClearBtn>
                </StyledFormGroup>
            </Form>
        )
    }
};

export default SearchBar;
import React from 'react'
import {FormControl, FormGroup, Button} from 'react-bootstrap'


const Search = (props) => {
    return (
        <div>
            <FormGroup> 
                <FormControl 
                    type="text" 
                    placeholder="Search"
                    onChange={props.searchForTile} 
                    value={props.title}
                />
            </FormGroup>
            <Button value='Images' onClick={props.handleApiChoiceChange}>Images</Button>
            <Button value='Films' onClick={props.handleApiChoiceChange}>Films</Button>
            <br />
            { 
                props.shortlist().map(type => {
                    return <Button key={type} onClick={props.handleQuickSearch} value={type}>{type}</Button>
                })  
            }
        </div>
    )
}

export default Search
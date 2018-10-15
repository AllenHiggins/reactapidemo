import React from 'react'
import {
    FormControl, 
    FormGroup, 
    Button, 
    ButtonToolbar, 
    ToggleButtonGroup, 
    ToggleButton
} from 'react-bootstrap'

import './search.css'

const Search = (props) => {
    
    const {
        searchForTile,
        title,
        handleApiChoiceChange,
        handleQuickSearch,
        shortlist
    } = props

    return (
        <div className="search">
            <FormGroup> 
                <FormControl 
                    type="text" 
                    placeholder="Search"
                    onChange={searchForTile} 
                    value={title} 
                    style={{marginTop: 20}}/></FormGroup>

            <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue='Images'>
                <ToggleButton 
                    className="search-api-endpoint" 
                    onClick={handleApiChoiceChange} 
                    value='Images'>Images</ToggleButton>
                <ToggleButton  
                    className="search-api-endpoint" 
                    onClick={handleApiChoiceChange} 
                    value='Films'>Films</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
            <br />
            { 
                shortlist.map(type => {
                    return <Button 
                                className='search-quickPick' 
                                key={type} 
                                onClick={handleQuickSearch} 
                                value={type}>{type}</Button>
                })  
            }
        </div>
    )
}

export default Search
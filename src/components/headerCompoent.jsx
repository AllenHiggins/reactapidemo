import React, {Component} from 'react'

import { connect } from 'react-redux'
import {setSearchTitle, setApiEndPiont} from '../actions/searchActions'

import {Navbar, Grid, Row, Col} from 'react-bootstrap'
import Search from '../containers/search'

class Header extends Component {

    searchForTile = (event) => {
        let userTitle = event.target.value
        this.props.setSearchTitle(userTitle)
     
        // pass to API
        
    }

    whichList = () => {
        if(this.props.searchBar.apiEndPoint === 'Images'){
            return this.props.searchBar.imageTypes
        }else{
            return this.props.searchBar.filmTypes
        }
    }

    handleApiChoiceChange = (event) => {
        let choice = event.target.value
        this.props.setApiEndPiont(choice)
        this.props.setSearchTitle('')
    }

    handleQuickSearch = (event) => {
        this.searchForTile(event)
    }

    render() {
        return (
            <Grid fluid> 
                <Row>
                    <Navbar>
                        <Navbar.Header>
                            <Col xs={12} sm={4}>
                                <Navbar.Brand>
                                    {this.props.searchBar.apiEndPoint} Search
                                </Navbar.Brand>
                            </Col>
                        </Navbar.Header>
                            <Col xs={8}>
                                <Search 
                                    searchForTile={this.searchForTile}
                                    handleApiChoiceChange={this.handleApiChoiceChange}
                                    endPiont={this.props.searchBar.apiEndPoint}
                                    handleQuickSearch={this.handleQuickSearch}
                                    shortlist={this.whichList}
                                    title={this.props.searchBar.title}
                                    
                                />
                            </Col>
                    </Navbar>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        searchBar: state.searchReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setSearchTitle: (title) => {
            dispatch(setSearchTitle(title))
        },
        setApiEndPiont: (choice) => {
            dispatch(setApiEndPiont(choice))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
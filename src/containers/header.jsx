import React, {Component} from 'react'

import { connect } from 'react-redux'
import {
    setSearchTitle, 
    setApiEndPiont,  
    searchGetImagesList,
    searchSetImagesList
}from '../actions/searchActions'

import {Navbar, Grid, Row, Col} from 'react-bootstrap'
import Search from '../components/search'
import ImageList from './imageComponent/imageList'

class Header extends Component {


    searchForTile = (event) => {
        let userTitle = event.target.value
        console.log(userTitle)
        if(userTitle === ''){
            this.props.searchSetImagesList([])
            this.props.setSearchTitle('')
         }else{
            this.props.setSearchTitle(userTitle)
            this.props.searchGetImagesList(userTitle)
        }
    }

    whichList = (endpiont) => {
        if(endpiont === 'Images'){
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

        const {apiEndPoint,title, images} = this.props.searchBar
        const list = this.whichList(this.props.searchBar.apiEndPoint)

        return (
            <Grid fluid> 
                <Row>
                    <Navbar>
                        <Navbar.Header>
                            <Col xs={12}>
                                <Navbar.Brand>
                                    <span style={{color: 'red'}}>{apiEndPoint}</span> Search
                                </Navbar.Brand>
                            </Col>
                        </Navbar.Header>
                            <Col xs={12}>
                                <Search 
                                    searchForTile={this.searchForTile}
                                    handleApiChoiceChange={this.handleApiChoiceChange}
                                    endPiont={apiEndPoint}
                                    handleQuickSearch={this.handleQuickSearch}
                                    shortlist={list}
                                    title={title}/>
                            </Col>
                    </Navbar>
                </Row>
                <Row>
                    {apiEndPoint === 'Images' ? <ImageList images={images}/>: null}
                    
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
        },
        searchGetImagesList: (userInput) => {
            dispatch(searchGetImagesList(userInput))
          },
        searchSetImagesList: (val) => {
            dispatch(searchSetImagesList(val))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
import React, {Component} from 'react'

import { connect } from 'react-redux'
import {
    setSearchTitle, 
    setApiEndPiont,  
    searchGetImagesList,
    filmGetListByTitle
}from '../../actions/searchActions'

import {Navbar, Grid, Row, Col} from 'react-bootstrap'
import Search from '../../components/searchComponent/search'
import ImageList from '../../components/imageComponent/imageList'
import Films from '../../components/filmComponent/films'

class Header extends Component {


    searchForTile = (event) => {
        
        let userTitle = event.target.value
       
        this.props.setSearchTitle(userTitle)
        
        //API Call
        if(this.props.searchBar.apiEndPoint === 'Images'){
            this.props.searchGetImagesList(userTitle)
        }else{
            this.props.searchFilmList(userTitle)
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

        const {apiEndPoint,title,images,films} = this.props.searchBar
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
                                    handleQuickSearch={this.handleQuickSearch}
                                    shortlist={list}
                                    title={title}/>
                            </Col>
                    </Navbar>
                </Row>
                <Row>
                    {
                        apiEndPoint === 'Images' 
                        ? 
                            <ImageList images={images}/>
                        : 
                            <Films
                                filmTitle={title}
                                filmlist={films}/>
                    }       
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
        searchGetImagesList: (title) => {
            dispatch(searchGetImagesList(title))
          },
        searchFilmList: (title) => {
            dispatch(filmGetListByTitle(title))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
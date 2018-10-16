import React from 'react'
import {Col} from 'react-bootstrap'
import './imageList.css'

const ImageList = (props) => {
    return (
        <div>
            {props.images.map(img => (
                <Col sx={12} key={img.id}>
                    <div className='imagelist'>
                        <h3>{img.tags}</h3>
                        <span>
                            by: <strong>{img.user}</strong>
                        </span>
                        <img src={img.largeImageURL} alt={img.user} style={{width: '100%', hieght: '100%'}}/>
                    </div>
                    <hr />
                </Col>
            ))}
        </div>
    )
}
  
export default ImageList;

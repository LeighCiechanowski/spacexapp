import React from 'react';
import Masonry from 'react-masonry-component';

var masonryOptions = {
    transitionDuration: 0
};

export default class MasonryTest extends React.Component {
 render(){
        return(<div>
            <h1>wtf</h1>
        <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                 <li className="image-element-class">
                   <span>ahhh</span>
                </li>
                <li className="image-element-class">
                   <span>ahhh</span>
                </li>
                <li className="image-element-class">
                   <span>ahhh</span>
                </li>
                <li className="image-element-class">
                   <span>ahhh</span>
                </li>
            </Masonry>
            </div>
            );
    }
}
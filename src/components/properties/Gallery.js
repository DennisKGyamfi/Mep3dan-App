import React from 'react';
import Properties from './PropertiesCard';
import './properties.css';



const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='galleryHeaderSection'>
                <h2 className='galleryHeader'>Find Properties In Your City </h2>
            </div>
            <div className='properties'>
        < Properties 
        key='1'
        img="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?w=1060&t=st=1665578156~exp=1665578756~hmac=80fb02bcd103de46f553c0aae4d321a1761d58e904460011abb74027a25721bc"
        title='2 Bedroom Apartment'
        details="Some quick example text to build on the card title and make up the bulk of the card's content."
        button='Full Details'
        />
        < Properties 
        key='2'
        img="https://img.freepik.com/free-photo/leather-sofa-wooden-table-living-room-interior-with-plant-concrete-wall-tv-3d-rendering_41470-3588.jpg?w=740&t=st=1665585142~exp=1665585742~hmac=bffc7771ec3a247614d00513ea663aa462c97d15831bd31036b47d7bba837686"
        title='Chamber & Hall'
        details="Some quick example text to build on the card title and make up the bulk of the card's content."
        button='Full Details'
        />
        < Properties
        key='3'
        img="https://img.freepik.com/free-photo/modern-interior-room-with-furniture-tv-room-dining-room-kitchen-3d-rendering_41470-3376.jpg?w=996&t=st=1665587323~exp=1665587923~hmac=341fe5d0f50200449b407e774eea2a81a5cad34a4ba7a0f86e38768239d68b74"
        title='Single room-Self Contained'
        details="Some quick example text to build on the card title and make up the bulk of the card's content."
        button='Full Details'
        />
        < Properties
        key='4'
        img="https://img.freepik.com/free-photo/living-room-modern-apartment-with-two-identical-sofas-opposite-each-other_181624-14768.jpg?w=996&t=st=1665585973~exp=1665586573~hmac=6d142af30c0f0e76d6d5b55fa0d49025b0b889360cc095fb2fe53dd4be3107e3"
        title='Chamber & Hall'
        details="Some quick example text to build on the card title and make up the bulk of the card's content."
        button='Full Details'
            />
        < Properties
          key='5'
          img="https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=996&t=st=1665613886~exp=1665614486~hmac=1821c47a50470137beb9ea60ae37e5d3ad837a40f9d50a45b0709e38b2d7aaac"
          title='Chamber & Hall'
          details="Some quick example text to build on the card title and make up the bulk of the card's content."
          button='Full Details'
        />
        < Properties
          key='6'
                    img="https://img.freepik.com/free-photo/interior-with-bid-dining-room-modern-private-house_181624-17504.jpg?w=996&t=st=1665614086~exp=1665614686~hmac=a84c2423e86488a42fec15966b4bc119f97e11823fe8ed9dc5498a011f279898"
          title='Chamber & Hall'
          details="Some quick example text to build on the card title and make up the bulk of the card's content."
          button='Full Details'
        />    
            </div>
        </div>
    );
}
 
export default Gallery;
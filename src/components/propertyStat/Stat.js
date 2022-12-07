import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './stat.css';

// class="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated"

const Stat = () => {
    return (
        <>
            <Container className='statGrid'>
                <Row>
                    <Col>
                <div className='statGrid-div'>
            <strong className='number' data-number="305" >305</strong>
            <span>
                Area
                <br/>
                Population
            </span>
        </div>
                    </Col>
                    <Col>
                <div className='statGrid-div'>
                    <strong className='number' data-number="1090" >1,090</strong>
                    <span>
                        Total
                        <br />
                        Properties
                    </span>
        </div>
                    </Col>
                    <Col>
                <div className='statGrid-div'>
                    <strong className='number' data-number="209">209</strong>
                    <span>
                        Average
                        <br />
                        House
                    </span>
                </div>
                    </Col>
                    <Col>
                <div className='statGrid-div'>
                    <strong className='number' data-number="67">67</strong>
                    <span>
                        Total
                        <br />
                        Branches
                    </span>
                </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default Stat;
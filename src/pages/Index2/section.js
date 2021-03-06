import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }

    callModal = () => {
        this.refs.child.openModal();
    }

    render() {
        return (
            <React.Fragment>
        <section className="section bg-home home-half" id="home" data-image-src="images/bg-home.jpg">
            <div className="bg-overlay"></div>
            <div className="display-table">
                <div className="display-table-cell">
                    <Container>
                        <Row>
                            <Col lg={{size:8, offset :2}}  className="col-lg-8 offset-lg-2 text-white text-center">
                                <h1 style={{fontWeight: "600", paddingTop: "3rem", paddingBottom: "3rem"}} className="home-title">أعلن عبر منصة السناب شات الرسمية</h1>
                                <p style={{paddingTop: "3rem", paddingBottom: "2rem", margin: "1rem", color: "#000000", textAlign: "justify", direction: "rtl", lineHeight: "2rem"}}>اصبح سناب شات واحد من أكثر التطبيقات استخداماً في العالم حيث وصل مستخدميه إلى 180 مليون مستخدم يومياً، ويعتبر الاعلان على السناب واحدة من أنجح أنواع الاعلانات، لذلك سوف نقدم لك دراسة متكاملة تعمل على تحقيق أهدافك بإتباع أفضل و أقوى الاستراتيجيات الإعلانية الخاصة بنا. نسعد بخدمتكم.</p>                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="wave-effect wave-anim">
                <div className="waves-shape shape-one">
                    <div className="wave wave-one" style={{backgroundImage : `url(assets/images/wave-shape/wave1.png)`}}></div>
                </div>
                <div className="waves-shape shape-two">
                    <div className="wave wave-two" style={{backgroundImage : `url(assets/images/wave-shape/wave2.png)`}}></div>
                </div>
                <div className="waves-shape shape-three">
                    <div className="wave wave-three" style={{backgroundImage : `url(assets/images/wave-shape/wave3.png)`}}></div>
                </div>
            </div>
        </section>
            </React.Fragment>
        );
    }
}

export default Section;

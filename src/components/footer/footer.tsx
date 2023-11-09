import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
interface IProps {

}

const Footer: React.FC<IProps> = (props: IProps): React.ReactElement => {


    return (
        <Container>
            <Row>
                <Col sm>About</Col>
                <Col sm>About</Col>
                <Col sm>Contacts</Col>
            </Row>
            <Row>
                <Col>© 2023 pwCommerce.com</Col>
            </Row>
        </Container>
        
    );
};

export default Footer;

import Card from 'react-bootstrap/Card';
import Menu from './menu/menu';
interface IProps {

}

const Header: React.FC<IProps> = (props: IProps): React.ReactElement => {


    return (
        <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            <Menu/>
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default Header;

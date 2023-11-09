import Card from 'react-bootstrap/Card';
interface IProps {
    nome: string;
    img: string;
    prezzo: number;

}

const ProdottoDettaglio: React.FC<IProps> = (props: IProps): React.ReactElement => {


    return (
        <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.nome}</Card.Title>
          <Card.Text>
            {props.prezzo}
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default ProdottoDettaglio;
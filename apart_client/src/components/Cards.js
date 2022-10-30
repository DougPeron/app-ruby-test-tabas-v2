import { height } from '@mui/system';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'

export default function Cards({title = 'Titulo',locale = 'local', price='preco', pic1='pic1', pic2='pic2', pic3='pic3', pic4='pic4', pic5='pic5' }) {
    return (
        <Card style={{ margin:'1rem', width: '26rem' }}>
          
          <Card.Body>
          <Carousel interval={null} nextLabel={''} prevLabel={''} indicatorLabels={[3]}>
                <Carousel.Item>
                    <img
                    style={{ width: '25rem'}}
                    className="d-block"
                    src={pic1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{ width: '25rem' }}
                    className="d-block"
                    src={pic2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{ width: '25rem'}}
                    className="d-block"
                    src={pic3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{ width: '25rem' }}
                    className="d-block"
                    src={pic4}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{ width: '25rem' }}
                    className="d-block"
                    src={pic5}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Text>
              {locale}
            </Card.Text>
            <Card.Title >{price}</Card.Title>
            <Button variant="primary">Saiba Mais</Button>
          </Card.Body>
        </Card>
      );
}
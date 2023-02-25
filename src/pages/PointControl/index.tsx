import { Container } from './styles';

export default function PointControl() {
  return (
    <Container>
      <header>
        <div className='clock'>
          <h5>Relógio de ponto</h5>

          <div className='codeName'>
            <span>#ABCD123</span>
            <span className='codeName__name'>Anacleto</span>
          </div>
        </div>

        <div className='hour'>
          <span className='hour__time'>0h00m</span>
          <span>Horas de hoje</span>
        </div>
      </header>

      <button>Hora de (entrada/saída)</button>

      <div className='historicContainer'>
        <h5>Dias anteriores</h5>
        <div className='historic'>
          <span className='historic__date'>03/03/2023</span>
          <span>7h30</span>
        </div>
        <div className='historic'>
          <span className='historic__date'>03/03/2023</span>
          <span>7h30</span>
        </div>
        <div className='historic'>
          <span className='historic__date'>03/03/2023</span>
          <span>7h30</span>
        </div>
        <div className='historic'>
          <span className='historic__date'>03/03/2023</span>
          <span>7h30</span>
        </div>
        <div className='historic'>
          <span className='historic__date'>03/03/2023</span>
          <span>7h30</span>
        </div>
      </div>
    </Container>
  );
}

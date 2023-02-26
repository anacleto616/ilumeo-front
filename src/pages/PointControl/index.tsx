import { useEffect, useRef, useState } from 'react';
import { api } from '../../libraries/axios';
import { PointControlHistoricFormattedType } from '../../types/PointControlHistoricFormattedType';
import { Container } from './styles';

export default function PointControl() {
  const [pointControlHistoric, setPointControlHistoric] = useState<
  PointControlHistoricFormattedType[]
  >([]);

  async function handleGetPointControlHistoric() {
    const response = await api.get(
      '/point-control-historic/074df31f-8d81-4e02-876e-621ab63d19de'
    );

    setPointControlHistoric(response.data);
  }

  const { current: pointControlHistoricCurrent } = useRef(pointControlHistoric);

  useEffect(() => {
    handleGetPointControlHistoric();
  }, [pointControlHistoricCurrent]);

  return (
    <Container>
      <header>
        <div className="clock">
          <h5>Relógio de ponto</h5>

          <div className="codeName">
            <span>#ABCD123</span>
            <span className="codeName__name">Anacleto</span>
          </div>
        </div>

        <div className="hour">
          <span className="hour__time">0h00m</span>
          <span>Horas de hoje</span>
        </div>
      </header>

      <button>Hora de (entrada/saída)</button>

      <div className="historicContainer">
        <h5>Dias anteriores</h5>
        {pointControlHistoric.map(pointControl => (
          <div key={pointControl.id} className="historic">
            <span className="historic__date">{pointControl.day_worked}</span>
            <span>{pointControl.worked_hours}</span>
          </div>
        ))}
      </div>
    </Container>
  );
}

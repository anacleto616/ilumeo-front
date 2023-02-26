import { useEffect, useRef, useState } from 'react';
import { api } from '../../libraries/axios';
import { EmployeeType } from '../../types/Employee';
import { PointControlHistoricFormattedType } from '../../types/PointControlHistoricFormattedType';
import { Container } from './styles';

export default function PointControl() {
  const [pointControlHistoric, setPointControlHistoric] = useState<
  PointControlHistoricFormattedType[]
  >([]);

  const [employee, setEmployee] = useState<EmployeeType>();

  async function handleGetEmployee() {
    const response = await api.get<EmployeeType>(
      '/employee/074df31f-8d81-4e02-876e-621ab63d19de'
    );

    setEmployee(response.data);
  }

  async function handleGetPointControlHistoric() {
    const response = await api.get<PointControlHistoricFormattedType[]>(
      '/point-control-historic/074df31f-8d81-4e02-876e-621ab63d19de'
    );

    setPointControlHistoric(response.data);
  }

  const { current: pointControlHistoricCurrent } = useRef(pointControlHistoric);

  useEffect(() => {
    handleGetEmployee();
  }, []);

  useEffect(() => {
    handleGetPointControlHistoric();
  }, [pointControlHistoricCurrent]);

  return (
    <Container>
      <header>
        <div className="clock">
          <h5>Relógio de ponto</h5>

          <div className="codeName">
            <span>#{employee?.employee_code}</span>
            <span className="codeName__name">{employee?.name}</span>
          </div>
        </div>

        <div className="hour">
          <span className="hour__time">0h</span>
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

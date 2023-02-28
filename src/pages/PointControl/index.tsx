import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import PointControlHistoric from '../../components/PointControlHistoric';
import { api } from '../../libraries/axios';
import { EmployeeType } from '../../types/Employee';
import { PointControlHistoricFormattedType } from '../../types/PointControlHistoricFormattedType';
import { PointControlType } from '../../types/PointControlType';
import toHoursAndMinutes from '../../utils/toHoursAndMinutes';
import { Container } from './styles';

export default function PointControl() {
  const { id } = useParams();

  const [employee, setEmployee] = useState<EmployeeType>();

  const [pointControlHistoric, setPointControlHistoric] = useState<
  PointControlHistoricFormattedType[]
  >([]);

  const [workedHours, setWorkedHours] = useState<number>(0);
  const [startHour, setStartHour] = useState<number>(0);
  const [officeHours, setOfficeHours] = useState<string>('0h');
  const [timeActive, setTimeActive] = useState<boolean>(false);

  async function handleGetEmployee() {
    const response = await api.get<EmployeeType>(
      `/employee/${id}`
    );

    setEmployee(response.data);
  }

  async function handleSetOrResetDataTime() {
    if (!timeActive) {
      setTimeActive(true);
      setStartHour(Date.now());
      return;
    }
    setTimeActive(false);
    setStartHour(0);
    setOfficeHours('0h');
    handleSavePointControlHistoric();
    alert('Saída finalizada! Registro de ponto salvo com sucesso! Até mais!');
    window.location.reload();
  }

  async function handleTimer() {
    if (timeActive) {
      const currentOfficeHoursMilisec = (Date.now() - startHour);
      const currentOfficeHoursMinutes = Math.floor(currentOfficeHoursMilisec / 60000);
      const currentOfficeHours = toHoursAndMinutes(currentOfficeHoursMinutes);
      setWorkedHours(currentOfficeHoursMinutes);
      setOfficeHours(currentOfficeHours);
    }
  }

  async function handleSavePointControlHistoric() {
    const dayWorked = new Date().toISOString();

    await api.post<PointControlType>('/point-control-historic', {
      day_worked: dayWorked,
      employeeId: id,
      worked_hours: workedHours,
    });
  }

  async function handleGetPointControlHistoric() {
    const response = await api.get<PointControlHistoricFormattedType[]>(
      `/point-control-historic/${id}`
    );

    setPointControlHistoric(response.data);
  }

  const { current: pointControlHistoricCurrent } = useRef(pointControlHistoric);

  useEffect(() => {
    handleGetEmployee();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => handleTimer(), 60000);

    return () => clearInterval(interval);
  }, [timeActive === true]);

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
          <span className="hour__time">{officeHours}</span>
          <span>Horas de hoje</span>
        </div>
      </header>

      <Button onClick={handleSetOrResetDataTime}>
        {!timeActive ? 'Hora de entrada' : 'Hora de saída'}
      </Button>

      <div className="historicContainer">
        <h5>Dias anteriores</h5>
        {pointControlHistoric.map(pointControl => (
          <PointControlHistoric
            key={pointControl.id}
            day_worked={pointControl.day_worked}
            worked_hours={pointControl.worked_hours}
          />
        ))}
      </div>
    </Container>
  );
}

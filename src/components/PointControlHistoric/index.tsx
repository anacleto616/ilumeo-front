import { PointControlHistoricFormattedType } from '../../types/PointControlHistoricFormattedType';
import { Historic } from './styles';

export default function PointControlHistoric(props: PointControlHistoricFormattedType) {
  return (
    <Historic>
      <span className="historic__date">{props.day_worked}</span>
      <span>{props.worked_hours}</span>
    </Historic>
  );
}

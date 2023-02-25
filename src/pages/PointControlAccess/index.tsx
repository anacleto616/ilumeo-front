import { Container } from './styles';

export default function PointControlAccess() {
  return (
    <Container>
      <span>Ponto <b>Ilumeo</b></span>

      <form>
        <label htmlFor="employeeCode">Código do usuário</label>
        <input type="text" id="employeeCode" />

        <button type="submit">Confirmar</button>
      </form>
    </Container>
  );
}

import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import { api } from '../../libraries/axios';
import { EmployeeType } from '../../types/Employee';

const validationEmployee = yup.object().shape({
  employee_code: yup
    .string()
    .trim()
    .uppercase()
    .required('Código obrigatório!')
    .min(7, 'O tamanho mínimo do código é de 7 caracteres.')
    .max(7, 'O tamanho máximo do código é de 7 caracteres.'),
});

export default function PointControlAccess() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeType>({ resolver: yupResolver(validationEmployee) });

  const handleAccesPointControl = async (data: FieldValues) => {
    try {
      const access = await api.post('/access', data);

      const employees = await api.get<EmployeeType[]>('/employee');

      const employee = employees.data.find((employee) => employee.employee_code === data.employee_code);

      if (access.status === 200) {
        alert(`Bem-vindo ao controle de ponto, ${employee?.name}!`);
        navigate(`/point-control/${employee?.id}`);
      }
    } catch (error) {
      alert('Código Inválido.');
    }
  };

  return (
    <Container>
      <h3>Ponto <b>Ilumeo</b></h3>

      <form onSubmit={handleSubmit(handleAccesPointControl)}>
        <label htmlFor="employee_code">Código do usuário</label>
        <input type="text" id="employee_code" {...register('employee_code')} />
        <p>{errors.employee_code?.message}</p>

        <button>Confirmar</button>
      </form>
    </Container>
  );
}

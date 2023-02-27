import { ButtonProps } from '../../types/ButtonProps';

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
}

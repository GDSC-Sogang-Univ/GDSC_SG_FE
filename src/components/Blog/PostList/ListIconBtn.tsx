interface Props {
  isSelected?: boolean;
  onClick: () => void;
}

const ListIconBtn = ({ isSelected = false, onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <svg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'>
        <path
          d='M1.91589 8.69301H16.0841C17.3589 8.69301 18 7.96006 18 6.45411V2.71929C18 1.22335 17.3589 0.5 16.0845 0.5H1.91554C0.641118 0.5 0 1.22335 0 2.71929V6.45453C0 7.96047 0.641118 8.69342 1.91554 8.69342M1.91554 18.5H16.0838C17.3585 18.5 17.9996 17.7766 17.9996 16.2711V12.5263C17.9996 11.0399 17.3585 10.307 16.0841 10.307H1.91554C0.641118 10.307 0 11.0399 0 12.5263V16.2711C0 17.7766 0.641118 18.5 1.91554 18.5Z'
          fill={isSelected ? '#5F747C' : '#C1CFD4'}
        />
      </svg>
    </button>
  );
};

export default ListIconBtn;

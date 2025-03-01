interface Props {
  isSelected?: boolean;
  onClick: () => void;
}

const CardIconBtn = ({ isSelected = false, onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <svg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'>
        <path
          d='M11.2175 8.6932H16.454C17.482 8.6932 18 8.06744 18 6.77714V2.40646C18 1.11574 17.482 0.5 16.454 0.5H11.2175C10.1895 0.5 9.67148 1.11574 9.67148 2.40646V6.77714C9.67148 8.06744 10.1895 8.6932 11.2175 8.6932ZM1.54567 8.6932H6.78216C7.81019 8.6932 8.32817 8.06744 8.32817 6.77714V2.40646C8.32817 1.11574 7.81019 0.5 6.78216 0.5H1.54567C0.517986 0.5 0 1.11574 0 2.40646V6.77714C0 8.06744 0.517986 8.6932 1.54567 8.6932ZM1.54567 18.5H6.78216C7.81019 18.5 8.32817 17.8843 8.32817 16.5935V12.2133C8.32817 10.9326 7.81019 10.3068 6.78216 10.3068H1.54567C0.517986 10.3068 0 10.9326 0 12.2133V16.5935C0 17.8843 0.517986 18.5 1.54567 18.5ZM11.2175 18.5H16.454C17.482 18.5 18 17.8843 18 16.5935V12.2133C18 10.9326 17.482 10.3068 16.454 10.3068H11.2175C10.1895 10.3068 9.67148 10.9326 9.67148 12.2133V16.5935C9.67148 17.8843 10.1895 18.5 11.2175 18.5Z'
          fill={isSelected ? '#5F747C' : '#C1CFD4'}
        />
      </svg>
    </button>
  );
};

export default CardIconBtn;

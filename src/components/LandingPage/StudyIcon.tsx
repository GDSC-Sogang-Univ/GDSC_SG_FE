interface Props {
  color: 'red' | 'blue' | 'green';
}

const COLOR_CODE = {
  red: '#EA4435',
  blue: '#3F74E0',
  green: '#34A853',
};

const StudyIcon = ({ color }: Props) => {
  return (
    <svg width='13' height='24' viewBox='0 0 13 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13 13C13 5.8203 7.1797 0 -1.78814e-07 0V11C-1.78814e-07 18.1797 5.8203 24 13 24V13Z'
        fill={COLOR_CODE[color]}
      />
    </svg>
  );
};

export default StudyIcon;

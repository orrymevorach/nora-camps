import styled from './drop-down-menu.module.scss';

export default function DropDownMenu({ isToggled }) {
  const testPaintings = [
    'Landscape',
    'Mountain',
    'River',
    'Grassland',
    'House',
  ];

  const test = option => {
    console.log(option);
  };

  return (
    <>
      {isToggled && (
        <ul className={styled.ul}>
          {testPaintings.map(option => {
            return (
              <li
                className={styled.li}
                key={option}
                onClick={() => test(option)}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

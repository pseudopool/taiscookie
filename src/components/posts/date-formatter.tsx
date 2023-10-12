import {css} from '@emotion/react';
import {parseISO, format} from 'date-fns';
import {Theme} from '../../styles/Theme';

type Props = {
  dateString: string;
};

const DateFormatter = ({dateString}: Props) => {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      css={css`
        color: ${Theme.textGray};
        font-weight: 300;
        font-size: small;
      `}
    >
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
};

export default DateFormatter;

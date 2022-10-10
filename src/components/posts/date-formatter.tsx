import { css } from "@emotion/react";
import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      css={css`
        font-size: 0.8rem;
        font-weight: 100;
      `}
    >
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
};

export default DateFormatter;

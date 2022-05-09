import Image from "next/image";
import { Button, Wrapper } from "./styles";

interface PaginationProps {
  page: number;
  totalPages: number;
  // onPaginationClick?: React.MouseEventHandler<HTMLButtonElement>;
  onPaginationClick?: any;
}

const Pagination = ({
  page,
  totalPages,
  onPaginationClick,
}: PaginationProps) => {
  return (
    <Wrapper>
      <p>
        Página <span>{page}</span> de <span>{Math.ceil(totalPages)}</span>
      </p>
      <Button
        className={page === 1 ? "disabled" : ""}
        onClick={() => onPaginationClick("prev")}
      >
        <Image src="/chevron.svg" width={6} height={10} alt="Anterior" />
      </Button>
      <Button
        className={page === Math.ceil(totalPages) ? "disabled" : ""}
        onClick={() => onPaginationClick("next")}
      >
        <Image src="/chevron.svg" width={6} height={10} alt="Próxima" />
      </Button>
    </Wrapper>
  );
};

export default Pagination;

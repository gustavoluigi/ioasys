/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Wrapper } from "./styles";

interface BookProps {
  authors: string[];
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
}

const Card = ({ book }: { book: BookProps }) => {
  return (
    <Wrapper>
      <div className="box-img">
        <Image
          src={
            book.imageUrl ? book.imageUrl : "http://via.placeholder.com/81x122"
          }
          width={81}
          height={122}
          alt={book.title}
        />
      </div>
      <div className="box-text">
        <h2 className="title">{book.title}</h2>
        <p className="author">
          {book.authors.map(
            (author: string, i: number, { length }) =>
              author + (length - 1 === i ? "" : ", ")
          )}
        </p>
        <p className="pages">{book.pageCount} páginas</p>
        <p className="publisher">{book.publisher}</p>
        <p className="published">Publicado em {book.published}</p>
      </div>
    </Wrapper>
  );
};

export default Card;

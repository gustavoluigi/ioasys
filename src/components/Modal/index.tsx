/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseModal, Container, Overlay } from "./styles";

type Book = {
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
};

interface ModalProps {
  selector: string;
  onClickClose: React.MouseEventHandler<HTMLButtonElement>;
  bookData: Book;
}

const Modal = ({ selector, onClickClose, bookData }: ModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current
    ? createPortal(
        <Overlay>
          <CloseModal onClick={onClickClose}>
            <Image src="/close.svg" width={10} height={10} alt="Fechar modal" />
          </CloseModal>
          <Container>
            <div className="row">
              <img
                src={
                  bookData.imageUrl
                    ? bookData.imageUrl
                    : "http://via.placeholder.com/81x122"
                }
                alt={bookData.title}
              />
              <div className="box-text">
                <h2 className="title">{bookData.title}</h2>
                <p className="author">
                  {bookData.authors.map(
                    (author: string, i: number, { length }) =>
                      author + (length - 1 === i ? "" : ", ")
                  )}
                </p>
                <p className="title-section">Informações</p>
                <div className="item">
                  <p>Páginas</p>
                  <p>{bookData.pageCount} páginas</p>
                </div>
                <div className="item">
                  <p>Editora</p>
                  <p>{bookData.publisher}</p>
                </div>
                <div className="item">
                  <p>Publicação</p>
                  <p>{bookData.published}</p>
                </div>
                <div className="item">
                  <p>Idioma</p>
                  <p>{bookData.language}</p>
                </div>
                <div className="item">
                  <p>Título Original</p>
                  <p>{bookData.title}</p>
                </div>
                <div className="item">
                  <p>ISBN-10</p>
                  <p>{bookData.isbn10}</p>
                </div>
                <div className="item">
                  <p>ISBN-13</p>
                  <p>{bookData.isbn13}</p>
                </div>
                <p className="title-section">Resenha da Editora</p>
                <p className="resenha">{bookData.description}</p>
              </div>
            </div>
          </Container>
        </Overlay>,
        ref.current!
      )
    : null;
};

export default Modal;

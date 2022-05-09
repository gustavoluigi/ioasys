import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import Container from "../../components/Layout/Container";
import Loader from "../../components/Loader";
import LogoutButton from "../../components/LogoutButton";
import Modal from "../../components/Modal";
import Pagination from "../../components/Pagination";
import { AuthContext } from "../../context/authContext";
import api from "../../services/api";
import { Title, Row, Wrapper } from "./styles";

interface Book {
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

const Books = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [books, setBooks] = useState([] as Book[]);
  const [bookData, setBookData] = useState<Book>({
    authors: ["", ""],
    category: "",
    description: "",
    id: "",
    imageUrl: "",
    isbn10: "",
    isbn13: "",
    language: "",
    pageCount: 0,
    published: 0,
    publisher: "",
    title: "",
  });
  const [mountModal, setMountModal] = useState(false);
  const router = useRouter();
  const { authenticated }: any = useContext(AuthContext);

  useEffect(() => {
    if (!authenticated) {
      router.push("/login");
    }
  });

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const res = await api.get(
        `https://books.ioasys.com.br/api/v1/books?page=${page}&amount=12`
      );

      const result = await res.data;
      setPage(result.page);
      setTotalPages(result.totalPages);
      setBooks(result.data);
      setLoading(false);
    };

    fetchBooks();
  }, [page]);

  const openModal = async (id: string) => {
    console.log(id);
    const res = await api.get(`https://books.ioasys.com.br/api/v1/books/${id}`);
    const result = await res.data;
    setBookData(result);
    setMountModal(true);
  };

  const handlePaginationClick = (data: string) => {
    if (!loading) {
      if (data === "prev") {
        setPage((prevState) => prevState - 1);
      } else {
        setPage((prevState) => prevState + 1);
      }
    }
  };

  return (
    <>
      {loading && <Loader selector="#loader-root" />}
      <Head>
        <title>Livros - ioasys Books</title>
      </Head>
      <Wrapper>
        <Container>
          <Title>
            <Image src="/logo-b.svg" width={104} height={36} alt="ioasys" />
            <p>Books</p>
            <LogoutButton />
          </Title>
          <Row>
            {mountModal && (
              <Modal
                selector="#modal-root"
                onClickClose={() => setMountModal(false)}
                bookData={bookData}
              ></Modal>
            )}

            {books &&
              books.map((book) => (
                <div
                  className="col"
                  key={book.id}
                  onClick={() => openModal(book.id)}
                >
                  <Card book={book} />
                </div>
              ))}
          </Row>
          {books && (
            <Pagination
              page={page}
              totalPages={totalPages}
              onPaginationClick={(e: string) => handlePaginationClick(e)}
            />
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default Books;

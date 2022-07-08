import Image from "next/image";
import Link from "next/link";
import { Container } from "./styles";

export default function Menu() {
  return (
    <Container>
      <div className="containerLogo">
        <Image
          src="/logo.png"
          alt="Mentes Notávais"
          height="56px"
          width="160px"
        ></Image>
      </div>
      <main>
        <h2>Teste de Programação Front-end:</h2>
        <Link href="/calculator">
          <a>
            <p>Abrir aplicativo</p>
          </a>
        </Link>
      </main>
    </Container>
  );
}

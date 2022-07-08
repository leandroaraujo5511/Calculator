import { Container } from "./styles";

type DisplayResultsProps = {
  results: number;
  historic: string;
};

export default function DisplayResults({
  results,
  historic,
}: DisplayResultsProps) {
  return (
    <Container>
      <div className="containerResults">
        <div className="containerHistoric">
          <span>{historic}</span>
        </div>
        <a>{results}</a>
      </div>
    </Container>
  );
}

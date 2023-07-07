import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../../common/Header";

const AuthorPage = () => (
  <Container>
    <Header title={"O autorze"} />
    <Section
      title={"Krystian Żybura"}
      body={
        <article>
          Znasz już moje imię, obecnie mam 21 lat i{" "}
          <strong>
            posiadam niesamowitą pasję w stosunku do urządzeń elektronicznych
          </strong>
          . Interesuje mnie ich budowa, czyli z czego dokładnie się składają,
          jak są zaprogramowane oraz wiedza na temat ich możliwości, czy też
          jakie możemy wprowadzić usprawniania, aby działały one wydajniej. Nie
          zdziwi cię pewnie fakt, że z zawodu jestem informatykiem. Po
          ukończeniu szkoły średniej postanowiłem kontynuować rozwijanie się w
          tym kierunku zawodowym a jako, że jest to dziedzina niezwykle obszerna
          i można ją zgłebiać w zasadzie bez końca, to finalnie zdecydowałem się
          na rozpoczęcie nauki programowania.
        </article>
      }
    />
  </Container>
);

export default AuthorPage;

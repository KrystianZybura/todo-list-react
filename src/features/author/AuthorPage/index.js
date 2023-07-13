import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Article } from "./styled";

const AuthorPage = () => (
  <Container>
    <Header title={"O autorze"} />
    <Section
      title={"Krystian Żybura"}
      body={
        <Article>
          <h2>Deployment test 😎</h2>
          <p>
            <strong>Cześć</strong>, chciałbym Ci trochę o sobie opowiedzieć -
            jestem początkującym programistą, mam 21 lat i być może już
            wspominałem, ale{" "}
            <b>
              posiadam niesamowitą pasję w stosunku do urządzeń elektronicznych
            </b>
            . Interesuje mnie ich budowa, z czego dokładnie się składają, jak są
            zaprogramowane oraz wiedza na temat ich możliwości, czy też jakie
            możemy wprowadzić usprawniania, aby działały one lepiej i wydajniej.
            Nie zdziwi cię pewnie fakt, że <b>z zawodu jestem informatykiem</b>.
            Po ukończeniu szkoły średniej postanowiłem kontynuować rozwijanie
            się w tym kierunku zawodowym a jako, że jest to dziedzina niezwykle
            obszerna i można ją zgłebiać w zasadzie bez końca, to zdecydowałem
            się również na rozpoczęcie nauki programowania.
          </p>
          <p>
            Moje <b>zamiłowanie do programowania</b> niesamowicie się rozwinęło
            odkąd zacząłem coraz bardziej zagłębiać się w dziedzinę Frontendu,
            <b> uważam że jest naprawdę niesamowity</b>, o jego rozwoju nie
            wspominająć 😎. Wspaniałe jest to ile technologii powstało do dnia
            dzisiejszego, praktycznie na każde dzisiejsze uniedogodnienie{" "}
            <b>jest już przygotowane sprawdzone rozwiązanie</b>, zupełnie jakby
            pisanie w <i>vanilla js</i> było jakąś abstrakcją, a jeszcze nie tak
            dawno temu o takim frameworku jak <i>React</i>, czy innych
            bibliotekach można było sobie tylko pomarzyć.
          </p>
          <p>
            Interesuję się rownież <b>różnymi dyscyplinami sportu</b> w zasadzie
            od już od bardzo dawna, kiedyś <i>piłka nożna, koszykówka</i>, z
            czasem <i>sztuki walki</i>, a dzisiaj <i>kulturystyka</i> i
            ćwiczenie na siłowni 💪. Mimo iż w podnoszeniu ciężarów wciąż jestem
            dość początkujący - mój staż to około pół roku, natomiast sprawia mi
            to niesamowicie wiele radości. Jako iż <b>lubię się rozwijać</b>, a
            każdy kolejny trening to pokonywanie kolejnych wewnętrznych barier,
            zwiększanie intensywności, poprawianie techniki ćwiczeń i wiele
            innych - idealnie ze sobą współgrają 🥰.
          </p>
          <p>
            W wolnym czasie lubię jeździć na rowerze, pograć w gierki z
            przyjaciółmi, czy też słuchać muzyki 🤩.
          </p>
        </Article>
      }
    />
  </Container>
);

export default AuthorPage;

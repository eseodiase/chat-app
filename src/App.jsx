import "./App.scss";

import Container from "./components/Container.jsx";

import Interface from "./components/Interface.jsx";

import ScreenTop from "./components/ScreenTop.jsx";

import Chat from "./components/Chat.jsx";

import Form from "./components/Form.jsx";

import Article from "./components/Article.jsx";

function App() {
  return (
    <main>
      <section>
        <div class="corner-left"></div>

        <div class="corner-right"></div>

        <Container>
          <Interface>
            <ScreenTop />

            <Chat />

            <Form />
          </Interface>

          <article>
            <Article />
          </article>
        </Container>

        <div class="corner-right-for-mobile-view"></div>
      </section>
    </main>
  );
}

export default App;
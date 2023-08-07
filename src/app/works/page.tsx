import Header from "@/components/Header";
import Works from "@/components/Works";
export default function Work() {
  return (
    <>
      <Header active={"Trabalhos"} />
      <Works.Root>
        <Works.Title text="Trabalhos:" />
        <Works.Carrusel>
          <Works.Card
            href={"https://miumiu.caiodetz.com"}
            title="Miu Miu App Flutter"
            src="https://miumiu.caiodetz.com/icons/Icon-512.png"
            content="Um Aplivativo para Gerenciamento Comercial de uma Lojinha no Instagram @_miu.miu_0"
          />
          <Works.Card
            href={"https://flutter.caiodetz.com"}
            title="Cartão de Visita App Flutter"
            src="https://flutter.caiodetz.com/icons/Icon-512.png"
            content="Um Aplivativo para Cartão de Visita Com alumas Informações"
          />
        </Works.Carrusel>
      </Works.Root>
    </>
  );
}

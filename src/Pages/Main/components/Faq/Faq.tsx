import { useStyles } from "./Faq.styles";
import CourseAccordion from "./components/CourseAccordion";

const Faq = () => {
  const classes = useStyles();
  return (
    <div className={classes.faqContainer}>
      <div className={classes.accordionContainer}>
        <CourseAccordion
          title="Como posso adquirir o curso?"
          content="Clique no botão “Comprar Agora”, preencha os dados e confirme o pagamento, é fácil!"
        />
        <CourseAccordion
          title="Tenho que comprar a licença do Roblox Studio?"
          content="Não, o Roblox Studio é gratuito!"
        />
        <CourseAccordion
          title="Quais as formas de pagamento?"
          content="Cartão de Crédito, Cartão virtual da Caixa, Boleto e Paypal."
        />
      </div>
      <div className={classes.accordionContainer}>
        <CourseAccordion
          title="Como vou assistir ao curso?"
          content="Nossos cursos são hospedados pela Hotmart, após a compra você receberá um link de acesso à plataforma."
        />
        <CourseAccordion
          title="O curso é gravado ou é ao vivo?"
          content="O curso é gravado, assim você pode assistir quando e onde quiser. Apenas o plantão de dúvidas é ao vivo."
        />
        <CourseAccordion
          title="Quais são os requisitos do Roblox Studio?"
          content="Roblox Studio está disponível para Windows e Mac, é a ferramenta de construção essencial para jogos Roblox. O uso é gratuito e não requer a compra de uma licença."
        />
      </div>
    </div>
  );
};

export default Faq;

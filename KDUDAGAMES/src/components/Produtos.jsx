const Produtos = () => {
  const jogos = [
    { nome: "AMONG US", descricao: "GRATUITO ESTA SEMANA!!!! Among Us é um jogo multijogador online com classificação PEGI 7+ que permite que um máximo de 10 jogadores assumam os papéis de 'Crewmate' ou 'Imposter'. O objetivo do jogo é que os Companheiros de Tripulação identifiquem os jogadores que são os Impostores no jogo.", imagem: "https://upload.wikimedia.org/wikipedia/pt/7/72/AmongUs_CoverArt.jpg" },
    { nome: "FALL GUYS", descricao: "PROMOÇÃO DO DIA!!!! Apenas 5,99R$. Fall Guys é um jogo party royale gratuito, multiplataforma e multijogador. Dispute com seus colegas em pistas de obstáculos desajeitadas e absurdas ou construa seu próprio percurso caótico para compartilhar com a comunidade. Convidamos você a mergulhar e se esquivar rumo ao pódio no panteão dos desajeitados.", imagem: "https://cdn2.unrealengine.com/fgss04-logo-400x400-400x400-506f241c8954.png?h=270&quality=medium&resize=1&w=480" },
  ];

  return (
    <section>
      <h2>Produtos</h2>
      <div>
        {jogos.map((jogo, index) => (
          <div key={index}>
            <img src={jogo.imagem} alt={jogo.nome} />
            <h3>{jogo.nome}</h3>
            <p>{jogo.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produtos;

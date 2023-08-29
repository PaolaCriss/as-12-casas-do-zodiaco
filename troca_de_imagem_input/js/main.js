function MudaDesenho() {
    const texto = document.querySelector("h1");
    const paragrafo = document.querySelector("p");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;

    if (valor == "aries" || valor == "áries") {
        texto.innerHTML = "Áries";
        imagem.setAttribute("src", "img/aries.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = "Mu de Áries: Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário."
    }
    else if (valor == "touro") {
        texto.innerHTML = "Touro";
        imagem.setAttribute("src", "img/touro.jpg");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = " Aldebaran de Touro: Aldebaran (アルデバラン, Aldebaran) é o Cavaleiro de Ouro da Constelação de Touro ( 牡牛座 タウラス , Taurus) durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte."
    }
    else if (valor == "gemeos" || valor == "gêmeos") {
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src", "img/gemeos.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = "Saga de Gêmeos: Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo."
    }
    else if (valor == "cancer" || valor == "câncer") {
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src", "img/cancer.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = "Máscara da Morte de Câncer: Máscara da Morte de Câncer ( 蟹座 キャンサー のデスマスク, Kyansā no Desumasuku?) é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis."
    }
    else if (valor == "leao" || valor == "leão") {
        texto.innerHTML = "Leão";
        imagem.setAttribute("src", "img/leao.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = " Aioria de Leão: Sucessor de Regulus de Leão. Aiolia cresceu na sombra do irmão, sofrendo todo tipo de humilhação e repudio, por ser irmão do traidor. Para mostrar seu verdadeiro valor, jura lealdade ao Mestre do Santuário e está sempre à frente das batalhas, como na saga do Santuário e no Episódio G."
    }
    else if (valor == "virgem") {
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src", "img/virgem.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = "Shaka de Virgem: Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades."
    }
    else if (valor == "libra") {
        texto.innerHTML = "Libra";
        imagem.setAttribute("src", "img/libra.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = "Dohko de Libra: Dohko de Libra (天秤座の童虎, Raibura no Dōko, Dohko de Libra?) fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries."
    }

    else if (valor == "escorpiao" || valor == "escorpião") {
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src", "img/escorpiao.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = "Milo de Escorpião: Milo foi um dos únicos cavaleiros de ouro, junto com Saga, Aiolia e Mu, que não morreu em batalha contra outro cavaleiro, apenas sucumbindo contra os espectros quando chegou no castelo de Hades onde todos tinham metade de sua força por causa da barreira."
    }
    else if (valor == "sagitario" || valor == "sagitário") {
        texto.innerHTML = "Sagitario";
        imagem.setAttribute("src", "img/sagitario.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = "Aioros de Sagitário: Aiolos era um dos mais poderosos Cavaleiros do Exército de Atena. Ele era um Cavaleiro de Ouro admirado por todos da mesma forma que Saga e por isso era outro candidato a Grande Mestre. Seus golpes secretos hoje são lendas. Com apenas 14 anos, Aiolos já mostrava ter uma capacidade física inquestionável."
    }
    else if (valor == "capricornio" || valor == "capricórnio") {
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src", "img/capricornio.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = "Shura de Capricórnio: Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio. Um dos principais personagens de Saint Seiya (Os Cavaleiros do Zodíaco), Shura se considera o cavaleiro mais fiel a Athena."
    }

    else if (valor == "aquario" || valor == "aquário") {
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src", "img/aquario.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = "Camus de Aquário: Camus é um cavaleiro bastante poderoso, com habilidade de baixar a temperatura e lançar o Pó de Diamante com grande facilidade. A Execução Aurora é o seu golpe secreto mais poderoso, que emite um frio próximo ao zero absoluto, e foi herdado por Hyoga."
    }
    
    else if (valor == "peixes") {
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src", "img/peixes.png");
        imagem.setAttribute("width", "300px");
        paragrafo.innerHTML = "Afrodite de Peixes: Afrodite de Peixes ( 魚座 ピスケス のアフロディーテ, Pisukesu no Afurodite?) é o Cavaleiro de Ouro do signo de peixes. Natural da Suécia. É o mais belo de todas as 88 constelações e acredita fielmente que 'a força é a justiça'. Utiliza as características da rosa pelo Cosmo e aplica os golpes."
    }
    else {
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src", "img/x.webp");
        imagem.setAttribute("width", "250px");
    }

}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShowzaFilmes';
  categoriaSelecionada: string = '';  // Adiciona esta linha

 listaDeFilmes = [
  { categoria: 'Aventura', titulo: 'Jurassic Park', urlImagem: 'https://upload.wikimedia.org/wikipedia/pt/b/bc/Jurassic_Park_logo.png' },
  { categoria: 'Drama', titulo: 'O Poderoso Chefão', urlImagem: 'https://mid.curitiba.pr.gov.br/2022/00337449.jpg' },
  { categoria: 'Comédia', titulo: 'Uma Linda Mulher', urlImagem: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/D871FDD1496C324361C3365CEDB6BC1B22DBF8729F025C70C04FAC4AE207F2D9/scale?width=1200&aspectRatio=1.78&format=jpeg' },
  { categoria: 'Suspense', titulo: 'Cabo do Medo', urlImagem: 'https://1.bp.blogspot.com/-Hxuu0wzCOlE/XbPWiD_PxpI/AAAAAAAAHu0/EM6RGd08xzQm35VbfJ1vBTa6k-RwAftwgCK4BGAYYCw/s1600/cape%2Bfear.png' },
  { categoria: 'Terror', titulo: 'Psicose', urlImagem: 'https://conteudo.imguol.com.br/c/entretenimento/b5/2019/04/08/cena-de-psicose-1554768249254_v2_1920x1152.jpg' },

  { categoria: 'Ação', titulo: 'Missão Impossível', urlImagem: 'https://cinepop.com.br/wp-content/uploads/2021/05/missao-impossivel-1.jpg' },
  { categoria: 'Ficção Científica', titulo: 'Avatar', urlImagem: 'https://www.tribunapr.com.br/wp-content/uploads/sites/1/2009/12/17-12-09_alm1171209.png' },
  { categoria: 'Animação', titulo: 'Frozen', urlImagem: 'https://jpimg.com.br/uploads/2017/04/120304196-frozen-uma-aventura-congelante-veja-o-trailer.jpg' },
  { categoria: 'Romance', titulo: 'Casablanca', urlImagem: 'https://cinemaemcena.com.br/uploads/img4f862f5574150.jpg' },
  { categoria: 'Histórico', titulo: 'Lincoln', urlImagem: 'https://www.infoescola.com/wp-content/uploads/2013/03/Lincoln.jpg' },

  { categoria: 'Aventura', titulo: 'O Senhor dos Anéis', urlImagem: 'https://files.tecnoblog.net/wp-content/uploads/2022/01/senhor-dos-aneis-ordem-e1612211670420.jpg' },
  { categoria: 'Drama', titulo: 'Cisne Negro', urlImagem: 'https://www.planocritico.com/wp-content/uploads/2017/09/171-cisne-negro.jpg' },
  { categoria: 'Comédia', titulo: 'Feitiço do Tempo', urlImagem: 'https://f.i.uol.com.br/fotografia/2020/09/04/15992335325f525dfcb5c54_1599233532_3x2_xl.jpg' },
  { categoria: 'Suspense', titulo: 'Janela Indiscreta', urlImagem: 'https://www.planocritico.com/wp-content/uploads/2020/05/janela-indiscreta.jpg' },
  { categoria: 'Terror', titulo: 'O Silêncio dos Inocentes', urlImagem: 'https://upload.wikimedia.org/wikipedia/pt/0/0a/Silence_of_the_lambs.png' },

  { categoria: 'Ação', titulo: 'Die Hard', urlImagem: 'https://cdn.ome.lt/legacy/images/galerias/Duro-de-Matar-5/Duro-de-Matar-5-poster-EW.jpg' },
  { categoria: 'Ficção Científica', titulo: 'O Exterminador do Futuro 2', urlImagem: 'https://media.fstatic.com/6HAeEE2_DOIgRIkx7FI2-RN1T94=/full-fit-in/629x300/media/articles/main/2020/07/02/theterminator-2000332614.jpeg '},
  { categoria: 'Animação', titulo: 'Shrek', urlImagem: 'https://ogimg.infoglobo.com.br/in/25024797-3d1-e8d/FT1086A/shrek.jpg' },
  { categoria: 'Romance', titulo: 'Amor à Segunda Vista', urlImagem: 'https://www.planocritico.com/wp-content/uploads/2017/01/Amor-a-Segunda-Vista.jpg' },
  { categoria: 'Histórico', titulo: 'Braveheart', urlImagem: 'https://media.fstatic.com/b3R0ui4fPbeFO8g__XPZ324-OSE=/322x478/smart/filters:format(webp)/media/movies/covers/2016/03/coracao-valente_t355_GbkVfnO.jpg' },

  { categoria: 'Aventura', titulo: 'Piratas do Caribe', urlImagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/68/PiratesDVDs.jpg/220px-PiratesDVDs.jpg' },
  { categoria: 'Drama', titulo: 'O Grande Gatsby', urlImagem: 'https://s2.glbimg.com/ktoFXp0Bz510gPUE_JcK7-EG2bwbB4flSIM-9DZnx8JIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/06/07/ok_gatsby-6.jpg' },
  { categoria: 'Comédia', titulo: 'Trovão Tropical', urlImagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/02/unnamed.jpg' },
  { categoria: 'Suspense', titulo: 'A Origem', urlImagem: 'https://musicart.xboxlive.com/7/e63b1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080' },
  { categoria: 'Terror', titulo: 'Annabelle', urlImagem: 'https://s2-marieclaire.glbimg.com/R6QYa4P1jh4un07msIHD-B2-cjE=/0x0:640x481/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_51f0194726ca4cae994c33379977582d/internal_photos/bs/2023/G/t/prkxnQQhqLlFbSUAwj3Q/2020-08-14-annabelle-doll-boneca-filme.jpeg' }
];

  get filmesFiltrados() {
    return this.listaDeFilmes.filter(filme => filme.categoria.toLowerCase() === this.categoriaSelecionada.toLowerCase());
  }

  atualizarCategoriaSelecionada(categoria: string) {
    this.categoriaSelecionada = categoria;
  }
}

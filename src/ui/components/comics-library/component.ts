import Component, {tracked} from '@glimmer/component';

export default class ComicsLibrary extends Component {
//Ajout une liste de comics
  @tracked current ;
  
  @tracked  comics = [
    {id: 1, title: "Akira", scriptwriter: "Katsuhiro Otomo", illustrator: "Katsuhiro Otomo"},
    {id: 2, title: "BlackSad", scriptwriter: "Juan Diaz Canales", illustrator: "Juanjo Guarnido"},
    {id: 3, title: "Calvin and Hobbes", scriptwriter: "Bill Watterson", illustrator: "Bill Watterson"},
    {id: 4, title: "Le mandat", scriptwriter: "Sembene Ousmane", illustrator: "Sembene Ousmane"}
  ];

  selectComic(comic){
    this.current =comic ;
  }
  //Ajout Action Supprimer
  deleteComic(comic){
    this.comics= this.comics.filter(x =>x.id!= comic.id);
  }

  saveComic(comic) {
    let index = this.comics.findIndex(x => x.id === comic.id);
    if (index >= 0) {
      this.comics = [...this.comics.slice(0, index), comic, ...this.comics.slice(index + 1)];
    } else {
      comic.id = this.comics.length + 1;
      this.comics = [...this.comics, comic];
    }
    this.current = comic;
  }

  newComic() {
    this.current = {}
  }
}

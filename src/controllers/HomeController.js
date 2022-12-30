import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Vanilza',
      sobrenome: 'Dario El-moor',
      email: 'vanilza.elmoor@gmail.com',
      idade: 70,
      peso: 83,
      altura: 1.55,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

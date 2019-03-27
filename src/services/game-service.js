class GameService {
  getQuestions = async () => {
    // const res = await fetch('../store/questions.json');
    const res = await require('../store/questions.json');

    // if (!res.ok) throw new Error(`Server error ${res.status}`);

    // return res.json();
    return [...res.data];
  };

  getStat = async () => {
    const res = await require('../store/stat.json');

    return [...res.data];
  };
}

export default new GameService();

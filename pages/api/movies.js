import moviesMock from '../../server/mocks/moviesMock.json'
export default (req, res) => {
  
  res.send(moviesMock);
};

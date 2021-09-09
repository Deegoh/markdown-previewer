import transformLineBreaks from '../string';

describe('transformLineBreaks', () => {
  it('should return the same', () => {
    expect(transformLineBreaks('toto')).toEqual('toto');
  });

  it('should tranform \r to br tag', () => {
    expect(transformLineBreaks('toto\r')).toEqual('toto<br />');
  });
});

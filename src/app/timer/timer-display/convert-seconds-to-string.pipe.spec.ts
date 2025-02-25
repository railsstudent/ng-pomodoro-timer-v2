import { ConvertSecondsToStringPipe } from './convert-seconds-to-string.pipe';

describe('ConvertSecondsToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertSecondsToStringPipe();
    expect(pipe).toBeTruthy();
  });
});

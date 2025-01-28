import { MaskCardNumberPipe } from './mask-card.pipe';

describe('MaskCardPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskCardNumberPipe();
    expect(pipe).toBeTruthy();
  });
});

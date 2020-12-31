import SkorModule, { Skor } from '../src';

describe('Skor', () => {
  test('the default export is the Skor class thingy', () => {
    expect(SkorModule).toBe(Skor);
  });

  test('subscribe() should set subscribed to true', () => {
    // Arrange
    const skor = new Skor();
    const before = skor.subscribed;
    // Act
    skor.subscribe();
    // Assert
    expect(before).toBe(false);
    expect(skor.subscribed).toBe(true);
  });

  test('subscribe() should return an unsubscribe callback', () => {
    // Arrange
    const skor = new Skor();
    const ubsub = skor.subscribe();
    expect(skor.subscribed).toBe(true);
    // Act
    ubsub();
    // Assert
    expect(skor.subscribed).toBe(false);
  });
});

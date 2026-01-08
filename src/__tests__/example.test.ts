import { describe, it, expect } from 'vitest';

describe('Tests básicos del proyecto', () => {
  it('debe sumar correctamente', () => {
    expect(1 + 1).toBe(2);
  });

  it('debe validar strings', () => {
    expect('Tecnovita').toContain('vita');
  });
});
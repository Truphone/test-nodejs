import { Express } from 'express';
import healthRoute from './health';
import { addRoutes } from './index';

jest.mock('./health', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Routes', () => {
  it('adds the correct ones', () => {
    const fakeApp = {
      get: jest.fn(),
      post: jest.fn(),
    };
    addRoutes(fakeApp as unknown as Express);
    expect(healthRoute).toHaveBeenCalledWith(fakeApp);
  });
});

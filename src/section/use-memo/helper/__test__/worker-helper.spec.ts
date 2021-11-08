import cities from '../../data/indonesia.slim.json';
import { getCityItems, getCityItemsWithSelectedItem } from '../worker.helper';

jest.mock(`../../data/indonesia.json`, () => cities.slice(0, 20));
jest.mock(`../worker.helper.ts`);

describe(`Testing City Helper`, () => {
  describe(`Testing Get City Items Function`, () => {
    it(`Without Passing City Name Parameter`, async () => {
      expect(await getCityItems(``)).toStrictEqual([
        {
          country: `US`,
          id: `0-Bay Minette`,
          lat: `30.88296`,
          lng: `-87.77305`,
          name: `Bay Minette`
        },
        {
          country: `US`,
          id: `1-Edna`,
          lat: `28.97859`,
          lng: `-96.64609`,
          name: `Edna`
        },
        {
          country: `US`,
          id: `2-Bayou La Batre`,
          lat: `30.40352`,
          lng: `-88.24852`,
          name: `Bayou La Batre`
        },
        {
          country: `US`,
          id: `3-Henderson`,
          lat: `32.15322`,
          lng: `-94.79938`,
          name: `Henderson`
        },
        {
          country: `US`,
          id: `4-Natalia`,
          lat: `29.18968`,
          lng: `-98.86253`,
          name: `Natalia`
        }
      ]);
    });

    it(`With Passing City Name Parameter`, async () => {
      expect(await getCityItems(`edna`)).toStrictEqual([
        {
          country: `US`,
          id: `1-Edna`,
          lat: `28.97859`,
          lng: `-96.64609`,
          name: `Edna`
        }
      ]);
    });
  });

  describe(`Testing Get City Items With Selected Item Function`, () => {
    it(`Without Passing City Name Parameter`, async () => {
      expect(await getCityItemsWithSelectedItem(``, undefined)).toStrictEqual([
        {
          country: `US`,
          id: `0-Bay Minette`,
          lat: `30.88296`,
          lng: `-87.77305`,
          name: `Bay Minette`
        },
        {
          country: `US`,
          id: `1-Edna`,
          lat: `28.97859`,
          lng: `-96.64609`,
          name: `Edna`
        },
        {
          country: `US`,
          id: `2-Bayou La Batre`,
          lat: `30.40352`,
          lng: `-88.24852`,
          name: `Bayou La Batre`
        },
        {
          country: `US`,
          id: `3-Henderson`,
          lat: `32.15322`,
          lng: `-94.79938`,
          name: `Henderson`
        },
        {
          country: `US`,
          id: `4-Natalia`,
          lat: `29.18968`,
          lng: `-98.86253`,
          name: `Natalia`
        }
      ]);
    });

    it(`With Passing Selected Item Parameter`, async () => {
      expect(
        await getCityItemsWithSelectedItem(``, {
          country: `US`,
          id: `1-Edna`,
          isActive: true,
          lat: `28.97859`,
          lng: `-96.64609`,
          name: `Edna`
        })
      ).toStrictEqual([
        {
          country: `US`,
          id: `1-Edna`,
          isActive: true,
          lat: `28.97859`,
          lng: `-96.64609`,
          name: `Edna`
        },
        {
          country: `US`,
          id: `0-Bay Minette`,
          lat: `30.88296`,
          lng: `-87.77305`,
          name: `Bay Minette`
        },
        {
          country: `US`,
          id: `2-Bayou La Batre`,
          lat: `30.40352`,
          lng: `-88.24852`,
          name: `Bayou La Batre`
        },
        {
          country: `US`,
          id: `3-Henderson`,
          lat: `32.15322`,
          lng: `-94.79938`,
          name: `Henderson`
        },
        {
          country: `US`,
          id: `4-Natalia`,
          lat: `29.18968`,
          lng: `-98.86253`,
          name: `Natalia`
        }
      ]);
    });

    it(`With Passing City Parameter`, async () => {
      expect(
        await getCityItemsWithSelectedItem(`edna`, undefined)
      ).toStrictEqual([
        {
          country: `US`,
          id: `1-Edna`,
          lat: `28.97859`,
          lng: `-96.64609`,
          name: `Edna`
        }
      ]);
    });

    it(`With Passing City & Selected Item Parameter`, async () => {
      expect(
        await getCityItemsWithSelectedItem(`edna`, {
          country: `US`,
          id: `1-Edna`,
          isActive: true,
          lat: `28.97859`,
          lng: `-96.64609`,
          name: `Edna`
        })
      ).toStrictEqual([
        {
          country: `US`,
          id: `1-Edna`,
          isActive: true,
          lat: `28.97859`,
          lng: `-96.64609`,
          name: `Edna`
        }
      ]);
    });
  });
});

import { describe, expect, it } from 'vitest';
import { $fetch, setup, url } from '@nuxt/test-utils';

describe('Testing Server API', async () => {
  await setup({
    dev: true,
    setupTimeout: 240000,
  });

  it('Fecthing API', async () => {
    console.log('**URL: ' + url('/api/api'));
    const data = await $fetch('/api/api');
    console.log('data', data);
    expect(data).toMatch('OK');
  });
});

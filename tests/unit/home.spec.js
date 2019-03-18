import { expect } from 'chai';
import { shallowMount, config } from '@vue/test-utils';
import Home from '@/views/home.vue';

config.mocks.$t = word => word;

describe('home.vue', () => {
  it('exists', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.exists()).equal(true);
  });
});

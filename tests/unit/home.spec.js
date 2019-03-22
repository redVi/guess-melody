import { expect } from 'chai';
import { shallowMount, config, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Artist from '@/views/artist.vue';
import routes from '@/router/routes';

config.mocks.$t = word => word;
const localVue = createLocalVue();
localVue.use(VueRouter);

describe('home.vue', () => {
  it('exists', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.exists()).equal(true);
  });

  it('redirect to artist.vue on click', () => {
    const router = new VueRouter({ routes });
    const wrapper = shallowMount(Home, { localVue, router });
    const artist = shallowMount(Artist);

    wrapper.find('.main-play').trigger('click');
    expect(artist.exists()).equal(true);
  });
});

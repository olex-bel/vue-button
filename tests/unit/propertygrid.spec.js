import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import PropertyGrid from "@/components/PropertyGrid";

describe('PropertyGrid.vue', () => {
    it('should contains property-grid--container', () => {
        const wrapper = shallowMount(PropertyGrid, {
            propsData: {
                items: []
            }
        });
        expect(wrapper.classes('property-grid--container')).that.is.true;
    });
});